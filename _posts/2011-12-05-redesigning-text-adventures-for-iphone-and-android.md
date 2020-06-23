---
layout: post
title: Redesigning text adventures for iPhone and Android
permalink: /2011/12/05/redesigning-text-adventures-for-iphone-and-android/
source: gamasutra
sourceUrl: http://www.gamasutra.com/blogs/AlexWarren/20111205/90742/Redesigning_text_adventures_for_iPhone_and_Android.php
tags: [Quest Apps]
---

<p>"The Things That Go Bump In The Night" is the first text adventure game specifically designed for smartphones, and is now available in both the <a href="http://itunes.apple.com/us/app/the-things-that-go-bump-in/id483544547?ls=1&mt=8">App Store</a> for iOS and the <a href="https://market.android.com/details?id=com.axeuk.android.bump">Android Market</a>.<br />
<br />
It&#39;s the first app that has been created from a game written for the <a href="http://www.textadventures.co.uk/quest/">Quest text adventure system</a>, which I have been developing for a number of years now. The game was written by Tim Hamilton, and in it you play a security guard settling down to a quiet night shift, when things start to go wrong. You must make your way around the compound, solving puzzles and dispatching mysterious beasts.</p>

<p>I believe it is the first text adventure to be specifically designed for a pocket-sized touch screen - unlike old text adventure games which rely heavily on keyboard input, you can play this game entirely without typing. Instead, you use hyperlinks and tabs to navigate and interact with the game world.<br />
 <a href="/images/2011/www.textadventures.co.uk-wp-content-uploads-2011-11-bump.png"><img alt="" class="aligncenter" height="194" src="/images/2011/www.textadventures.co.uk-wp-content-uploads-2011-11-bump-300x194.png" style="display: block; margin-left: auto; margin-right: auto;" title="iPhone screenshots" width="300" /></a> <br />
I&#39;ve written here before about the time being right to <a href="http://www.gamasutra.com/blogs/AlexWarren/20110905/8342/Reinventing_text_adventure_games_for_the_modern_web.php">bring back text adventures</a> by making them easier to play and embedding them on websites, so the obvious next step was to bring them to smartphones too. I think this kind of game can work well as a casual game, as you can just pull a text adventure out of your pocket and play for as long as you like, and you don&#39;t need sharp reflexes or great co-ordination - great for playing on public transport! <br />
<br />
The way the app works is by using a tool which I&#39;ve built to convert Quest games into pure Javascript. Using <a href="http://www.phonegap.com">Phonegap</a>, this HTML/JS is then wrapped into a cross-platform app. On iPhone, the <a href="https://github.com/phonegap/phonegap-plugins/tree/master/iPhone/NativeControls">NativeControls</a> plugin is used to display native tabs at the bottom of the screen, and to bring up native menus. On Android, it was simple to code a "tab" switcher via the Menu button, and game menus themselves are displayed using a <a href="http://jqueryui.com/">jQuery UI</a> dialog.<br />
<br />
<strong>Two Conversions</strong><br />
The first step in bringing the game to smartphones was to convert Tim&#39;s original game to the latest version of Quest. Tim Hamilton originally wrote "The Things That Go Bump In The Night" using Quest 4, which is effectively a completely different system to Quest 5, as that was a total rewrite (although it does share some of the same design ideas). So the first thing to do was convert a Quest 4 game into a Quest 5 game. I wrote a converter application which converts most of a game correctly, although there were still a few manual tweaks to do - even some Quest 4 bugs to emulate! What really helped was to have a complete walkthrough for the game - Quest 4 has a "transcript" feature which is similar to Quest 5&#39;s <a href="http://quest5.net/wiki/Using_walkthroughs">walkthrough</a> feature. This meant I could have Quest 4 and 5 automatically play the game through to completion, and compare the output, fixing things as I went along.<br />
<br />
I then sent Tim the converted Quest 5 game, and he made a few more tweaks and corrections. He also adapted the game to make better use of <a href="/2011/07/11/eliminating-guess-the-verb/" title="Eliminating “Guess the Verb”">hyperlinks</a>. Tim&#39;s enhancements made it possible to play the game through in its entirety, without the player having to type anything. <br />
<br />
<strong>Re-engineering Quest</strong><br />
The next step was to convert Tim&#39;s enhanced Quest 5 version of the game to Javascript, using a converter which I had started developing a few months ago. I&#39;d thought the converter was 90% done, but as is the case with so much in the software world, the last 10% took far longer than the first 90%. The main difficulty has been threading. Javascript is single-threaded, which means you can&#39;t pause a running thread while you wait for some user input. This meant I needed to re-work all of Quest&#39;s functions for displaying menus, waiting for keypresses, asking questions etc., and as a result had to refactor some fairly fundamental code such as the parser. Eventually I had a pure HTML/JS version of the game which could be played in any web browser. I implemented the walkthrough feature to verify the game was working correctly, and again I sent it to Tim so he could check for any "off-walkthrough" problems.<br />
<br />
<strong>Performance</strong><br />
Now the game was working in HTML/JS, it was straightforward to wrap it in Phonegap and create a functioning app. Even here there were unexpected problems - although the app ran at a respectable speed on my iPhone 4, when I ran it on my old iPhone 3G I was horrified to find that it would sometimes take 10 seconds to respond to a command. The fix was again some re-engineering to improve performance.<br />
<br />
<strong>Saving</strong><br />
The desktop/web version of Quest 5 saves games by writing out the entire game state. The JS app version takes a different approach, saving a delta instead - only changed attributes are saved to local storage. This is quicker, requires much less local storage, and also means that the app can be safely updated without breaking existing games. The delta is automatically saved after each turn. Again I found some performance issues here, so it took a bit of time to get this right. With a Phonegap app on the iPhone, you get no warning if your app is going to be terminated, so I had to make saving robust enough that it wouldn&#39;t break things horribly if the game started saving but never finished (instead, there are effectively two save slots that are used alternately, so the worst that can happen is you lose one turn).<br />
<br />
<strong>Android</strong><br />
By now I had the game working pretty well on iOS, and sent it to a few beta testers using <a href="http://testflightapp.com">TestFlight</a>, which I highly recommend as it takes much of the pain out of ad-hoc distribution on the iPhone. I thought it would be a good idea to get it working on Android too, and I was pretty pleased when only two days after I took delivery of the cheap but surprisingly capable Samsung Galaxy Ace, I had a version that worked on that too.<br />
<br />
I was pleased with the overall Android development experience - it seems so much more developer-friendly than iOS. The documentation is laid out in a way that a mortal can understand, and it&#39;s so much easier to send a build to beta testers - just email an APK file. Much more pleasant than dealing with certificates and distribution profiles on iOS.<br />
<br />
<strong>Available Now</strong><br />
It took about a week for my app to be reviewed by Apple, so today finally the game is released on the <a href="http://itunes.apple.com/us/app/the-things-that-go-bump-in/id483544547?ls=1&mt=8">App Store</a> and is also now available on the <a href="https://market.android.com/details?id=com.axeuk.android.bump">Android Market</a>.<br />
<br />
Feedback from the beta testers has been pretty positive - but it is a pretty difficult game, so should keep you occupied for a while!</p>