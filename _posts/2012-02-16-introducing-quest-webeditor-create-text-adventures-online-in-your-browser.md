---
layout: post
title: >
    Introducing Quest WebEditor - create text adventures online in your browser
permalink: /2012/02/16/introducing-quest-webeditor-create-text-adventures-online-in-your-browser
source: textadventures
sourceUrl: http://blog.textadventures.co.uk/2012/02/16/introducing-quest-webeditor-create-text-adventures-online-in-your-browser/
---
I was hoping to announce the world's very first online text adventure maker - but, dammit! <a href="http://playfic.com/" target="_blank">Playfic</a> got there first, by a matter of days. So, what I am announcing today may be the world's second-ever online text adventure maker, but it is also rather different to Playfic as you will see.

The Quest WebEditor is the world's first online <em>visual</em> text adventure maker. It is (almost) the entire desktop version of <a title="Quest" href="http://www.textadventures.co.uk/quest/" target="_blank">Quest</a>, but transplanted into a web browser. So, now you can create a text adventure game, with no prior programming experience, and without downloading any software. You have access to the full range of Quest functionality, including multiple languages, the ability to use hyperlinks in your game (to make it easier to play without typing), and the ability to embed videos, pictures and sounds for a modern text game experience (personally I'm fairly tired of text adventures being thought of as "retro" all the time - there's no need for them all to look like MS-DOS).

Let me take you on a tour!

First, you'll need to log in to <a href="http://www.textadventures.co.uk/" target="_blank">textadventures.co.uk</a>. You'll then be able to access the "Create" page, which looks like this:

<a href="/images/2012/textadventuresblog.files.wordpress.com-2012-02-01-create.png"><img class="alignleft size-full wp-image-1101" alt="01 create" src="/images/2012/textadventuresblog.files.wordpress.com-2012-02-01-create.png" width="625" height="477" /></a>

Enter a name for your game (you can always change it later), and choose a language.
<p style="text-align:center;"><img class="aligncenter size-full wp-image-1102" title="02 lang" alt="" src="/images/2012/textadventuresblog.files.wordpress.com-2012-02-02-lang.png" width="322" height="224" /></p>
Hit the Create button, and your game will be created. This is what it looks like in the editor:

<a href="/images/2012/textadventuresblog.files.wordpress.com-2012-02-03-blank-game.png"><img class="alignleft size-full wp-image-1103" alt="03 blank game" src="/images/2012/textadventuresblog.files.wordpress.com-2012-02-03-blank-game.png" width="625" height="477" /></a>

This is a similar layout to the desktop software, and the full range of functionality is available - including cut/copy/paste and undo/redo.

The Settings button lets you turn on Simple Mode - as in the desktop software, this hides away some of the functionality to make it easier to get started.
<p style="text-align:center;"><img class="aligncenter size-full wp-image-1104" title="04 simple mode" alt="" src="/images/2012/textadventuresblog.files.wordpress.com-2012-02-04-simple-mode.png" width="414" height="167" /></p>
I've renamed the initial "room" to "lounge", and I've clicked the "+ Room" button to add another location to the game, a kitchen. Now, with the lounge selected, I can add an exit to the kitchen from the Exits tab:

<a href="/images/2012/textadventuresblog.files.wordpress.com-2012-02-05-create-exit.png"><img class="alignleft size-full wp-image-1105" alt="05 create exit" src="/images/2012/textadventuresblog.files.wordpress.com-2012-02-05-create-exit.png" width="625" height="482" /></a>

I can add an object by clicking the "+ Object" button. Here I've added a sofa, and entered a text description:

<a href="/images/2012/textadventuresblog.files.wordpress.com-2012-02-06-add-object.png"><img class="alignleft size-full wp-image-1106" alt="06 add object" src="/images/2012/textadventuresblog.files.wordpress.com-2012-02-06-add-object.png" width="625" height="482" /></a>

I can try the game by clicking the Play button. It appears in a new tab, using the same "play online" interface as the published games on the site.

<a href="/images/2012/textadventuresblog.files.wordpress.com-2012-02-07-play-game.png"><img class="alignleft size-full wp-image-1107" alt="07 play game" src="/images/2012/textadventuresblog.files.wordpress.com-2012-02-07-play-game.png" width="625" height="431" /></a>

I can interact with the game just like all Quest games. There's no need to force your players to type commands - the hyperlinks allow you to make a game which can be played with a click of the mouse, or a touch of the screen:
<p style="text-align:center;"><img class="aligncenter size-full wp-image-1108" title="08 hyperlinks" alt="" src="/images/2012/textadventuresblog.files.wordpress.com-2012-02-08-hyperlinks.png" width="218" height="176" /></p>
Here's the game output after looking at the sofa, and moving east into the kitchen.

<a href="/images/2012/textadventuresblog.files.wordpress.com-2012-02-09-game.png"><img class="alignleft size-full wp-image-1109" alt="09 game" src="/images/2012/textadventuresblog.files.wordpress.com-2012-02-09-game.png" width="625" height="431" /></a>

The real power of Quest comes from <em>scripts</em>, which let you control anything in the game - move the player, change responses according to what the player has done before, set up puzzles, show pictures and more. Back in the editor, let's change the description of the sofa so that it runs a script instead of just displaying text:
<p style="text-align:center;"><img class="aligncenter size-full wp-image-1110" title="10 run script" alt="" src="/images/2012/textadventuresblog.files.wordpress.com-2012-02-10-run-script.png" width="311" height="119" /></p>
Now we can click the "Add new script" button to choose from various options. This is the Simple Mode list - there is a much bigger list if we turn this off:

<a href="/images/2012/textadventuresblog.files.wordpress.com-2012-02-11-add-script.png"><img class="alignleft size-full wp-image-1111" alt="11 add script" src="/images/2012/textadventuresblog.files.wordpress.com-2012-02-11-add-script.png" width="625" height="467" /></a>

Let's play a YouTube video when the player looks at sofa. I choose "Play YouTube video" from the "Add New Script" dialog, and then I can enter a video ID. I found a clip of a TV sofa advert:
<p style="text-align:center;"><img class="aligncenter size-full wp-image-1112" title="12 add youtube" alt="" src="/images/2012/textadventuresblog.files.wordpress.com-2012-02-12-add-youtube.png" width="616" height="153" /></p>
And here's what the game looks like if we run it now:

<a href="/images/2012/textadventuresblog.files.wordpress.com-2012-02-13-play-youtube.png"><img class="alignleft size-full wp-image-1113" alt="13 play youtube" src="/images/2012/textadventuresblog.files.wordpress.com-2012-02-13-play-youtube.png" width="625" height="429" /></a>

So there you have it!

This is currently in private beta - <a title="Contact us" href="http://www.textadventures.co.uk/help/contact-us/">email me</a> if you're very keen to test it. Otherwise, I will make it available as a public beta in a few weeks.