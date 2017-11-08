---
layout: post
title: >
    "Undo" support in Quest 5.0
permalink: /2010/02/17/undo-support-in-quest-5-0/
source: textadventures
sourceUrl: http://blog.textadventures.co.uk/2010/02/17/undo-support-in-quest-5-0/
---
<p>Over the years one of the most commonly requested features for Quest has been the ability for the player to be able to type "undo". This would have been difficult to add to previous versions of Quest, as the game state was stored in a number of different ways, but in Quest 5.0 the entire game state is stored within object properties. The location of objects is a property, global variables are properties, and so on. This makes it much easier to enable support for "undo", and from the start Quest 5.0 has been written with this feature in mind.</p>

<p>Every change to a property is internally logged, which makes it easy to go backwards and undo changes on a turn-by-turn basis.</p>

<p>Core.aslx defines the "undo" command, which simply calls the script command "undo". This gives the player unlimited access to the "undo" command, but you could override this in your own games to set certain conditions for undoing. Perhaps you would disable undo in certain locations by setting a certain property in the player's parent room, or maybe you would set a limit on the number of times the command can be called. Any of this is easily achievable by creating the appropriate script around the "undo" command.</p>

<p><b>Monitoring changes to properties</b></p>

<p>If you want some script to be triggered whenever the value of property
"X" changes, you can add a "changedX" script property.</p>

<p>For example, when the player moves, the value of their "parent" property changes. This means you can call some script when this happens by setting a "changedparent" script property for the player. This is what Core.aslx uses to trigger the printing of the room description:</p>

<pre>
  &lt;object name="player"&gt;
    &lt;changedparent type="script"&gt;OnEnterRoom&lt;/changedparent&gt;
  &lt;/object&gt;
</pre>

<p>This calls the "OnEnterRoom" function every time the player moves into a different room.</p>

<p>Another way this might be useful would be if you had a "health" property for the player - you could create a "changedhealth" script which would finish the game if the health value reached zero, and maybe also set a maximum value.</p>