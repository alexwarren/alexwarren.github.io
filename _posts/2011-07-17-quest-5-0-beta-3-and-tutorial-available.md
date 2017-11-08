---
layout: post
title: >
    Quest 5.0 Beta 3 and Tutorial available
permalink: /2011/07/17/quest-5-0-beta-3-and-tutorial-available/
source: textadventures
sourceUrl: http://blog.textadventures.co.uk/2011/07/17/quest-5-0-beta-3-and-tutorial-available/
---
Quest 5.0 Beta 3 is <a href="http://quest5.net/wiki/Downloads">now available for download</a>.

The first draft of the <a href="http://quest5.net/wiki/Tutorial">Quest 5.0 Tutorial</a> is also now available.

We are getting closer to the final 5.0 release now. The Issue Tracker currently only has a few relatively minor features assigned to a future Beta 4 release, so what we have now is close to the final version 5.0. Of course, version 5.0 is just the beginning - a rebirth for Quest, really - and I have lots of ideas for the versions that will come afterwards. But I think it is important now to get the new system stable and "out there", so I don't expect that there will be too many dramatic changes before the "gold" or "RTM" version 5.0.

New features in Beta 3:
<ul>
	<li>Status Attributes - these are the equivalent of Status Variables in Quest 4, and let you display attributes (such as player health, money) in the pane on the right of the screen.</li>
	<li>Multi-object commands - "take all" and "drop all" are now implemented by the Core library.</li>
	<li>Ask/Tell - you can now give characters a list of subjects that the player can ask or tell them about.</li>
	<li>Lockable containers - you can now assign a "key" object to a container which the player must have before they can unlock or open the container</li>
	<li>Compass exit editor - more easily create exits between rooms, including automatically creating exits in the other direction. Hyperlinks in the exit editor allow you to navigate between rooms.</li>
	<li>Play YouTube and Vimeo videos - now built-in to the Core library.</li>
	<li>Switchable objects - easily implement objects which can be switched on and off.</li>
	<li>Object Types can now extend string lists - this is used so that multiple types can contribute to the display verbs list. For example, if an object is both a container and switchable, the display verbs list shown when the player clicks its hyperlink will include "open", "close" as well as "switch on", "switch off".</li>
	<li>Player object is now shown in the editor - easier to set the start location, set up attributes, and set up the player's initial inventory.</li>
	<li>Editor now watches file for external changes - so you can more easily make edits using an external text editor while the file is still open in Quest.</li>
</ul>
This release also fixes all bugs which have been logged so far - 45 items since Beta 2, according to the <a href="http://quest.codeplex.com/workitem/list/basic">Issue Tracker</a>. Many thanks to everybody who has been logging bugs so far. Please keep them coming!

<strong><a href="http://quest5.net/wiki/Downloads">Download Quest 5.0 Beta 3</a></strong>