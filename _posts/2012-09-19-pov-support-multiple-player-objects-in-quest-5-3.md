---
layout: post
title: >
    POV support - multiple player objects in Quest 5.3
permalink: /2012/09/19/pov-support-multiple-player-objects-in-quest-5-3
source: textadventures
sourceUrl: http://blog.textadventures.co.uk/2012/09/19/pov-support-multiple-player-objects-in-quest-5-3/
---
Quest 5.3 adds support for a game to use multiple player objects. The game is still a single-player game, but you can now switch between different characters at any time.

This means you can now create a game where the player can explore from different points of view, or perhaps simply choose a pre-defined character when starting the game.

Previous versions of Quest simply had one object called "player", which stored the player's location, inventory, and any other attributes. As of Quest 5.3, any object can "be" the player, and it is easy to switch between them at any time using the new ChangePOV function (available on the script editor as "Change player object").

So you could change the POV after asking a question in the game start script, in response to a command, or maybe after successfully solving a puzzle.

Each player object gets its own inventory and attributes. This includes status attributes, so each player could have their own health or stats, and these will be updated on-screen as the player switches between characters. For status attributes which apply across the entire game (perhaps "score" for example), you can still set these on the "game" object itself and they will be displayed whichever object is the player.

Objects can behave differently depending on whether they are the player or not. For example, if you have two player objects "Dave" and "Bob" in a game, and it is possible for them to be together in the same room at the same time, you will want different responses for "look at dave" and "look at bob" depending on whether the player is currently Dave or Bob.

To handle this, options that were previously only available for the single "player" object are now available for all objects. The object's Options tab has a new "Player" section. If "Can be a player" is selected, new options appear where you can set an override "look at" description to display when this object is the player.

<img class="aligncenter size-full wp-image-1586" title="Object player editor" src="/images/2012/textadventuresblog.files.wordpress.com-2012-09-pov1.png" alt="" width="602" height="456" />

This new feature is part of Quest 5.3, which will hopefully be in beta around the end of October. In the meantime, you can <a href="http://quest.codeplex.com/releases/view/77770">download the nightly build from CodePlex</a>.

Thanks to Phillip Zolla for sponsoring this work. If you've got an idea for a feature you'd really like to see in the next version of Quest, please consider sponsoring it as a way of making it happen - contact me for more details.