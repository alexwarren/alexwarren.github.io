---
layout: post
title: >
    Quest 4.03 now available
permalink: /2008/02/09/quest-403-now-available/
source: textadventures
sourceUrl: http://blog.textadventures.co.uk/2008/02/09/quest-403-now-available/
---
Quest 4.03 is now available.If you've already got Quest or Quest Pro, the easiest way to update is by selecting "Check for updates" from the "Help" menu in Quest or QDK. If you're not already a user, you can download Quest from <a href="http://www.axeuk.com/quest/">http://www.axeuk.com/quest/</a>

Here's what's new:

<strong>QDK</strong>
<ul>
	<li>The Script Editor's functions are now available from a menu (with keyboard shortcuts) as well as from the toolbar.</li>
	<li>Added "Allow players to use abbreviated object names" game option.</li>
	<li>Slightly increased the size of the Object Type box to display correctly in Windows Vista.</li>
	<li>If QCompile is launched from QDK and fails to compile the file, it now displays error information.</li>
	<li>Fixed bugs:
<ul>
	<li>a run-time error occurred when removing a synonym.</li>
	<li>double-clicking a script line in the Script Editor would cause it to be changed.</li>
</ul>
</li>
</ul>
<strong>Quest</strong>
<ul>
	<li>The command entry box now uses the same font and fontsize as the game.</li>
	<li>You can now turn off the player's ability to use abbreviated object names, by adding "abbreviations off" to the "define options" block.</li>
	<li>Quest now writes an error to the ASL log if an internal error occurs while running a script command, instead of quitting with an error message.</li>
	<li>Fixed bugs:
<ul>
	<li>fixed run-time error when opening some large games.</li>
	<li>fixed problem where "if" statements of the form "if ... then if ... and/or ... then ..." would be processed incorrectly.</li>
	<li>QCompile wouldn't add a WAV file to a CAS if the playwav command did not include the file extension.</li>
	<li>a run-time error would occur if the "clone" command was used in an object's "action" script.</li>
</ul>
</li>
</ul>