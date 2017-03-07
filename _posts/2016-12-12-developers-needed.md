---
layout: post
title: >
    Developers needed for textadventures.co.uk and Quest
permalink: /2016/12/12/developers-needed
source: textadventures
sourceUrl: http://blog.textadventures.co.uk/2016/12/12/developers-needed/
---
This is a follow up to <a href="http://blog.textadventures.co.uk/2016/12/07/looking-for-a-new-owner-for-textadventures-co-uk-and-quest/">Looking for a new owner for textadventures.co.uk and Quest</a>.

Thanks to all of you who have got in touch so far. A lot of people have asked about what would be involved in taking over and running textadventures.co.uk and/or Quest, so this post is to go into a bit more detail about how things are set up and how the work might be split up across different people.

For a smooth transition, I need to find people to fill these four roles:
<ul>
	<li>One or more <strong>.NET web developers</strong> for textadventures.co.uk and/or ActiveLit, familiar with Azure and ASP.NET MVC and with front-end development using JavaScript and Bootstrap.</li>
	<li>One or more <strong>JavaScript developers</strong> for Quest 6, Squiffy and/or QuestKit. Ideally familiar with back-end and front-end web development, and desktop development using Electron.</li>
	<li>One or more <strong>.NET developers</strong> familiar with <strong>both desktop and web development</strong> for Quest 5. Ideally familiar with both C# and VB.NET.</li>
	<li>A <strong>server admin</strong> to keep the current browser version of Quest alive (both the Player and the Editor). Needs to know how to run a Windows server. This is currently running on a VPS at OVH. (This is just for the online player and editor - running textadventures.co.uk itself will require a developer familiar with Azure. Eventually if both the Quest Player and Editor are rewritten to use JavaScript, the server admin role becomes redundant).</li>
</ul>
Of course any of these roles can be combined - after all, they've all been done by me up until now.
<h2>textadventures.co.uk and ActiveLit sites</h2>
<a href="http://textadventures.co.uk">textadventures.co.uk</a> and <a href="http://activelit.com">ActiveLit</a> run on the <a href="https://azure.microsoft.com/en-gb/services/app-service/">Azure App Service</a> (formerly known as Azure Websites). Data is stored in <a href="https://azure.microsoft.com/en-gb/services/sql-database/">Azure SQL</a> and in Azure <a href="https://azure.microsoft.com/en-gb/services/storage/blobs/">blob</a> and <a href="https://azure.microsoft.com/en-gb/services/storage/tables/">table storage</a>.

The web-accessible blobs (for game downloads, cover art etc.) are behind a Cloudflare CDN.

The code uses C# and ASP.NET MVC. The front-end uses Bootstrap, JQuery and a little bit of React.

ActiveLit runs alongside textadventures.co.uk on the same Azure infrastructure and talks to the same database.
<h2>Quest 5 &amp; 6</h2>
There are two parts to Quest - the Player and the Editor. There are also two ways of using Quest - via the web, and via a downloadable Windows desktop application.

The current version is Quest 5, and I also made a start on Quest 6 which is architected quite differently. The new version rewrites the Player back-end to use JavaScript, which means the web version requires no server component (making it much faster, infinitely scalable, distributable on any website, and an end to time-outs while playing), and the desktop version will be cross-platform for the first time (packaged using Electron for Windows, Mac and Linux).

To take on Quest 6, I'm looking for a developer who has experience using the modern JavaScript ecosystem (npm, TypeScript, gulp, webpack and all of that kind of thing). I will work with this person to help get Quest 6 shipped. (It doesn't make sense for me to continue working on this project without somebody to hand it over to, because it will of course need to be maintained after it is shipped). Quest 6 lives in the <a href="https://github.com/textadventures/quest/tree/v6">v6 branch</a> on GitHub.

After Quest 6 is shipped, rewriting the Editor to use JavaScript would also be really useful. That would be a project for the new Quest 6 maintainer, or maybe even someone else. If Quest could be taken to the point where both the Player and the Editor were shipping as 100% JavaScript applications, that would be a massive simplification of the Quest architecture.

Quest's long-term future lies with Quest 6, but it would be good if we can find somebody to maintain <a href="https://github.com/textadventures/quest">Quest 5</a> for the time being, not least because even if/when Quest 6 ships, it will still be using the same .NET-based Editor that Quest 5 uses.

I've updated the <a href="http://docs.textadventures.co.uk/quest/developers.html">Developers</a> documentation page on the Quest docs site to describe how the various projects that make up Quest 5 together. It is not an easy thing to pick up - there's a lot of code there, and a mixture of languages and technologies reflecting my changing tastes and experience over time. It's stable though, and it shouldn't require big changes because if the Player and Editor both get rewritten using JavaScript then all of it will become obsolete.
<h2>Proposals</h2>
If you're interested in taking on one or more of these roles, please email me at <a href="mailto:alex@textadventures.co.uk">alex@textadventures.co.uk</a>.

To reiterate, I am not looking for money. I want to hand these over to somebody (or a group of people) with a passion for IF and a vision for where these products could go in the future. That vision doesn't necessarily have to agree with my vision (that's what stepping back is about) - this is a massive opportunity for somebody to take over running a popular website and IF development system. textadventures.co.uk is <em>the</em> place people come when they search for text adventures on the web, so it's a big gateway to the world of interactive fiction. Taking on the website doesn't have to be about taking on Quest.

I've only got Alexa rankings to prove it (so take them with a pinch of salt) but <a href="http://www.alexa.com/siteinfo/textadventures.co.uk">the site appears to be bigger</a> than other IF sites like <a href="http://www.alexa.com/siteinfo/tads.org">IFDB</a>, <a href="http://www.alexa.com/siteinfo/intfiction.org">intfiction.org</a> and <a href="http://www.alexa.com/siteinfo/choiceofgames.com">Choice of Games</a>. It's how a lot of people start out making text adventures - in fact, it's introduced a lot of people to programming in the first place. It's used by schools to get children into coding and creative writing.

Thanks again for responses so far. If you can't help out yourself, please help spread the word to somebody who might be able to take this on and ensure it has a future.