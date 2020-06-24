---
layout: post
title: >
    Quest is now on GitHub
permalink: /2014/07/06/quest-is-now-on-github/
source: textadventures
sourceUrl: http://blog.textadventures.co.uk/2014/07/06/quest-is-now-on-github/
tag: [Quest 5]
---
Ever since Quest was made open source back in 2010, we've been using <a href="https://www.codeplex.com/">CodePlex</a>, which is Microsoft's open source project hosting site.

Now in 2014, even Microsoft isn't using CodePlex any more - all their open source ASP.NET is <a href="https://github.com/aspnet">on GitHub</a>, for example.

So CodePlex has been feeling a bit dead, but even worse, it's been a bit buggy over the last few months - frequently giving me authorisation errors when pushing to the Mercurial repository.

I'd stuck with CodePlex and Mercurial for a while because <a href="http://git-scm.com/">Git</a> tooling on Windows was always kind of horrible. Fortunately, that changed when GitHub launched <a href="https://windows.github.com/">GitHub for Windows</a>, which finally makes it easy for just about anybody to use Git.

So I've now migrated Quest over, and the source code now officially lives on GitHub at <a href="https://github.com/textadventures/quest"><strong>https://github.com/textadventures/quest</strong></a>.

All issues from the CodePlex Issue Tracker have been <a href="https://github.com/textadventures/quest/issues">migrated too</a>. Please log all bug reports at GitHub from now on.

Finally, nobody had ever heard of the <a href="http://opensource.org/licenses/MS-PL">Ms-PL</a> which Quest was previously licensed under. I kept having to say it was "just like the MIT licence". So I've updated that too, and Quest is now officially licensed using the <a href="http://opensource.org/licenses/MIT">MIT licence</a>. Nothing has really changed - you can still do pretty much what you want with the Quest code, including using it within closed-source projects - but hopefully it's just a bit clearer now.