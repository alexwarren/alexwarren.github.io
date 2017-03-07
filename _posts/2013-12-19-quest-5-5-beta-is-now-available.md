---
layout: post
title: >
    Quest 5.5 Beta is now available
permalink: /2013/12/19/quest-5-5-beta-is-now-available
source: textadventures
sourceUrl: http://blog.textadventures.co.uk/2013/12/19/quest-5-5-beta-is-now-available/
---
The Windows desktop version of Quest 5.5 Beta is <a href="http://textadventures.co.uk/quest/desktop">now available for download</a>.

This is a relatively small update, with a focus on refining the player interface, and a few other tweaks and enhancements here and there.

<strong>Improving the player interface</strong>

This version features some enhancements to make it easier to create games that look a little more elegant. The location bar and screen border can be toggled off, and you can set a custom display width and padding. There are new display themes, so you can easily change from the Quest Standard theme:

<a href="http://textadventuresblog.files.wordpress.com/2013/12/standard.png"><img class="aligncenter size-large wp-image-2560" alt="Quest Standard Theme" src="http://textadventuresblog.files.wordpress.com/2013/12/standard.png?w=625" width="625" height="226" /></a>

to the simpler "Novella" theme:

<a href="http://textadventuresblog.files.wordpress.com/2013/12/novella.png"><img class="aligncenter size-large wp-image-2561" alt="Quest Novella Theme" src="http://textadventuresblog.files.wordpress.com/2013/12/novella.png?w=625" width="625" height="312" /></a>

And there are a few more fun bonus themes too.

In gamebook mode, the new default is to not to clear the previous page when clicking a link - instead, new text is added to the bottom. (The option to have the screen clear between pages is still available).

<strong>Drawing</strong>

Support has been added for drawing SVG graphics in the custom drawing layer. There are new functions for drawing arrows and arbitrary many-sided shapes. The automatically generated grid map now works when multiple player POV objects are used.

<strong>Tweaks</strong>

Various tweaks have been submitted by Quest users:
<ul>
	<li><strong>Pertex</strong> added more gamebook counter functions, as well as contributing some bug fixes.</li>
	<li><strong>Jay Nabonne</strong> has contributed a tweak to the "invoke" script command.</li>
	<li><strong>The Pixie</strong> has added a "select" command to the text processor, and updated the text processor's "{if}" to allow not-equals.</li>
</ul>
<strong>Translations</strong>
<ul>
	<li><strong>Pertex</strong> has started work on allowing the Editor to be translated.</li>
	<li><strong>Guillaume Poulain</strong> has contributed an updated French translation.</li>
	<li><strong>Katzy</strong> submitted corrections for Dutch.</li>
</ul>
<strong>Other changes</strong>
<ul>
	<li>The "return" statement now immediately exits the function.</li>
	<li>The "Pause" request is no longer supported for games written for Quest 5.5 or later.</li>
	<li>You can now create a blank JavaScript file straight from the editor.</li>
	<li>There is a new "Features" tab for both the game and objects, making it easier to toggle Quest features on and off, so you only see the editor tabs you care about.</li>
</ul>
Thanks to everybody who contributed towards this release - please <a href="http://textadventures.co.uk/quest/desktop">download it now</a> and submit any bug reports to the <a href="https://quest.codeplex.com/workitem/list/advanced">issue tracker</a>.