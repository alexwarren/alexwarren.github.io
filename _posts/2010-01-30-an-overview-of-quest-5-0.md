---
layout: post
title: >
    An overview of Quest 5.0
permalink: /2010/01/30/an-overview-of-quest-5-0/
source: textadventures
sourceUrl: http://blog.textadventures.co.uk/2010/01/30/an-overview-of-quest-5-0/
tag: [Quest 5]
---
<p>Quest 5.0 is under development, and is substantially improved from previous versions. Although it is still a long way from being released, I thought it would be a good idea to write a series of blog posts discussing how the new system works, and the new capabilities this will bring to the system.</p>
<p><b>Limitations of Quest 4.x</b></p>
<p>Quest has grown over the years, from the very limited and somewhat quirky Quest 1.0 back in 1998, to the much more powerful system that it is today. However, it is still based on those foundations laid over a decade ago, and this means that it would be hard to implement some frequently requested features without a fundamental rewrite. This is the reason for taking Quest “back to the drawing board” – Quest 5.0 is a brand new text adventure game system, but taking many cues from the current design of Quest.<p>
<p><b>Doing more with less</b></p>
<p>The main idea behind the new version of Quest is that most of its features should be implemented in Quest itself. This is a fundamental change from the way previous versions have worked – in Quest 4.x, there is code for handling the ASL (the Adventure Scripting Language, which is how games define their own logic), and there is also separate code for providing the default behaviour for games, such as what happens when a player takes an object, how to print room descriptions, etc.</p>
<p>By contrast, Quest 5.0 is designed to handle as little default game behaviour as possible. Instead, all this code is written in ASL itself, and defined in a core library. This means that as a game author, you can see exactly how the system works at quite a deep level – and more importantly, you can override this and specify your own behaviour instead.</p>
<p>Many concepts which were separate in previous versions have now been unified. For example, Quest 4.x has separate ideas about rooms and objects, and the player itself is something different again. In Quest 5.0, these are all just objects. An object can contain other objects, and they can contain objects themselves, and so on. So when the player enters a kitchen, the player object moves inside the kitchen object. The kitchen then contains the player, in exactly the same way that a fridge defined in the game might contain a bottle of milk.</p>
<p><b>Eating one’s own dog food</b></p>
<p>In writing the fundamental behaviour of Quest in ASL, I have had beef up the power of the language. By “<a href="http://en.wikipedia.org/wiki/Eating_one's_own_dog_food">eating my own dog food</a>”, I have had to design ASL to handle many things that previous versions simply couldn’t cope with, with the result that it is now a much more powerful and capable language. Expressions are now fundamental to the way ASL works, for example, and there is built-in support for handling lists.</p>
<p><b>Technical Preview</b></p>
<p>I’m very excited by the potential of the new system, and I’m keen to release an early version as soon as possible so I can get your feedback. This will be a very rough “technical preview” version, with plenty of functionality missing – there will be no visual editor and no ability to load Quest 4.x games – though of course these will arrive later. I expect to release this preview version in the next month or two.</p>
<p>Stay tuned this blog for updates, and if you have any questions or ideas then please post to the new <a href="http://www.axeuk.com/phpBB3/viewforum.php?f=10">Quest 5.0 forum</a>.</p>