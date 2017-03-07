---
layout: post
title: >
    Containers
permalink: /2006/11/28/containers
source: textadventures
sourceUrl: http://blog.textadventures.co.uk/2006/11/28/containers/
---
Quest 4.0 Beta 2 has just been released, and this adds support for containers and surfaces. These are objects that you can put other objects in, or on top of. You can use these to implement things like bags, boxes, tables and shelves in your game.

To set up an object as a container, select the object in QDK and click the Container tab. Here you can:
<ul>
	<li>choose whether the object is a container or a surface</li>
	<li>choose what happens when the player interacts with it (by opening or closing it, or adding or removing objects to/from it)</li>
	<li>tell Quest how it should list the contents of the object</li>
</ul>
By default, containers are closed, and so objects inside them won't be revealed when the player looks at the object. Surfaces on the other hand are always open, so you can always see what's on them. To make a container open when the game starts, just tick the "Initially opened" box.

If your container is transparent, however, the player will be able to see which objects are inside it, even when it's closed.

<strong>Parent</strong>

To set which objects are inside a container, set their "parent" property from the Setup tab. For example, if you've created an object called "table" which is a surface, you can make a newspaper object be on the table by setting the newspaper's parent to "table".

<strong>Looking at a container reveals what's inside it</strong>

If you set up a bag object as an open container, and set up a purse inside the bag, when the player enters the room they will only see the bag. Once they have looked at the bag, they will see the purse there. Subsequently when they enter the room, Quest will tell them that they can see both the bag and the purse.

<strong>Listing the contents</strong>

By default, when a player looks at a container or surface, its contents are listed. In the bag and purse example above, when the player looks at the bag they will see the bag's description followed by "It contains a purse". You can change this behaviour from the Container tab by editing list verbs. These allow you to specify if and how contents are listed. You can also specify what happens when the object is empty or closed - by default, Quest will print the description and nothing else, but you can make it add "It is closed" if you wish.

<strong>Opening and closing</strong>

By default, a closed container can't be opened or closed by the player. To enable this, click the open and close verbs and specify the option you want. You can either have the object open and close automatically, or you can run some script when the player tries to open or close the object - use this if it is locked, for example.

<strong>Putting things and removing things</strong>

By default, a player can't put anything on or in a container, or remove anything from it. To allow this, use the add and remove verbs. If the player can only put some kinds of object in or on this container, use a script to check what object they're adding (it will be in the #quest.add.object.name# variable).

<strong>Default responses</strong>

Click Tools and then Standard Messages to modify Quest's default responses when dealing with objects.

<strong>Feedback</strong>

I'm very keen to hear any feedback you may have about the implementation of containers. Do they work as you expect? Do you find it easy to use them to do what you want to do? Please email me at <a href="mailto:alex@axeuk.com">alex@axeuk.com</a> with any suggestions, comments or bug reports.