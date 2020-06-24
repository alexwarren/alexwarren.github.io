---
layout: post
title: >
    Bringing more power to gamebook mode in Quest 5.4
permalink: /2013/02/27/bringing-more-power-to-gamebook-mode-in-quest-5-4/
source: textadventures
sourceUrl: http://blog.textadventures.co.uk/2013/02/27/bringing-more-power-to-gamebook-mode-in-quest-5-4/
tag: [Quest 5]
---
Quest started out as a text adventure system. Many people call text adventures "interactive fiction", but to me this is a fairly broad term, encompassing kinds of games that are not text adventures in the traditional sense. The "Choose Your Own Adventure" books are also a type of interactive fiction, but they are not text adventures - to me, anyway.

Systems like <a href="http://www.gimcrackd.com/etc/src/">Twine</a> and <a href="http://www.inklestudios.com/">Inkle</a> are starting to become more popular, bringing interactive fiction to a wider audience. These games follow the "Choose Your Own Adventure" model of branching narratives, so they are "interactive fiction" but not "text adventures" by my definition, as there is no simulation of the objects in the game world in the background. However, some people <em>do</em> refer to these games as text adventures, so it seems pretty hard to pin down the terminology.

It was the rising popularity of Twine, Inkle etc., which inspired me about a year ago to add <a title="Gamebook mode (&quot;Choose Your Own Adventure&quot;) in Quest 5.2" href="/2012/01/16/gamebook-mode-choose-your-own-adventure-in-quest-5-2/">gamebook mode</a> to Quest 5.2. My vision is for Quest to be a platform for all kinds of interactive fiction - whether that's the rich world model of a text adventure, or the simpler multiple choice of the CYOA style gamebook. And, indeed, why shouldn't one game be able to combine the two approaches?

The initial implementation of gamebook mode was really simple - multiple choice games were all it could handle. You could create pages, with links between the pages. That was it - nothing dynamically generated, no scripts, no game state of any kind except the page the player is currently on. This is fine if you want to create pure CYOA, but it's a bit limiting if you want to do anything more complicated, like emulate dice rolls within a game, or make small changes to a page's text depending on the path the player has taken to get there.

But it was fine for an initial attempt, to see if people would even use gamebook mode in the first place. Happily, they are - which makes sense, as it's a much simpler way to flesh out a quick interactive story than creating the world for a text adventure.

So, in Quest 5.4, I have made a number of improvements to the capabilities of gamebook mode. These have actually been pretty straightforward to implement, as gamebook mode always sat on top of the same platform as the text adventure mode - it was still using Quest's scripting engine underneath. The changes I have made simply expose some more of that power.

<strong>Gamebook Scripts</strong>

There is a new page type, "Script". When the player visits a script page, the script runs. The script can do anything - it may dynamically print out some text with some hyperlinks, or it might just send the player immediately to another text page, chosen according to some condition.

It can also run a "get input" command to get the player to type something, then maybe store that in an attribute, or send the player to a page based on what they typed in.

The Script Editor is the same as in text adventure mode, although the commands that can be added are slightly different. Many text adventure script commands relate to objects, and these are not relevant in gamebook mode and so are not displayed. This means that the Script Editor is a bit simpler in gamebook mode, though it still has access to "if", calling functions, running JavaScript and so on.

<strong>Text Processor</strong>

The new <a title="Quest 5.4 Text Processor – easier adaptive text and links" href="/2013/02/27/quest-5-4-text-processor-easier-adaptive-text-and-links/">Text Processor</a> I described in an earlier blog post is also available in gamebook mode. A similar set of codes is available, so you can conditionally print text even without using a script page.

For example, you can take advantage of the fact that pages have attributes like "visited", to write some text only if the user has visited a particular page. If you have a page called "cake" which the player may visit if they choose to eat a cake, you could write this on a later page:

    Your mother stares at you. {if cake.visited:"You have chocolate all over your face," she says.}

You can also include links to other pages directly within the page text (instead of having them underneath), and it's also finally easy to add images wherever you want them in the text using the {img} code.

<strong>Future</strong>

This release brings gamebook mode closer to text adventure mode, by opening up a lot of functionality to both. Now in gamebook mode, things can happen "behind the scenes" with richer state tracking, instead of the game being forced to have a pure branching structure.

For a future release I would like to further bring the two together, with the ability to add gamebook pages to a text adventure game. This will be useful for conversation trees for example, or maybe you just want to have a game that features both kinds of interaction in different sections. You could do this already to some extent - in the text adventure mode you can add custom commands, custom hyperlinks, and turn the command bar on and off as required, but it's my job to make it easy for you to create the kinds of interactive fiction you want to write. So please do let me know what you're up to with Quest and how I can help you!

I've only got a few more things to do before the beta version of Quest 5.4 is ready, so this should be available for you to play with in the next few days. Or as always, the <a href="http://quest.codeplex.com/releases/view/82308">nightly build</a> is available for the brave and impatient.