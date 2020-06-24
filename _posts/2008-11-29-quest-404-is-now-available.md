---
layout: post
title: >
    Quest 4.04 is now available
permalink: /2008/11/29/quest-404-is-now-available/
source: textadventures
sourceUrl: http://blog.textadventures.co.uk/2008/11/29/quest-404-is-now-available/
tag: [Quest v4]
---
Quest 4.04 is now available.

If you're a Quest Pro user, you can download your update from the new "My Downloads" area at <!-- m --><a href="http://www.axeuk.com/mydownloads" class="postlink">http://www.axeuk.com/mydownloads</a><!-- m -->

Otherwise you can download Quest 4.04 from <!-- m --><a href="http://www.axeuk.com/quest/download.htm" class="postlink">http://www.axeuk.com/quest/download.htm</a><!-- m -->

This is a bug-fix release, which addresses the following:

<span style="font-weight:bold;">Quest</span>
- fixed run-time error displaying collectables in Quest 2.x games.
- a run-time error occurred if a game's default font name was invalid.
- a run-time error could occur if variables were accessed using different cases.
- CAS files with resources which used "define menu" blocks wouldn't load correctly.
- verbs defined with capital letters wouldn't work correctly.
- an object inside a container which was itself inside a closed container could still be taken. The container logic has been improved to recurse properly through the parent containers of an object before allowing it to be taken, opened, closed, added or removed.

<span style="font-weight:bold;">QDK</span>
- fixed various crashes when running using JAWS.
- fixed bug with "else" script being corrupted when nested "if" statements were used which only contained one-line "then" and "else" statements.