---
layout: post
title: >
    Quest 4.1 is coming soon
permalink: /2009/02/13/quest-41-is-coming-soon/
source: textadventures
sourceUrl: http://blog.textadventures.co.uk/2009/02/13/quest-41-is-coming-soon/
tag: [Quest v4]
---
I thought I'd post here about the work that I'm currently doing on the next version of Quest - version 4.1.

So far the bulk of the work has been overhauling the internals of QDK (in programmer's speak, "refactoring"). This is to enable me to more easily add new features in future versions, and also to enable me to more easily move the code from VB6 to the newer VB.net.

In fact QDK 4.1 is already using the Microsoft .net framework for some new interface elements - the toolbars have been overhauled with a more modern look, and there is a new rich editor for text, as you can see in the screen shot below. No more weird formatting codes - you now type in a room description just as you would in a word processor:

<a href="/images/2009/qdk41room.png"><img class="alignnone" title="Editing a room in QDK 4.1" src="/images/2009/qdk41room-s.png" alt="" width="404" height="310" /></a>

You can also see that the tree view now contains some of the editors that were previously pop-up windows accessed via the menus - the timers, object types, status variable editors etc.

Also there are new web-browser-style "Back" and "Forward" buttons, which should be useful if you're editing a large game.

The rich editor also appears for the "Print a message" command in the Script Editor, which has been cleaned up a little:

<a href="/images/2009/qdk41script.png"><img class="alignnone" title="Editing script in QDK 4.1" src="/images/2009/qdk41script-s.png" alt="" width="369" height="234" /></a>

Quest Pro 4.1 will also feature Quest Packager, which is an enhancement to the Quest Compiler. You will now be able to compile your game into a single setup EXE file, so you can give your game to other people, distribute it over the internet, and submit it to software download sites, without having to get your users to download Quest separately.

I'll also be overhauling room exits for version 4.1, allowing you to easily create locked exits, and replacing the two tabs in the QDK room editor "Compass" and "Go to" with a single editor that will allow you to manage all exits for a room. I'll post more details on this later, and I'll create a thread in the <a href="http://www.axeuk.com/phpBB3/viewforum.php?f=6">Feature Requests forum</a> to get your feedback on how this should work.

Hopefully a beta version will be ready in a couple of months time - I'll post updates to this blog with details as we go along.