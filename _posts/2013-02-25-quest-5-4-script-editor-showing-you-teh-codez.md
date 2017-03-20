---
layout: post
title: >
    Quest 5.4 Script Editor - showing you teh codez
permalink: /2013/02/25/quest-5-4-script-editor-showing-you-teh-codez
source: textadventures
sourceUrl: http://blog.textadventures.co.uk/2013/02/25/quest-5-4-script-editor-showing-you-teh-codez/
---
Scripts are everywhere in Quest. Want to play a sound when the user looks at an object? Choose "Run script" and then you can. Want to let the player pick up an object only if they are already carrying another? Choose "Run script" and you can.

Quest's script editor is easy to use even if you've done no programming before, because you can simply choose from a categorised list of commands. In Quest 5.4, this has been enhanced so that commonly used script commands are quickly available using buttons at the top.

<a href="/images/2013/textadventuresblog.files.wordpress.com-2013-02-script1.png"><img class="aligncenter size-full wp-image-2004" alt="Script Adder" src="/images/2013/textadventuresblog.files.wordpress.com-2013-02-script1.png" width="426" height="633" /></a>

As before, after choosing a command, it appears in the script editor, where depending on the command you chose, you can fill in text, choose the image, etc.

<a href="/images/2013/textadventuresblog.files.wordpress.com-2013-02-script2.png"><img class="aligncenter size-full wp-image-2006" alt="Editing a script" src="/images/2013/textadventuresblog.files.wordpress.com-2013-02-script2.png" width="618" height="150" /></a>

More complex script commands have more things to choose from, and may themselves have places where you can add more script commands inside - as with the "if" command:

<a href="/images/2013/textadventuresblog.files.wordpress.com-2013-02-script3.png"><img class="aligncenter size-full wp-image-2007" alt="Editing a more complex script" src="/images/2013/textadventuresblog.files.wordpress.com-2013-02-script3.png" width="619" height="314" /></a>

This design works well for short scripts, but can become cumbersome if you're trying to code anything more complicated.

The Quest 5 editor has always offered a "Code View" of an entire project, but once your game gets large, it can be a pain to switch back and forth - once you're in Code View, you no longer have the tree view of your game's objects, and the editor has to reload your entire game if you make changes and want to switch back to the normal editor. Also, Code View is only currently available in the Windows desktop version - it is not yet available in the web version.

<a href="/images/2013/textadventuresblog.files.wordpress.com-2013-02-script4.png"><img class="aligncenter size-large wp-image-2008" alt="Code view for a whole project" src="/images/2013/textadventuresblog.files.wordpress.com-2013-02-script4.png?w=625" width="625" height="477" /></a>

These limitations are addressed by a new feature coming to Quest 5.4, in both Windows and web versions - <strong>Script Editor Code View</strong>.

This lets you easily toggle between the friendly English language user interface, and the underlying code. The new button is highlighted below, and appears if you have Simple Mode switched off.

<a href="/images/2013/textadventuresblog.files.wordpress.com-2013-02-script5.png"><img class="aligncenter size-full wp-image-2009" alt="Code View button" src="/images/2013/textadventuresblog.files.wordpress.com-2013-02-script5.png" width="602" height="346" /></a>

This is the effect of turning on Code View for the whole script:

<a href="/images/2013/textadventuresblog.files.wordpress.com-2013-02-script6.png"><img class="aligncenter size-full wp-image-2010" alt="Script Editor Code View - whole script" src="/images/2013/textadventuresblog.files.wordpress.com-2013-02-script6.png" width="620" height="161" /></a>

You can also turn on Code View just for any nested script section:

<a href="/images/2013/textadventuresblog.files.wordpress.com-2013-02-script7.png"><img class="aligncenter size-full wp-image-2011" alt="Script Editor Code View - nested script section" src="/images/2013/textadventuresblog.files.wordpress.com-2013-02-script7.png" width="601" height="311" /></a>

You can make changes in the Code View without having to reload the entire game.

<a href="/images/2013/textadventuresblog.files.wordpress.com-2013-02-script8.png"><img class="aligncenter size-full wp-image-2012" alt="Making changes in Code View" src="/images/2013/textadventuresblog.files.wordpress.com-2013-02-script8.png" width="621" height="192" /></a>

If you switch back to the English language UI, your changes are immediately reflected in the friendlier version.

<a href="/images/2013/textadventuresblog.files.wordpress.com-2013-02-script9.png"><img class="aligncenter size-full wp-image-2013" alt="Making changes in Code View" src="/images/2013/textadventuresblog.files.wordpress.com-2013-02-script9.png" width="602" height="408" /></a>

What if you make a mistake? The advantage of the friendly English UI is you can't make syntax errors. No such protection in Code View though, so what if you miss off a bracket?

<a href="/images/2013/textadventuresblog.files.wordpress.com-2013-02-script10.png"><img class="aligncenter size-full wp-image-2014" alt="Making a mistake" src="/images/2013/textadventuresblog.files.wordpress.com-2013-02-script10.png" width="618" height="206" /></a>

Switching out of Code View shows us we made an error, but the rest of the script loads properly. We can easily correct the mistake.

<a href="/images/2013/textadventuresblog.files.wordpress.com-2013-02-script11.png"><img class="aligncenter size-full wp-image-2015" alt="Showing the mistake" src="/images/2013/textadventuresblog.files.wordpress.com-2013-02-script11.png" width="603" height="458" /></a>

All of this works in a very similar way in the web version. The Script Editor now has Code View buttons, allowing you to view the code for a whole script, or any nested section.

<a href="/images/2013/textadventuresblog.files.wordpress.com-2013-02-script12.png"><img class="aligncenter size-full wp-image-2016" alt="Web Editor Script Code View" src="/images/2013/textadventuresblog.files.wordpress.com-2013-02-script12.png" width="620" height="612" /></a>

The Code View button pops up an editor allowing us to view or change the underlying script code.

<a href="/images/2013/textadventuresblog.files.wordpress.com-2013-02-script13.png"><img class="aligncenter size-full wp-image-2017" alt="Web Editor Code View" src="/images/2013/textadventuresblog.files.wordpress.com-2013-02-script13.png" width="542" height="438" /></a>

I hope these changes will be very useful for people on the forums - you'll now be able to easily copy and paste little script sections, which will be great for people seeking help with a game. When a script has been pasted in, you can toggle back to the normal English view and carry on working as normal. The script you've just pasted in will be displayed in English so will hopefully make more sense! You'll also get a feel for how scripts work in the first place, which I think fits very nicely with Quest's aim to provide a gentle introduction to programming.

A beta version of Quest 5.4 should be available soon, but if you're feeling brave you can download the <a href="http://quest.codeplex.com/releases/view/82308">nightly build of the Windows desktop version at CodePlex</a>.