---
layout: post
title: >
    Shoot monster with ray gun, burn corpse with incinerator - two-object verbs in Quest 5.2
permalink: /2012/03/20/shoot-monster-with-ray-gun-burn-corpse-with-incinerator-two-object-verbs-in-quest-5-2/
source: textadventures
sourceUrl: http://blog.textadventures.co.uk/2012/03/20/shoot-monster-with-ray-gun-burn-corpse-with-incinerator-two-object-verbs-in-quest-5-2/
---
Quest lets you add verbs to objects, so you can provide the player with varied and interesting ways of interacting with things in your game. You might add a "read" verb to a book to allow the player to type "read book", or add an "eat" verb to a burger. By adding these verbs to the "display verbs" list for an object, they appear on the hyperlink menu:

<img class="aligncenter size-full wp-image-1271" title="Object verbs" src="/images/2012/textadventuresblog.files.wordpress.com-2012-03-verbs1.png" alt="" width="211" height="133" />

But what if you wanted to do something a little more complicated? Light the kindling with the match for example, or inspect the flock of hair under the microscope? In Quest 5.1 and earlier, you would have to set up a command - <code>light #object1# with #object2#</code> - and then add some script to see if object1 and object2 made sense. And then, you would be making your game harder to play, because the player is forced to type that command - there's no way of clicking or touching to trigger a command requiring two objects.

Quest 5.2 makes this easier by introducing <strong>two-part verbs</strong>. These fit in with the existing verbs mechanism, making them very easy to set up. Best of all, they're mouse and touchscreen friendly.

<strong>Setting up a two-part verb</strong>

The process for setting up a two-part verb is very similar to setting up a normal one-part verb. Just go to an object's Verbs tab and add the verb you want. In the screenshot below, we've added a "light" verb to the "kindling" object:

(Note - these screenshots are from the web-based Editor, but the steps are the same on the desktop version)

<img class="aligncenter size-full wp-image-1272" title="Adding a verb" src="/images/2012/textadventuresblog.files.wordpress.com-2012-03-verbs2.png" alt="" width="634" height="286" />

The next step is to set the verb option to "Require another object" - a new setting in Quest 5.2.

<img class="aligncenter size-full wp-image-1274" title="Require another object" src="/images/2012/textadventuresblog.files.wordpress.com-2012-03-verbs3.png" alt="" width="218" height="124" />

This will then give us an editor where we can add objects which can be used to the light the kindling.

<img class="aligncenter size-full wp-image-1275" title="Light kindling with match" src="/images/2012/textadventuresblog.files.wordpress.com-2012-03-verbs4.png" alt="" width="456" height="271" />

We can now set the script that runs when we light the kindling with the match:

<img class="aligncenter size-full wp-image-1281" title="Light kindling with match" src="/images/2012/textadventuresblog.files.wordpress.com-2012-03-verbs51.png" alt="" width="641" height="290" />

Finally, let's add "light" as a display verb for the kindling object, to make this verb usable with mouse or touchscreen.

<img class="aligncenter size-full wp-image-1278" title="Add display verb" src="/images/2012/textadventuresblog.files.wordpress.com-2012-03-verbs6.png" alt="" width="608" height="587" />

<strong>Playing the game</strong>

When we play the game, we can type in "light kindling with match", and we get the expected result - in this case, we see the message "The kindling vanishes quickly in a brief burst of flame", and then the kindling disappears.

But we can also activate this command using the mouse or touch instead. We added "Light" as a display verb, so we can select that:

<img class="aligncenter size-full wp-image-1279" title="Light display verb" src="/images/2012/textadventuresblog.files.wordpress.com-2012-03-verbs7.png" alt="" width="249" height="137" />

Selecting this brings up a menu of things we can use to light the kindling with:

<img class="aligncenter size-full wp-image-1280" title="Light with which object?" src="/images/2012/textadventuresblog.files.wordpress.com-2012-03-verbs8.png" alt="" width="452" height="377" />

This menu shows all visible objects, excluding the object we just tapped on - in this case, we only have one other object in the room, the match. We can tap Select to trigger the command:

<img class="aligncenter size-full wp-image-1282" title="Result" src="/images/2012/textadventuresblog.files.wordpress.com-2012-03-verbs9.png" alt="" width="311" height="148" />

<strong>Sensible defaults</strong>

By setting this up as a verb, we get a lot of functionality for free. Previously, in Quest 5.1 and earlier, if we'd set up a custom command for this, we would have had to manually deal with the case where the player tried to light the wrong object. Here though, Quest sensibly handles the full range of things a player might type in - "light flower pot", "light kindling with egg", "light myself with match", etc.

<img class="aligncenter size-full wp-image-1285" title="Verb defaults" src="/images/2012/textadventuresblog.files.wordpress.com-2012-03-verbs10.png" alt="" width="285" height="285" />

<strong>Use and Give</strong>

The existing "use" and "give" commands have been updated in Quest 5.2 to display a menu like the "With which object?" menu shown above if the player tries to use them on their own. This means these commands can now also be used without typing.

<strong>Try it out now</strong>

This functionality is part of Quest 5.2, which will be in beta soon. In the meantime, I have already deployed this new feature to the web-based editor preview, so you can <a title="Create a text adventure game" href="http://www.textadventures.co.uk/create/">try it out online</a>.

Please let me know your feedback in the comments!