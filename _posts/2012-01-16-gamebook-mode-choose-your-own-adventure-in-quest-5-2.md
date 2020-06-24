---
layout: post
title: >
    Gamebook mode ("Choose Your Own Adventure") in Quest 5.2
permalink: /2012/01/16/gamebook-mode-choose-your-own-adventure-in-quest-5-2/
source: textadventures
sourceUrl: http://blog.textadventures.co.uk/2012/01/16/gamebook-mode-choose-your-own-adventure-in-quest-5-2/
tag: [Quest 5]
---
I've started work on Quest 5.2, aiming for a release in the Spring. One of the first new features I've implemented begins to take Quest away from "pure" text adventures to open up another type of interactive storytelling - <a href="http://en.wikipedia.org/wiki/Gamebook">gamebooks</a>, also known as Choose Your Own Adventure (CYOA).

The gamebook mode is fundamentally a simple alternative Core library, built on the Quest platform. This means that you can create games using Quest's visual editor, include graphics, upload your game to be played online in a web browser, and have your game converted into an app - everything that a "full" Quest game supports, with the difference that it is much simpler to create and play a gamebook, as players are only given a limited set of choices.

To create a gamebook, the "New Game" dialog has been updated with a new "Game type" option:

<a href="/images/2012/textadventuresblog.files.wordpress.com-2012-01-gamebook1.png"><img class="aligncenter size-full wp-image-1080" title="Creating a new gamebook" src="/images/2012/textadventuresblog.files.wordpress.com-2012-01-gamebook1.png" alt="" width="619" height="377" /></a>

The Editor for Gamebooks is simple - each game comprises a number of pages. Each page has some descriptive text, and links to other pages.

<a href="/images/2012/textadventuresblog.files.wordpress.com-2012-01-gamebook2.png"><img class="aligncenter size-full wp-image-1081" title="Editing a gamebook" src="/images/2012/textadventuresblog.files.wordpress.com-2012-01-gamebook2.png" alt="" width="761" height="474" /></a>

Pages automatically default to names Page1, Page2 etc., but you can call a page any name you like.

This is what a new gamebook (as shown in the Editor above) looks like when you play it:

<a href="/images/2012/textadventuresblog.files.wordpress.com-2012-01-gamebook3.png"><img class="aligncenter size-full wp-image-1082" title="Playing a gamebook" src="/images/2012/textadventuresblog.files.wordpress.com-2012-01-gamebook3.png" alt="" width="574" height="303" /></a>

That's all there is to it - pretty simple stuff really, at least for this first version. There is definitely potential for adding functionality in the future - because gamebooks are not fundamentally any different from ordinary Quest games, the full power of Quest's scripting engine is available. This means that different behaviour could be triggered based on the player's previous choices, random elements could be added, YouTube or Vimeo videos embedded, and a whole lot more.

Hopefully this new mode will open up interactive stories to a wider audience - if a full text adventure is too much work, a gamebook is one way of creating an interactive story where you really can focus much more on the writing than the implementation.

Gamebook mode is part of Quest 5.2, which is currently in development. I'm aiming to release this around Spring, although there will be a beta version before then. If you want to try it out right now, you will need to <a href="http://quest5.net/wiki/Developers">build the code yourself</a>.