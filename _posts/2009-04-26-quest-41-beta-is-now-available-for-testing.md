---
layout: post
title: >
    Quest 4.1 Beta is now available for testing
permalink: /2009/04/26/quest-41-beta-is-now-available-for-testing
source: textadventures
sourceUrl: http://blog.textadventures.co.uk/2009/04/26/quest-41-beta-is-now-available-for-testing/
---
This weekend's second Quest release is the test version of our next upgrade, Quest 4.1 Beta.

I've <a href="http://www.axeuk.com/blog/2009/02/13/quest-41-is-coming-soon/">already blogged about this release here</a>, and you can now download it for testing:
<ul>
	<li><strong>Quest Pro users</strong> can download it from the <a href="http://www.axeuk.com/mydownloads">My Downloads</a> area</li>
	<li>If you're <strong>not a Quest Pro user</strong>, you can <a href="http://www.axeuk.com/quest/quest410beta.exe">download the trial version by clicking here</a></li>
</ul>
Please note this version is intended for <strong>testing only</strong> - we strong recommend you keep backup copies of any game you're working on. We also recommend you <strong>install to a separate folder</strong> so you can keep your existing Quest installation.

Also please note that the documentation has not yet been updated.

Below is an overview of what's new. For further details, you can check the VERSIONS.TXT and VERSIONS-QDK.TXT files the folder where you installed Quest.

<strong>Quest Packager</strong> (part of Quest Pro only)

This is a new product that lets you create a setup EXE file for your game, so your users can install it just like any Windows application. No longer do you need to tell people to download Quest separately - you can just send them an EXE file that will install your game for you. This opens up the possibility of submitting your game to software download sites, greatly increasing the number of people you can reach!

<strong>Quest</strong>

- Lockable exits
- Exits are implemented as objects, so you can check their status using the Object Debugger.
- You can now do "for each exit in game/&lt;room&gt;" to iterate through all exit objects.
- You can now specify a script when using "create exit".
- You can now destroy directional exits e.g. "destroy exit &lt;room1; northeast&gt;"
- QSG files no longer save redundant property and action information, so saving and loading games is now much more efficient.
- For ASL 410 and later, the "visited" property for a room is now set only after the description for the room is printed, so you can print a different description if the player has visited the room before.
- New error "defaultwait" lets you specify default prompt for the "wait" command.
- Can now use "for each room in game" to get a list of rooms in the game.

The following bugs have been fixed:

- objects overriding actions specified by more than one type wouldn't override correctly.
- objects and rooms created via the "create" command didn't pick up the "default" and "defaultroom" types. This has been fixed only for ASL 410 and later to preserve backwards compatibility.

<strong>QDK</strong>

QDK has had major internal changes, and has a cleaner look.

- New toolbars
- Word-processor style text editor is now used for editing room descriptions, text blocks, and "print a message" scripts.
- Procedures, functions, timers, object types, status variables, synonyms, menus and resources are now accessed via the tree instead of the menus.
- "Back" and "Forward" buttons on the toolbar
- New exit editor for rooms combines the old "Compass" and "Go to" tabs, and allows for editing lockable exits.

Because QDK now uses some .NET 2.0 SP1 components, QDK no longer runs on Windows 98 or earlier. Windows 2000 or later is required to run QDK.

<strong>Other changes</strong>

As reported earlier, QuestNet Server is no longer part of Quest 4.1.

<strong>Testing</strong>

As this is a beta release, please be aware that you will almost certainly encounter bugs. Please do report any you find - please email me at <a href="mailto:alex@axeuk.com">alex@axeuk.com</a>. As we have done with previous betas, I will be awarding the people who submit the most helpful bug reports with free Amazon vouchers. So please get testing and let me know your feedback!