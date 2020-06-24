---
layout: post
title: >
    Slicker hyperlinks in Quest 5.4
permalink: /2013/02/28/slicker-hyperlinks-in-quest-5-4/
source: textadventures
sourceUrl: http://blog.textadventures.co.uk/2013/02/28/slicker-hyperlinks-in-quest-5-4/
tag: [Quest 5]
---
Hyperlinks were introduced in Quest 5.0, and I think they're a great way of navigating a text adventure game - without using any additional UI elements, you can always see what objects you can interact with, and you only see a relevant list of actions for each object.

In Quest 5.4, I have made hyperlinks a bit smarter. Previously, once a hyperlink for an object was displayed, it would remain on screen. So, if Quest told you that you could see "a <span style="text-decoration:underline;">book</span>", that book link would remain selectable even if you moved somewhere else, set fire to it, etc.

Furthermore, once a hyperlink was displayed, it would always show the same list of verbs. In the book example, the verbs might be the standard set of "Look at" and "Take". But if you picked up the book, the hyperlink would still show you that same set of verbs - even though a more relevant verb set may now be "Read" and "Drop".

Quest 5.4 features what I call <strong>live hyperlinks</strong>. Now, as you move through the game, all hyperlinks activate or deactivating according to what the player can see. Also, clicking a hyperlink now always gives you the current verbs list for the object, even if you select an "old" link.

Let's see it in action. Here's a room with a newspaper that the player can pick up, as well as some other objects:

<a href="/images/2013/textadventuresblog.files.wordpress.com-2013-02-livelinks1.png"><img class="aligncenter size-large wp-image-2050" alt="Object links 1" src="/images/2013/textadventuresblog.files.wordpress.com-2013-02-livelinks1.png?w=625" width="625" height="110" /></a>

Now if the player takes the newspaper and moves east, the other hyperlinks are deactivated. The player can still click the "old" newspaper link though, and interact with it using the current set of inventory verbs:

<a href="/images/2013/textadventuresblog.files.wordpress.com-2013-02-livelinks2.png"><img class="aligncenter size-large wp-image-2051" alt="Object links 2" src="/images/2013/textadventuresblog.files.wordpress.com-2013-02-livelinks2.png?w=625" width="625" height="252" /></a>

Notice also that the exit hyperlinks "east" and "west" are also activated or deactivated according to whether they're available.

I have also improved how menus are displayed. Quest has a "disambiguation" menu which appears whenever the player isn't specific enough about which object they're referring to - for example, if the player abbreviates an object name, and there are multiple objects that start with the same letters.

Previously, this disambiguation menu was a modal pop-up. Now, I think modal pop-ups are ugly and they don't work very well on smartphones. They also stop the player from scrolling back through the game text - they are forced to choose from the menu before they can continue.

So, in Quest 5.4 I have changed menus so they are shown in-line with the rest of the game text. Like this:

<a href="/images/2013/textadventuresblog.files.wordpress.com-2013-02-menu1.png"><img class="aligncenter size-full wp-image-2052" alt="New menu" src="/images/2013/textadventuresblog.files.wordpress.com-2013-02-menu1.png" width="365" height="144" /></a>

The player can now click the link or type "1" or "2" to make a selection. The menu uses a simple jQuery animation to slide away, and the game continues.

<a href="/images/2013/textadventuresblog.files.wordpress.com-2013-02-menu2.png"><img class="aligncenter size-full wp-image-2053" alt="New menu 2" src="/images/2013/textadventuresblog.files.wordpress.com-2013-02-menu2.png" width="365" height="115" /></a>

Alternatively, the player could just do something else - if they type another command or interact with a different object, the menu slides away and the game continues.