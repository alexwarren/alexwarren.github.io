---
layout: post
title: >
    A year of full-time Questing - Part 1
permalink: /2012/04/03/a-year-of-full-time-questing-part-1/
source: textadventures
sourceUrl: http://blog.textadventures.co.uk/2012/04/03/a-year-of-full-time-questing-part-1/
tag: [Quest 5]
---
Just over one year ago, at the end of March 2011, I left my job to work on <a href="http://www.textadventures.co.uk/quest/">Quest</a> full-time. One of the nice things about not working for an employer has been a complete absence of such time-wasting exercises as conducting an annual performance review. However, there is something to be said for periodically taking stock, and seeing how far and how quickly things have progressed. So, here's a review of one year of working on Quest.

<strong>A Brief History of Quest</strong>

By way of introduction, let's wind the clock back not one year, but almost fourteen. Quest has been part of my life for a long time. I started work on <a href="https://groups.google.com/d/topic/rec.arts.int-fiction/EP4N9x3fBs4/discussion">Quest 1.0 in 1998</a> - I was a bored 16 year-old looking for a coding project during the summer holidays, and I wanted to create something using Visual Basic 5. I thought a text adventure would be a simple way to start, but I didn't want to hard-code the entire game - some sort of engine would be what I needed... I never actually wrote a text adventure in the end, because writing the engine was too much fun.

I kept tinkering with Quest in my spare time while I went through sixth form, university and my first job - which was doing technical support. I got bored of that - solving the same problems over and over again has never really been my thing - so in October 2006 I quit my job and decided to work full-time to create Quest 4.0, which at the time I was selling on a "shareware" or "try before you buy" basis.

I failed to really make much money doing that, and from May 2007 Quest became a spare-time project again as I got my first "proper" developer job.

<strong>Rip it up and start again</strong>

I definitely learned a lot in the first couple of years working on "someone else's" software - it taught me a lot about how large software should be structured. It also taught me a lot about what <em>not</em> to do - the company I worked for was stuck with a huge legacy codebase which nobody fully understood, and was liable to break in all kinds of subtle ways.

I carried on working on Quest 4, but I was becoming increasingly frustrated with it. I had a lot of ideas for things that I wanted to do, but which were simply impossible given that its design had never really been thought through particularly well, and it had grown a lot over the years into what was approaching an unmaintainable mess. It was also written entirely in Visual Basic (version 5, and later 6), which meant it was getting painfully out of date - that language not having received an update since Quest was first created a decade previously.

Around April 2009 I started playing with some ideas for how Quest ought to be, writing the bare bones of an entirely new system in C#. This <a href="/2010/01/30/an-overview-of-quest-5-0/">grew into Quest 5.0</a>, announced in January 2010 - a completely new text adventure system, sharing pretty much just a name with Quest 4.

By July 2010 I'd got fed up with my job, and quickly found a job with another company. Too quickly, as it turned out, and I got pretty fed up there too, so in March 2011 I handed in my notice. By this time I had refactored the old Quest 4 VB6 code into a component that plugged into the new Quest 5 architecture, and I had announced that <a href="/2010/10/18/quest-5-0-is-now-open-source/">the new system was to be open source</a>. The new Quest was shaping up nicely, and I submitted a couple of examples of its new "play online" interface to the <a href="http://emshort.wordpress.com/2011/03/19/if-demo-fair-themes-interface/">IF Demo Fair at PAX East</a>.

Alongside the demo of the regular "play online" interface was a <a href="http://play.textadventures.co.uk/v5/Play.aspx?file=twohalves/twohalves.quest">split-screen demo</a>, showing off the flexibility of the new system - I think this kind of customisability of the Quest 5 interface is an area which still hasn't really been fully explored yet, which shows the potential of Quest which still remains untapped.

<a href="/images/2012/textadventuresblog.files.wordpress.com-2012-04-splitscreen.png"><img class="size-full wp-image-1309" alt="Split-screen text adventure prototype" src="/images/2012/textadventuresblog.files.wordpress.com-2012-04-splitscreen.png" width="625" height="296" /></a>

<small>Split-screen text adventure prototype</small>

<strong>The year in review</strong>

So we finally reach the start of the year. It was the start of April 2011 and I was working on Quest full-time, without much in the way of a business plan - I was just really sure that I wanted Quest 5 to exist, and, if nothing else, it would probably add a lot more to my CV than working for somebody else for the equivalent amount of time.

One of my first tasks was to <a title="New Quest and textadventures.co.uk websites" href="/2011/04/28/new-quest-and-textadventures-co-uk-websites/">redesign the website</a>, moving the main Quest site from the old axeuk.com domain to bring it together with the games at textadventures.co.uk. This was light relief from the meatier task of working on the Quest 5 Editor, the bare skeleton of which was already in place, but most of the editor controls and functionality had not yet been implemented.

<img class="size-full wp-image-1303" title="textadventures.co.uk website" alt="" src="/images/2012/textadventuresblog.files.wordpress.com-2012-04-ta-website.png" width="600" height="157" />

<small>textadventures.co.uk website, old and new</small>

In May, I carried on working mostly on the Editor, culminating in the release of the <a title="Quest 5.0 Beta 1 now available" href="/2011/05/24/quest-5-0-beta-1-now-available/">first beta</a> near the end of the month. The Script Editor looked a bit different in this Beta compared to later versions:

<img title="Beta 1 Script Editor" alt="" src="/images/2012/textadventuresblog.files.wordpress.com-2011-05-scriptcommand.png" width="409" height="125" />

<small>The Script Editor from Quest 5.0 Beta 1</small>

This Editor was written using <a href="http://en.wikipedia.org/wiki/Windows_Forms">Windows Forms</a>, and although it mostly worked, it could be quite glitchy. Screen elements would often not draw correctly, and I was also not entirely happy with the design - in the screenshot above, you have a list of script commands, and the editor for the selected command appears below the list. This was similar to the design of the Script Editor in Quest 4, but it looked harder to use than it could be. Wouldn't it be better if the "Hello world" in the list was directly editable in-place?

Windows Forms was clearly never going to be up to the job - <a href="http://en.wikipedia.org/wiki/Windows_Presentation_Foundation">WPF</a> looked like the more flexible and modern solution. It was going to be a pain to throw away a lot of the code I'd been working on, but I'd been careful throughout to separate the UI from the underlying Editor logic, so it was "simply" a matter of entirely replacing the user interface.

So, in June, I sat down and taught myself WPF. In total it only took about two weeks to redevelop the WinForms code. It felt painful at the time to do two weeks of work and essentially stand still, but it was well worth it. All the weird layout glitches went away, and I was able to implement the design I wanted for the Script Editor:

<a href="/images/2012/textadventuresblog.files.wordpress.com-2012-04-scripteditor.png"><img class="size-full wp-image-1320" title="Beta 2 Script Editor" alt="" src="/images/2012/textadventuresblog.files.wordpress.com-2012-04-scripteditor.png" width="385" height="85" /></a>

<small>The Script Editor in Quest 5.0 Beta 2 (and now)</small>

I released <a title="Quest 5.0 Beta 2 released" href="/2011/06/20/quest-5-0-beta-2-released/">beta 2</a>, and by now was eyeing the final release of version 5.0. A lot of the "nice to have" features logged on the Issue Tracker were moved to later versions - it was much more important for Quest 5 to be "out there" than perfect. Over July 2011, I released <a title="Quest 5.0 Beta 3 and Tutorial available" href="/2011/07/17/quest-5-0-beta-3-and-tutorial-available/">beta 3</a> and <a title="Quest 5.0 Beta 4 released – approaching the final release" href="/2011/07/28/quest-5-0-beta-4-released-approaching-the-final-release/">beta 4</a>, and worked on getting the documentation done, in particular the <a href="http://quest5.net/wiki/Tutorial">tutorial</a>. I decided that it was time to stop adding things, and declared that beta 4 was feature complete - after a few months of working on Quest it was time to tie up everything and release a production quality version.

Over August, I released various release candidates, and finished up the documentation. I also squeezed in a week up at the <a href="http://www.edfringe.com">Edinburgh festival</a>, and while I was up there I <a href="http://forum.adrift.co/viewtopic.php?f=6&amp;t=7416">met up</a> with my <del>nemesis</del>/<del>arch-rival</del>/fellow text adventure engine creator Campbell Wild, the man behind the <a href="http://www.adrift.co/cgi/adrift.cgi">ADRIFT</a> system.

Finally at the end of the month, <a title="Quest 5.0 is out now" href="/2011/08/30/quest-5-0-is-out-now/">Quest 5.0 was ready</a>.

<strong>Trying to reach a bigger audience</strong>

So, I had created the software. The next focus then had to be getting people to hear about it and use it! I submitted a <a href="http://www.prweb.com/releases/2011/9/prweb8764118.htm">press release</a>, which perhaps inevitably didn't really get very far. I attracted more visitors with a short <a href="http://www.gamasutra.com/blogs/AlexWarren/20110905/8342/Reinventing_text_adventure_games_for_the_modern_web.php">blog post about Quest on Gamasutra</a>.

In hindsight, perhaps this isn't surprising. "A new piece of Windows desktop software that gives you the ability to write a text adventure game" somehow doesn't have a great "hook" to it - I think it's much easier to announce <em>a game</em> than it is to announce <em>a system for making a game</em>, as with a game you've immediately got something to demonstrate - a game system is harder to get your head around. Furthermore, nobody gives a crap about Windows desktop software in this day and age - when was the last time any such software was newsworthy?

It was this realisation that fuelled the subsequent Quest projects. It was time to move beyond the desktop.

<strong>Pick up the phone</strong>

In September 2011, I started work on getting Quest games onto smartphones. While I was working on Quest 5.0, I'd thought I might achieve this using <a href="http://xamarin.com/monotouch">MonoTouch</a> for iOS and <a href="http://android.xamarin.com/Welcome">MonoDroid</a> for Android. However, these products are fairly expensive, and I wondered if having a Quest game running on top of the Quest platform running on top of the Mono platform running on top of the underlying mobile OS was a recipe for terrible performance.

Fortunately I had a bit of an epiphany while cycling one lunchtime and realised that an even better platform would be JavaScript, because this can be wrapped with <a href="http://phonegap.com/">PhoneGap</a> to create "native" apps for all major mobile OSes. Quest's ASLX programming language is conceptually pretty similar to JavaScript, so the "only" effort required would be to reimplement Quest's C# platform code in JavaScript, and then write a converter to convert ASLX into JavaScript. The UI would be relatively straightforward because I could just use HTML, and Quest was already written with that as a target output format.

It only took a couple of weeks to get the basics up and running, implementing a converter plus the necessary code to <a href="/2011/09/30/using-quest-to-create-text-adventures-for-iphone-ipad-android/">get a game running</a>. This would only work for Quest 5.0 games though - if I wanted to actually release a Quest game as a mobile app any time soon, I had a problem because all the existing games were for Quest 4.x and earlier. So I spent a while working on another converter, so that with Tim Hamilton's help we could convert his Quest 4 game "<a href="http://www.textadventures.co.uk/review/346/">The Things That Go Bump In The Night</a>" first into a Quest 5 game, and then into an mobile app.

In October, I released the first bug-fix for Quest - v5.0.1. I was quite pleased that nothing too serious had come up in the six weeks since the original 5.0 release - all those betas and release candidates had been worthwhile. I'd also started working on Quest 5.1, adding the enhanced game browser (converting it to WPF along the way), and adding a Simple Mode based on feedback from Kristian Still, who was starting to use Quest in the classroom.

The major changes in Quest 5.1 though were brought about by the requirement to be able to convert to JavaScript - the inability of JavaScript to use threads turned out to be a significant limitation, as a lot of the 5.0 code was written assuming that there would never be a problem with stopping a thread from processing in order to ask the user a question, for example. This meant that the app conversion didn't turn out to be quite as simple as I thought it would be, and it was the end of November before the <a title="“The Things That Go Bump In The Night” coming to iPhone and Android" href="/2011/11/29/the-things-that-go-bump-in-the-night-coming-to-iphone-and-android/">first Quest iPhone app was submitted</a> to the iOS App Store.

Interest was picking up in using Quest as an educational tool, fuelled mostly by <a href="http://www.kristianstill.co.uk/wordpress/tag/quest/">Kristian Still's enthusiasm</a>. I presented Quest at the <a title="Quest in Education – “Changing the Game” conference" href="/2011/11/14/quest-in-education-changing-the-game-conference/">Changing the Game</a> conference in Birmingham, all about teaching through creating and playing games, and was pleased at the response - it seemed my ideas about <a href="/2011/07/27/teaching-with-text-adventures/">teaching with text adventures</a> had at least some merit! One bit of feedback struck me though - it's not always easy for schools to roll out software across Windows desktops. It can often be expensive, if a school is locked into an IT contract with an external supplier. This, and my general feeling that Windows desktop software is probably a bit of a dead end in this day and age, moved my vague plan for a web-based Quest Editor way up my "to do" list.

So, the web Editor has been pretty much what I've spent most of the last three months doing. I've done a couple of other things on the side - releasing Quest 5.1 and also enhancing the web-based player (adding the ability to save, and also making it work nicely on mobiles and tablets). I'm also nearly ready to release a beta of Quest 5.2 - notable new features being the <a title="Gamebook mode (“Choose Your Own Adventure”) in Quest 5.2" href="/2012/01/16/gamebook-mode-choose-your-own-adventure-in-quest-5-2/">Gamebook mode</a> and <a title="Shoot monster with ray gun, burn corpse with incinerator – two-object verbs in Quest 5.2" href="/2012/03/20/shoot-monster-with-ray-gun-burn-corpse-with-incinerator-two-object-verbs-in-quest-5-2/">two-object verbs</a>.

I'm continuing to present Quest whenever I get the opportunity - in January I was <a title="Game Based Learning – Interactive Fiction at LWF Free Festival" href="/2012/01/23/game-based-learning-interactive-fiction-at-lwf-free-festival/">at LWF</a>, in February I helped out <a title="Text adventures in the classroom – Quest day at Perins School" href="/2012/02/24/text-adventures-in-the-classroom-quest-day-at-perins-school/">year 7 using Quest at Perins school</a> and presented it to the <a href="http://www.meetup.com/The-London-Educational-Games-Meetup-Group/events/45215902/">London Educational Games meetup</a>, and in March I did an <a title="TeachShare on 27th March: Using Text Adventure Games in the Classroom" href="/2012/03/22/teachshare-on-27th-march-using-text-adventure-games-in-the-classroom/">online TeachShare</a>. There should also be a workshop <a href="http://www.gamesbritannia.com/2012/">Games Britannia</a> in July - hopefully more details on that soon.

<strong>What's next?</strong>

After the release of Quest 5.2 (including the web Editor), what's next? The Issue Tracker has many items <a href="http://quest.codeplex.com/workitem/list/advanced?keyword=&amp;status=All&amp;type=All&amp;priority=All&amp;release=Quest%205.3&amp;assignedTo=All&amp;component=All&amp;sortField=Id&amp;sortDirection=Ascending&amp;page=0">logged for Quest 5.3</a>, and there is still work to do on the smartphone apps - bringing them to Windows Phone 7, a better layout on iPad, and converting more games.

However, the clock is ticking, and my bank balance is emptying. It is likely that I will have to return to some more regular form of paid employment pretty soon, which will mean Quest becomes a spare-time activity again, and the pace of updates will slow down a lot.

If you think all of this is worthwhile, you can help make more of it happen sooner. <strong>Please consider <a title="Donate" href="http://www.textadventures.co.uk/quest/donate/">making a donation towards the development work</a></strong>. Maybe you'd like to sponsor me to work on a feature? I would love to hear your thoughts - please <a title="Contact us" href="http://www.textadventures.co.uk/help/contact-us/">get in touch</a> and let me know.

Alternatively, if you're a developer - with knowledge C#, VB.NET, ASP.NET or JavaScript etc. - why not <a href="http://quest5.net/wiki/Developers">join in the open source project</a>? If you need help, drop me an email or go to the <a href="http://www.textadventures.co.uk/forum/viewforum.php?f=15">Developer Forum</a>.

In the next blog post, I will continue my "appraisal" of Quest, looking at what works well, and also at what an HR department would euphemistically call its "areas for improvement".