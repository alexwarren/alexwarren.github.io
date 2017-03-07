---
layout: post
title: >
    Quest 5.0 Beta 4 released - approaching the final release
permalink: /2011/07/28/quest-5-0-beta-4-released-approaching-the-final-release
source: textadventures
sourceUrl: http://blog.textadventures.co.uk/2011/07/28/quest-5-0-beta-4-released-approaching-the-final-release/
---
<a href="http://quest5.net/downloads/quest500beta4.exe">Quest 5.0 Beta 4 is out now</a>, and we're on the home straight - <strong>this beta is feature complete</strong>. I'm not planning to add any new features to version 5.0 - very minor ones <em>may</em> be still be added, but all the outstanding <a href="http://quest.codeplex.com/workitem/list/advanced?keyword=&amp;status=Open%20(not%20closed)&amp;type=Feature&amp;priority=All&amp;release=All&amp;assignedTo=All&amp;component=All&amp;sortField=Id&amp;sortDirection=Ascending&amp;page=0">feature requests</a> have been moved to a planned future version 5.1 release (they may be rescheduled again of course).

I will still accept contributions of new/updated translations and minor additions to the Core library - I know a few people may currently be working on these. The project is still hosted on <a href="http://quest.codeplex.com">CodePlex</a> but recently switched from SVN to Mercurial hosting, which will make it much easier for people to work on their own forks and for me to manage contributions.

<strong>New in Beta 4:</strong> Some improvements to the parser, re-implementing features that existed in Quest 4.x but hadn't yet found their way into 5.0:
<ul>
	<li>you can now refer to objects in the previous command by article or gender, e.g. "it". So you can type "look at box", "take it", "open it" etc. Multiple objects are handled via the usual disambiguation menu - so you can type "put book on shelf", then "look at it" will let you choose between "book" and "shelf".</li>
	<li>if you make a mistake while typing an object name, you can now use "oops" to correct it. For example, "look at bok", "oops book". This can even handle multiple objects and a whole sequence of mistakes, so if you're an especially poor typist you can end up with sequences like this:</li>
</ul>
<pre>&gt; put bok on shulf
I can't see that. (bok)

&gt; oops bik
I can't see that. (bik)

&gt; oops book
I can't see that. (shulf)

&gt; oops sholf
I can't see that. (sholf)

&gt; oops shelf
You put the book on the shelf.</pre>
If you don't like "oops" you can of course still press the up arrow to correct the previous command (or just type more carefully in the first place!). Even though it may not be an especially useful feature, I was pleased that I was able to implement it entirely with changes to the Core library - I think this shows how flexible Quest is, as you could implement your own entirely customised parser in a game if you wanted, and it would work without requiring any software updates.

There have also been some improvements to help with creating non-English games:
<ul>
	<li>directions can now have default prefixes - there are three different sets, one for compass directions (N/S/E/W/NE/etc.), one for up/down and one for in/out. These are all blank for English games, but may be useful for other languages.</li>
	<li>language templates can now add object types, for example for masculine and feminine inanimate objects.</li>
	<li>when adding a verb, the language template can now define a default expression which can include object attributes. In previous betas this was a hard-coded string. Now, for English the default verb expression is:</li>
</ul>
<pre>"You can't #verb# " + object.article + "."</pre>
So if you add a verb "smash", you get sensible default responses "You can't smash it", "You can't smash them" etc.

Other new features in Beta 4:
<ul>
	<li>Record a walkthrough while playing the game - on the walkthrough editor, click the "Record" button. Play your game and all steps will be recorded, which is great for testing. If you click "Record" on an existing walkthrough, it will play through and you can then append more steps.</li>
	<li>Add external links to a game, so you can link back to your own website or email address.</li>
	<li>There is a new "in" direction (which has meant a slight redesign of the compass rose).</li>
	<li>You can now run scripts after taking, dropping, opening, closing, locking, unlocking, switching on, switching off an object, so you don't need to override any built-in behaviour if you just want to play a sound, show a picture, release a herd of wildebeest or whatever in response to the player doing one of these "standard" things to an object.</li>
	<li>Finally fixed a long-standing design flaw with verbs in Quest, in that it was easy to override and therefore break default functionality. I've lost count of the number of times people have asked for help because the "take" command had suddenly stopped working, and it was because they had added "take" as a custom verb instead of using the Inventory tab. The editor now prevents you from adding a verb to an object that would clash with an existing command, and gives you guidance on where you should go to put that script or message instead.</li>
</ul>
You can download the new version here: <a href="http://quest5.net/downloads/quest500beta4.exe">http://quest5.net/downloads/quest500beta4.exe</a>

Get those bug reports in! The next release will be a Release Candidate, probably in a couple of weeks. All being well, we should go "gold"/RTM around late August.

In the meantime I need to complete the documentation, one of my least favourite tasks!