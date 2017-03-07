---
layout: post
title: >
    Eliminating "Guess the Verb"
permalink: /2011/07/11/eliminating-guess-the-verb/
---
Two classic problems of text adventure games:
<ol>
	<li><a href="http://www.ifwiki.org/index.php/Guess-the-verb">"Guess the Verb"</a>. When you want to do something in the game, it should understand you, and if you're trying to solve a puzzle, you shouldn't also have to figure out the particular sentence formation that the game author was expecting you to use.</li>
	<li>Players who are new to text adventures often don't know what kinds of things they can type in.</li>
</ol>
<div><strong>An old solution</strong></div>
To address these problems, Quest has always featured lists and a compass to the right of the game window. These show the objects in the player's inventory, and objects and exits in the current room. The idea is that, to a large extent, the player can interact with the game using the mouse.

<a href="http://textadventuresblog.files.wordpress.com/2011/07/panes.png"><img class="alignnone size-full wp-image-615" title="panes" src="http://textadventuresblog.files.wordpress.com/2011/07/panes.png" alt="" width="173" height="394" /></a>

However, these have always been a little inflexible. Firstly, there was a hard-coded list of verbs ("Look at", "Take", "Speak to") displayed on the buttons. Secondly, not everybody likes the look of the panes, but if you turn them off, you've removed a lot of the help that the player might get.

<strong>A new solution</strong>

Quest 5 introduces another approach - you can dispense with the lists entirely, and use hyperlinks.

<a href="http://textadventuresblog.files.wordpress.com/2011/07/example.png"><img class="alignnone size-full wp-image-617" title="example" src="http://textadventuresblog.files.wordpress.com/2011/07/example.png" alt="" width="640" height="318" /></a>

When you click one of the links, you get a menu showing the <strong>display verbs</strong> for that object. Each object can have its own display verbs, tailored to the type of object.

Quest provides default display verbs for various object types. For example, <strong>characters</strong> such as Professor Dave:

<a href="http://textadventuresblog.files.wordpress.com/2011/07/example1.png"><img class="alignnone size-full wp-image-619" title="example1" src="http://textadventuresblog.files.wordpress.com/2011/07/example1.png" alt="" width="640" height="318" /></a>

<strong>Objects</strong> such as the desk:

<a href="http://textadventuresblog.files.wordpress.com/2011/07/example2.png"><img class="alignnone size-full wp-image-620" title="example2" src="http://textadventuresblog.files.wordpress.com/2011/07/example2.png" alt="" width="640" height="318" /></a>

<strong>Containers</strong> such as the box of pens:

<a href="http://textadventuresblog.files.wordpress.com/2011/07/example3.png"><img class="alignnone size-full wp-image-621" title="example3" src="http://textadventuresblog.files.wordpress.com/2011/07/example3.png" alt="" width="640" height="318" /></a>

<strong>Switchable</strong> objects, such as the fan:

<a href="http://textadventuresblog.files.wordpress.com/2011/07/example4.png"><img class="alignnone size-full wp-image-622" title="example4" src="http://textadventuresblog.files.wordpress.com/2011/07/example4.png" alt="" width="640" height="318" /></a>

You can also add <strong>custom verbs</strong> to the list. For example, here we've added "push" to the button:

<a href="http://textadventuresblog.files.wordpress.com/2011/07/example5.png"><img class="alignnone size-full wp-image-623" title="example5" src="http://textadventuresblog.files.wordpress.com/2011/07/example5.png" alt="" width="640" height="318" /></a>

Apart from the final example, all of the display verbs were set up automatically using the functionality built in to Quest's Core library. When you mark an object as "Male character" for example, you get the relevant display verbs ("Look at", "Speak to") which are different to the display verbs you get for "Inanimate object" ("Look at", "Take"). When you mark an object as being able to be switched on or off, you get "Switch on" and "Switch off" added to the display verbs list.

Any type can add to the list of display verbs. Quest supports multiple inheritance, and the resulting display verbs list can be extended by multiple types. This means that if an object is both a male character, a container and can be switched on/off, you will get the full list of display verbs that you would expect. Any future libraries can also easily add to the list.

From the Object tab, you can customise the display verbs list entirely - adding or removing the default verbs.

<a href="http://textadventuresblog.files.wordpress.com/2011/07/example6.png"><img class="alignnone size-full wp-image-636" title="example6" src="http://textadventuresblog.files.wordpress.com/2011/07/example6.png" alt="" width="768" height="571" /></a>

&nbsp;

You can turn hyperlinks off by selecting "game" from the tree, then on the Options tab deselect the "Enable hyperlinks" options. But first consider why you would want to do this - if it's because seeing a list of verbs spoils your puzzle, it probably means it's not a very good puzzle.

Note that the display verbs is <em>not</em> the full list of verbs for an object, so you can easily support additional verbs for detail, without cluttering up the display list.

As with all Quest user interface features, the pop-up list works both on the desktop and via the web. So whichever way people play your game, they will get the same experience. I believe this feature will be especially important for web-based games, because if text adventures are to attract a new (and like it or not, more casual) audience, they have to be easy for people to start playing, and of course hyperlinks provide a very intuitive way to to get web users started.

(The hyperlink feature is available in the current Beta 2 release of Quest 5.0. "Display verbs depending on object type" is a new feature in Beta 3, which will be available soon - or you can <a href="http://quest.codeplex.com/">download the latest source code from CodePlex</a>)