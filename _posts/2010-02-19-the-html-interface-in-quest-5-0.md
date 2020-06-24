---
layout: post
title: >
    The HTML interface in Quest 5.0
permalink: /2010/02/19/the-html-interface-in-quest-5-0/
source: textadventures
sourceUrl: http://blog.textadventures.co.uk/2010/02/19/the-html-interface-in-quest-5-0/
tag: [Quest 5]
---
<p>Previous versions of Quest used a "rich text" control to display text. This is quite an old Windows control, which is fine for basic formatting but ultimately lacks flexibility. Quest 5.0 replaces this with an embedded web browser, which opens up a lot of new capabilities.</p>

<p>At a basic level, it makes it very easy to add something I have wanted to add to Quest for a long time - hyperlinks:</p>

<blockquote>
<img src="/images/htmlinterface.png" />
</blockquote>

<p>By default, objects and exits in a room description are hyperlinked, so the player can look at objects and move around the game by clicking the game text. I may add the option to display a short menu of verbs instead, so that the hyperlinks could potentially be used as a complete replacement for the object panes.</p>

<p>Of course, some game authors may not like this, just as some authors don't like Quest's default panes - but you will be able to turn these off. The links are put there as part of the room description code in Core.aslx, so you can override it, and there will be an option to turn it off.</p>

<p><b>Two-way interaction with JavaScript</b></p>

<p>The most exciting thing about using HTML for the interface is that you can completely customise it to look exactly as you want. You can specify your own HTML file for the interface by including an interface tag in your ASLX file. Within that HTML file you can call JavaScript just as in any standard webpage, and that JavaScript can interact with your ASLX file.</p>

<p>To call JavaScript from your game code, we can use a particular call to the <kbd>request</kbd> command. The <kbd>request</kbd> command's first parameter is the request type, and a request type of "RunScript" lets you call any JavaScript function defined in your game interface.</p>

<p>You can see an example of this in the YouTube example included with the <a href="http://quest5.net/downloads/samples.zip">Quest 5.0 samples</a>. In the example we use the following code:</p>

<pre>
request (RunScript, "AddYouTube; ZXZWepU7zC8")
</pre>

<p>This calls the AddYouTube function defined in YouTube.js, and passes in the parameter "ZXZWepU7zC8" which is just the YouTube id of <a href="http://www.youtube.com/watch?v=ZXZWepU7zC8">a particular video</a>.</p>

<p>The AddYouTube function simply creates the relevant HTML to embed the video and adds it to document.body.innerHTML. The video then appears in the Quest window.</p>

<p>You can also go the other way, making a JavaScript function call a function in your ASLX file. This way, we might get rid of the hard-coded panes altogether and have a purely HTML and JavaScript solution which can be customised however you want. It also opens up the possibility of support for "point and click" games in the style of Monkey Island, because you could trigger game behaviour when the user clicks on something in the HTML interface such as part of an image.</p>

<p>To trigger a Quest function from JavaScript, you can call the ASLEvent function defined in WebFunctions.js. This is included in the standard HTML interface (PlayerDefault.htm, which is the default interface used by Core.aslx), and takes two parameters - the name of the function, and one parameter. You can call any Quest function that takes one string parameter.</p>