---
layout: post
title: >
    Squiffy 3 - a new web-based editor for interactive fiction
permalink: /2015/04/25/squiffy-3-a-new-web-based-editor-for-interactive-fiction/
---
The third release of <a href="http://textadventures.co.uk/squiffy">Squiffy</a> is now available. The big new feature in this version is <strong>you no longer have to download anything!</strong>

Previously, the only way to use Squiffy was by creating a file in a text editor and compiling it from the command line. You can <a href="http://docs.textadventures.co.uk/squiffy/install.html">still do that</a>, but you can now just <a href="http://textadventures.co.uk/squiffy/editor">use your web browser instead</a>.

In-keeping with the philosophy of trying not to do too many new things in any one release, this first iteration of the editor is intentionally very simple. It's pretty much a text editor in the cloud, with a few Squiffy-specific bells and whistles to make editing a game easier.

<a href="https://textadventuresblog.files.wordpress.com/2015/04/screen-shot-2015-04-25-at-19-26-06.png"><img class="alignnone wp-image-2616 size-large" style="border:0 solid #000000;" src="https://textadventuresblog.files.wordpress.com/2015/04/screen-shot-2015-04-25-at-19-26-06.png?w=660" alt="Squiffy Editor" width="660" height="488" /></a>

You can use the editor without logging in, in which case all changes are automatically saved to your browser (and are automatically re-loaded the next time you come back). Or if you're logged in, you can hit the Save button to sync your game to your account, so you can access it from anywhere.

You can publish your game directly to textadventures.co.uk, or you can export it as HTML and JavaScript to upload to any website (or even wrap with something like PhoneGap to turn it into a mobile app).

As you create sections and passages, the drop-down lists above the editor automatically update. These provide an easy way for you to find your way around your game.

When you run your game, it appears on the right-hand side of the screen, so you don't need to switch between tabs or windows.

If you set <a href="http://docs.textadventures.co.uk/squiffy/attributes.html">attributes</a> in your game, you can keep track of them by looking at the pane at the bottom of the screen, which logs all attribute changes.

Try it out now at <a href="http://textadventures.co.uk/squiffy/editor">http://textadventures.co.uk/squiffy/editor</a>.

<strong>Open source, of course...</strong>

Both Squiffy and the editor are open source and on GitHub:
<ul>
	<li><a href="https://github.com/textadventures/squiffy">Squiffy</a></li>
	<li><a href="https://github.com/textadventures/squiffy-editor">Squiffy Editor</a></li>
</ul>
For Squiffy 4, I'm planning to wrap this HTML-based editor with <a href="http://electron.atom.io/">Electron</a> (formerly Atom Shell), to create an offline downloadable app that will work on Windows, Mac and Linux. After that, we can start fleshing out the editor with more features - a graphical overview of your game's sections would be an important feature, I think. I'm open to more suggestions!

Enjoy! If you have any questions, post in the <a href="http://forum.textadventures.co.uk/viewforum.php?f=24">forum</a> or ask at <a href="http://ifanswers.com">IF Answers</a>.