---
layout: post
title: >
    Quest 5.4 released
permalink: /2013/03/28/quest-5-4-released
source: textadventures
sourceUrl: http://blog.textadventures.co.uk/2013/03/28/quest-5-4-released/
---
Quest 5.4 has now been released, and you can <a href="http://www.textadventures.co.uk/quest/download/">download it now</a> or <a href="http://www.textadventures.co.uk/create/">use it in your browser</a>.

The major new features in this version are the <a href="/2013/02/27/quest-5-4-text-processor-easier-adaptive-text-and-links/">text processor</a>, <a href="/2013/02/27/bringing-more-power-to-gamebook-mode-in-quest-5-4/">gamebook scripts</a> and <a href="/2013/02/25/quest-5-4-script-editor-showing-you-teh-codez/">script editor code view</a>. For a full list, see last month's <a href="/2013/02/28/quest-5-4-beta-is-out-now/">beta announcement</a>.

Since the beta there have been a few minor enhancements, most notably to the gamebook scripts. There is a new "Text + Script" page type which lets you run a script before displaying the normal gamebook text and options, so you're not forced to display text and options manually. There are new functions for moving the player between pages, and for adding and removing links.

Also:
<ul>
	<li>In gamebook mode, when playing a sound there is a new option for the sound to continue playing after the player moves to a different page</li>
	<li><span style="line-height:14px;">You can now turn off the automatically generated display verbs list on a per-object basis (contributed by Pertex)</span></li>
	<li>New {rndalt} text processor code displays a randomly chosen name from an object's alt list (contributed by Ivor Levicki)</li>
	<li>With the new-style menus, restored the option to force the player to make a choice from the menu before continuing. (Note this is a breaking change - previously compiled games for Quest 5.4 Beta will continue to work, but to compile against the new library you will need to set the value for the new parameter)</li>
	<li>New function to output text without a line break at the end</li>
</ul>
As always, if you have any questions or problems, please let me know - you can email me <a href="mailto:alex@textadventures.co.uk">alex@textadventures.co.uk</a> and you can find me on Twitter <a href="http://twitter.com/alexwarren">@alexwarren</a>.