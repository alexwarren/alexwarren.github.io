---
layout: post
title: >
    Verbs - an easier way to add commands in Quest 4.0
permalink: /2006/11/02/verbs-an-easier-way-to-add-commands-in-quest-40/
source: textadventures
sourceUrl: http://blog.textadventures.co.uk/2006/11/02/verbs-an-easier-way-to-add-commands-in-quest-40/
tag: [Quest v4]
---
A couple of days ago I released the first beta of Quest 4.0. One of the new features of this version is <strong>verbs</strong>, which gives you an easier way of setting up certain commands.

Previously, in Quest 3.53, if you wanted to add an "eat" command to a game, you would have to add the command (and get your head round the concept of variables and using the #@...# syntax) and then add some logic to check for an "eat" property or whatever.

The new verbs feature in Quest 4.0 does all of this for you, and is especially useful if you edit games in QDK. Behind the scenes, verbs automatically add the kind of functionality you would have coded yourself using the old approach - in the "eat" example, once you've set up an "eat" verb, when the player types "eat apple" Quest will check the apple object for an "eat" property or action and display or run the script as appropriate.

QDK lets you add a verb directly from the object editor, so you don't even need to set the verb up separately. Just click "Add" underneath the Verbs list, type "eat", and then enter the relevant description or script. It really is that simple, and Quest handles the rest - the player will see a sensible response if they try to eat any other objects, and of course it will take care of alternative object names, typing "look at apple" followed by "eat it", etc.

Hopefully this will make it a lot easier for you to add deeper levels of interactivity to your games. Please let me know if you have any feedback - and if you're not already on the beta testers list, just drop me an email and I'll send you instructions for downloading it so you can try out verbs (and the other new features) for yourself.