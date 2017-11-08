---
layout: post
title: >
    The secret of good documentation is empathy
permalink: /2013/06/26/documentation-empathy/
---
Writing documentation is hard, but that's no reason to skimp on it if you want to run a successful software project. It's certainly one of my least favourite activities, and usually one I put off right until the last minute, but the existence of good documentation is often the deciding factor whenever I'm assessing whether to use some software.

I have become accustomed to most documentation being pretty crappy though - so much so, that sometimes I forget to even look for it. I've been learning the JavaScript library <a href="http://knockoutjs.com/">Knockout</a> this week, and I'd looked a few things up on <a href="http://stackoverflow.com">Stack Overflow</a> before realising that Knockout's <a href="http://knockoutjs.com/documentation/introduction.html">own documentation</a> is excellent.

What I like about it is:
<ul>
	<li>it's written to help me out, as a new user who knows nothing about Knockout</li>
	<li>it explains why I would want to use it in the first place</li>
	<li>it guides me through the key concepts, with examples</li>
	<li>it doesn't shy away from the "advanced" stuff, but it flags it up appropriately - so if you're more of a JavaScript novice, you know which parts you can safely skip, but if you want to know more detail about what it's doing, all the info you need is there</li>
	<li>there is a clear progression through the documentation - pages are relatively free of links, which keeps you on the right path, but if you want to jump in and look something up it's easy to do so</li>
</ul>
It's just the right amount of detail - not too little, not too much, and you can read the whole thing in quite a short amount of time and feel like you have a good understanding of what Knockout is and how to use it.

While I think of it, the documentation for <a href="http://twitter.github.io/bootstrap/">Bootstrap</a> is another example which manages to get this kind of digestible tutorial-but-also-reference thing right.

As much as I love <a href="http://phonegap.com/">PhoneGap</a>, I wish their documentation was as good as this. Frequently, it's not kept up to date, which can lead to a lot of hair tearing even when trying to follow something as simple as the guides for setting up your first project. How many users have been put off using PhoneGap at all because of this?

I think all that's needed is a little empathy. Remember that a new user doesn't know anything about the software - and their first question is "why the hell should I bother using this in the first place?"

Answer that, and then think about what they'll need to know next. Simple stuff really. But apparently, easy to forget. Why?

<strong>Nobody will tell you how badly you're screwing up the experience of the first time user.</strong>

New users won't give you feedback. They'll move on elsewhere - maybe to some competing software, or maybe they'll just give up on the whole idea of what they were trying to do anyway. They'll think it's <em>their</em> fault. They must have set up their computer wrong, or they're too stupid to understand this, or this software isn't really for them anyway.

I did experience some "road bumps" with Knockout even though its documentation is great. Fortunately, these only occurred after I was quite far through reading it, so I persisted instead of giving up. Did I just miss something by skimming over it? Maybe - after all, most people skim when reading on the internet, and I'm no exception. Maybe I'd just failed to grasp something which was never explicitly stated, and that functionality could have worked in a number of ways.

Having solved my issue, nobody is ever going to get to hear about what it was, or how I solved it. Other users may have the same problem, and will have to figure it out themselves too. The maintainer of the documentation will never know - there is no channel for me to say "I didn't understand A, until I realised B". There will be no bug report for an issue which may be unique to me and my brain.