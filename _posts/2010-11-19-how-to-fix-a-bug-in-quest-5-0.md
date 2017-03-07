---
layout: post
title: >
    How to fix a bug in Quest 5.0
permalink: /2010/11/19/how-to-fix-a-bug-in-quest-5-0
source: textadventures
sourceUrl: http://blog.textadventures.co.uk/2010/11/19/how-to-fix-a-bug-in-quest-5-0/
---
Recently a bug was added to the <a href="http://quest.codeplex.com/workitem/list/basic">Issue Tracker</a> which sounded like a great one for somebody new to the project to dive into. The issue was that commands with upper-case characters didn't work - you could type "take box" but not "TAKE BOX". Unfortunately, nobody took the opportunity to fix it, so I've fixed it myself. But I thought it would be a good idea to take you through the process from the beginning, so you can see exactly what's going on here. Hopefully by documenting this it will make it easier to join in with the project if you're interested, as I realise all that code can be a bit daunting at first.

This blog post will give you an overview of how Quest 5.0 processes user commands, without prior knowledge of how the system works - I'll try and guide you through the system assuming you've never seen the code before.

For this tutorial I'll assume you have Visual Studio 2010 installed, and that you've checked out the Quest 5.0 source code on <a href="http://quest.codeplex.com">CodePlex</a>. You should also read the <a href="http://quest5.net/index.php?title=Developers">Introduction for Developers</a> - although the Technical Overview may make more sense <em>after </em>reading this tutorial, so don't be put off just yet!

<span style="text-decoration:line-through;">Note that I have not yet checked in my fix for the bug, so you can still see the bug in action and follow the steps below to fix it on your own machine.</span> <strong>Update: </strong>The fix for this was checked in on 4th December 2010, so if you want to follow these instructions yourself, update to an earlier revision in SVN.
<h2>Reproducing the problem in the debugger</h2>
Fire up Visual Studio and open the solution file. Make sure that the "Quest" project is set as the StartUp project, then Run.

We could easily reproduce this issue in any game, and the SVN repository contains example ASLX game files under WorldModelWorldModelExamples-Public. To debug this I chose test.aslx.

Using this game, I did a bit of experimentation with a few different ways of writing the same command, and got this output:
<pre>
&gt; TAKE SOFA
I don't understand your command.

&gt; Take sofa
I don't understand your command.

&gt; take SOFA
You can't take it.

&gt; take sofa
You can't take it.
</pre>
This is interesting - it looks like Quest correctly handles different capitalisation for object names (it handled both "SOFA" and "sofa" in the final two commands, without telling us that it couldn't see an object of that name), but it seems to be having trouble with "TAKE" vs "take". So the problem is with capital letters in the first part of the command, rather than the object name.
<h2>What happens when we type a command</h2>
So, which part of the code handles commands? Let me take you on a tour...

First, we're typing commands into a textbox at the bottom of the Quest window, but where does that textbox live in the code?

<a href="http://new.textadventures.co.uk/wp-content/uploads/2010/11/bug1.png"><img class="alignnone size-full wp-image-155" title="bug1" src="http://new.textadventures.co.uk/wp-content/uploads/2010/11/bug1.png" alt="Screenshot" width="492" height="229" /></a>

The Quest project has a form called Main.vb that contains everything - not just the game playing interface, but the game editor, and the game launcher that you see when you first start Quest. But it's quite a thin wrapper - each of these components is implemented as a user control. The game playing interface is ctlPlayer, which is an instance of Player.vb in the Player project.

Go to Player.vb and you'll see this contains:
<ul>
	<li>a WebBrowser control, used for the game output</li>
	<li>a Label control at the top, used to display the current location</li>
	<li>two ElementList controls, defined in the same project. These are used for the "Inventory" and "Places and Objects" lists on the right of the screen.</li>
	<li>a Compass control, also defined in the same project.</li>
	<li>aha! A <strong>TextBox and Button</strong>, which is where we're typing in our commands.</li>
</ul>
So we now know where the chain of execution begins.
<h2>Passing the command from the GUI into the game</h2>
If you look at the code behind the button (cmdGo_Click), you'll see it simply calls the EnterText sub, which in turn calls RunCommand, which calls m_game.SendCommand(). The same thing gets called when you hit the Enter key inside the textbox (although it happens via a timer so that the KeyDown event code finishes before we send the command).

m_game is an instance of an object which implements the IASL interface. The idea of the interface is that, in future, we may well want to hook up different "engines" to the same Player interface. This would let the same Quest front-end handle games for potentially different systems entirely, or more likely just different versions of the Quest engine. So we never directly link the Player front-end to the WorldModel project, which in this case is the engine driving test.aslx - we only ever talk to it through the IASL interface.

The IASL interface is defined in the IASL project, and it defines a few methods and events but the really important ones are:
<ul>
	<li>SendCommand(string) which is how we pass a command into the game</li>
	<li>PrintText event which is how the game tells the GUI what text should be printed</li>
</ul>
So let's see what happens next. The WorldModel project has WorldModel.cs, which is our implementation of the IASL interface for Quest 5.0 games. If we go here and navigate to SendCommand, we can see that we print the command back, so the user knows what they just typed, and then we call RunProcedure and pass in various arguments.
<pre>RunProcedure("HandleCommand", new Parameters("command", command), false);</pre>
What's happening here is that instead of using C# code to handle the command, we're actually going into the ASLX file. WorldModel expects the ASLX file to provide a "HandleCommand" function, which will do all the work of processing what the user typed in. This is part of the design philosophy behind Quest 5.0 - a game author or Quest library author could define their own command parsing logic, or enhance the default logic, without having to make any changes to the Quest code itself.

So what we have here seems to be a bug in the Core library, in the HandleCommand function which is written in ASL, rather than a bug in the C# code.
<h2>Handling the command in the Core library</h2>
The default "HandleCommand" function appears in all ASLX games via Core.aslx, which is included in test.aslx (and probably will be in every Quest game) via the include tag:
<pre>&lt;include ref="Core.aslx"/&gt;</pre>
You can find Core.aslx under the Core folder in the WorldModel project. You'll see that it includes various other files, as a way of splitting up the file into more manageable parts. You can use Visual Studio's very handy "Find in Files" feature (Ctrl+Shift+F) to find where HandleCommand is defined - it's in CoreParser.aslx.

The ASL should be fairly easy to read as it's not too dissimilar to C#. All its script commands and functions are documented on the <a href="http://quest5.net/index.php?title=Main_Page">Quest wiki</a>.

Let me talk you through how the function works. The parameter "command" is populated with what the player typed in, such as "take sofa", and the first thing that happens is this:
<pre>candidates = NewObjectList()
foreach (cmd, ScopeCommands()) {
  if (IsRegexMatch(cmd.pattern, command)) {
    list add (candidates, cmd)
  }
}</pre>
All commands in Quest are objects, and they can either apply to the whole game or a specific room. In the snippet above, we find out what commands are available by calling ScopeCommands() - this will give us back a list of command objects (the function itself is defined in CoreParser.aslx, so take a look if you're interested).

Each command object has a property called "pattern", which defines a regular expression that the input must match to trigger the command. We loop through all available commands, see if the pattern matches our input, and then we have a list of candidates.

The rest of the function determines which candidate is the strongest match for the input. Then it populates variables and runs the command's script.

The command objects themselves are all defined in CoreCommands.aslx, and the "take" command is right at the top. The command object specifies the pattern regex that must be matched to trigger the command:
<pre>&lt;command name="take" pattern="[take]"&gt;</pre>
In this case the pattern is in square brackets. Anything in square brackets gets taken from the template. In this case the templates are defined in English.aslx, and if we search for "take" in this file we find three verb templates that match:
<pre>&lt;verbtemplate name="take"&gt;take&lt;/verbtemplate&gt;
&lt;verbtemplate name="take"&gt;get&lt;/verbtemplate&gt;
&lt;verbtemplate name="take"&gt;pick up&lt;/verbtemplate&gt;</pre>
Verb templates are a special kind of syntactic sugar to save us the hassle of repeatedly typing very similar (and very ugly) regular expressions. If you run the game and click the Tools menu, then Debugger, you'll see what the effect is. Click the Commands tab and look at the "take" object.

<a href="http://new.textadventures.co.uk/wp-content/uploads/2010/11/bug2.png"><img class="alignnone size-full wp-image-156" title="bug2" src="http://new.textadventures.co.uk/wp-content/uploads/2010/11/bug2.png" alt="Debugger screenshot" width="566" height="172" /></a>

You'll see that via the magic of these three verb templates, the "pattern" property of our "take" object becomes:
<pre>^take (?&lt;object&gt;.*)$|^get (?&lt;object&gt;.*)$|^pick up (?&lt;object&gt;.*)$</pre>
Now we see why both "take SOFA" and "take sofa" work - they both match this regular expression, with the named "object" group being "SOFA" or "sofa" respectively. But a command like "TAKE SOFA" will not be matched, as the regular expression expects the word "take" to be in lower case. This means that when we type "TAKE" in capitals, the "take" command won't even be added to the "candidates" list in the ASL snippet above, hence the command fails.
<h2>How best to fix this?</h2>
The problem is with this line in the CoreParser.aslx snippet above:
<pre>if (IsRegexMatch(cmd.pattern, command)) {</pre>
We want to perform a case-insensitive comparison, so we have a couple of options:
<ul>
	<li>lower-case the "command" string before passing in to the IsRegexMatch function</li>
	<li>update the IsRegexMatch function to perform a case-insensitive comparison</li>
</ul>
The first option is quickest, and would be a simple matter of updating the line like this:
<pre>if (IsRegexMatch(cmd.pattern, LCase(command))) {</pre>
However, I can see two problems with this:
<ul>
	<li>it requires all command patterns to be defined in lower-case</li>
	<li>it might not work in all languages</li>
</ul>
<a href="http://stackoverflow.com/questions/234591/upper-vs-lower-case">This question on StackOverflow</a> leads me to think that updating the IsRegexMatch function would be the best approach.

The IsRegexMatch function is defined in QuestFunctions.cs - so in fact we need to do a C# code change after all, and leave Core.aslx as it is!

[<strong>Update: </strong>This fix was checked in as part of other work which has moved the code that was in QuestFunctions.cs to a new file ExpressionOwner.cs]
<h2>Designing the fix</h2>
Here is the offending line in IsRegexMatch:
<pre>System.Text.RegularExpressions.Regex regex =
    new System.Text.RegularExpressions.Regex(regexPattern);</pre>
which we need to update to
<pre>System.Text.RegularExpressions.Regex regex =
    new System.Text.RegularExpressions.Regex(regexPattern,
        System.Text.RegularExpressions.RegexOptions.IgnoreCase);</pre>
Bear in mind this will affect all usages of the IsRegexMatch function - but a quick search through the code reveals that it's only used in one place, and that is the HandleCommand function we've been looking at. So I think this is a safe code change to make for now, and it's a reasonably safe assumption that anybody who wants to call this function in Quest is probably using it for command processing and therefore probably wants to do a case-insensitive search as well. But in the future it may be worth making an overload of this function so that we can specify a boolean to make it explicit whether we want a case-sensitive comparison or not. I won't add this now as I don't think there is much point in adding superfluous functions that may not be needed - it will be simple enough to add this later if anyone requires it.
<h2>Conclusion</h2>
So there we have it - a simple one-line change for a simple problem. It took quite a lot of explanation to get here, but hopefully now you have a feel for how things hang together. There is a lot more detail we could go into - just how does that ASL script get run, you may be wondering - and maybe I'll cover these another time. But now you have an overview of how it works, the best thing may be to step through the code yourself and see exactly what's happening at each level.

<span style="text-decoration:line-through;">As I said above I have not yet checked in my fix for this, so for now you can still see the bug in action and step through the code yourself using the tutorial above.</span> <strong>Update:</strong> You can still step through this code if you update to a revision prior to 4th December 2010, or you could still step through the current version - just bear in mind that the fixed code now appears in ExpressionOwner.cs.

I'm happy to answer any questions you may have, so please feel free to add comments to this blog or <a href="http://www.axeuk.com/phpBB3/viewforum.php?f=10">ask for help in the forum</a>. If there is an entire area of the system that you feel needs some more explanation, please let me know and I'll write another blog post to give you an overview.