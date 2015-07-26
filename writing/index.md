---
layout: index
title: Writing
---

# Writing

<!-- {% include article.md url="" title="" date="2011-01-01" excerpt="" %} -->

## Text Adventures Blog

{% include article.md url="http://blog.textadventures.co.uk/2014/04/10/how-am-i-doing-the-quest-and-textadventures-co-uk-annual-review-201314/" title="How am I doing? The Quest and textadventures.co.uk Annual Review 2013/14" date="2014-04-10" excerpt="I’ve done an “annual review” at around this time of year for the last few years, so it feels like a good idea to do it again, one last time." %}

{% include article.md url="http://blog.textadventures.co.uk/2013/09/30/notes-from-publish-2013-new-adventures-in-innovation/" title="Notes from Publish! 2013 – New adventures in innovation" date="2013-09-30" excerpt="I went to Publish! 2013, a conference looking at innovations in publishing. Here are a few notes and thoughts from the day." %}

{% include article.md url="http://blog.textadventures.co.uk/2013/06/03/the-future-of-digital-stories-thoughts-from-the-futurebook-innovation-workshop-2013/" title="The future of digital stories – thoughts from the Futurebook Innovation Workshop 2013" date="2013-06-03" excerpt="I attended the Futurebook Innovation Workshop – a very interesting afternoon of presentations and workshops on what I will call \"digital storytelling\" (although one of the recurring themes was that nobody has yet got a clear idea of what to call this, er, stuff)." %}

{% include article.md url="http://blog.textadventures.co.uk/2013/05/07/how-am-i-doing-the-quest-annual-review-201213/" title="How am I doing? The Quest \"Annual Review\" 2012/13" date="2013-05-07" excerpt="In April 2012 I marked a year of working on Quest full-time by conducting my own \"Annual Review\". Well, er, 13 months have elapsed since then, which makes it the perfect time to do it all again." %}

{% include article.md url="http://blog.textadventures.co.uk/2013/01/29/text-adventure-games-are-still-new/" title="Text adventure games are still new" date="2013-01-29" excerpt="Every couple of weeks, it seems, another games journalist writes an article about how they’ve rediscovered the long lost art of the text adventure game. After a few minutes looking through Wikipedia, they write an article which will inevitably talk about green screens, clattering keyboards, and grues. Then they will talk about a somehow thriving yet hidden \"scene\" of people who are still creating and sharing these games like some kind of long-forgotten tribe that had been cut off from the rest of the civilised world." %}

{% include article.md url="http://blog.textadventures.co.uk/2012/12/19/thoughts-on-interactive-storytelling-and-the-hobbit/" title="Thoughts on interactive storytelling and The Hobbit" date="2012-12-19" excerpt="I’ve been thinking a lot about the text adventure format recently, about what kinds of experiments can be done, and what kind of story I could tell using my own software – it is a source of slight shame to me that I’ve been working on Quest for over 14 years now, and yet never released a game using it! This is something I hope to address in the near future. There was much food for thought for me as I watched the other talks at AdventureX, and I’ve found myself with a renewed energy to try and finally get together a game of my own." %}

### A year of full-time Questing: [Part 1](http://blog.textadventures.co.uk/2012/04/03/a-year-of-full-time-questing-part-1/), [Part 2](http://blog.textadventures.co.uk/2012/04/04/a-year-of-full-time-questing-part-2-the-appraisal/)

<div class="date">
	April 2012
</div>

In March 2011, I left my job to work on Quest full-time. One of the nice things about not working for an employer has been a complete absence of such time-wasting exercises as conducting an annual performance review. However, there is something to be said for periodically taking stock, and seeing how far and how quickly things have progressed. So, here’s a review of one year of working on Quest.

Read [part 1](http://blog.textadventures.co.uk/2012/04/03/a-year-of-full-time-questing-part-1/), [part 2](http://blog.textadventures.co.uk/2012/04/04/a-year-of-full-time-questing-part-2-the-appraisal/)...

{% include article.md url="http://blog.textadventures.co.uk/2011/07/27/teaching-with-text-adventures/" title="Teaching with text adventures" date="2011-07-27" excerpt="Ways of using Quest in the classroom." %}

## Gamasutra Blog

{% include article.md url="http://www.gamasutra.com/blogs/AlexWarren/20111205/90742/Redesigning_text_adventures_for_iPhone_and_Android.php" title="Redesigning text adventures for iPhone and Android" date="2011-12-05" excerpt="A new type of text adventure is now available on the App Store and Android Market. In this post I talk about how \"The Things That Go Bump In The Night\" was developed, with a new user interface specifically designed for smartphones." %}

{% include article.md url="http://www.gamasutra.com/blogs/AlexWarren/20110919/90241/Educating_the_next_generation_of_software_developers.php" title="Educating the next generation of software developers" date="2011-09-19" excerpt="We are going to need vastly more programmers over the coming decades. Where are they going to come from? How can we get children started programming at an early age? I have some ideas." %}

{% include article.md url="http://www.gamasutra.com/blogs/AlexWarren/20110905/90126/Reinventing_text_adventure_games_for_the_modern_web.php" title="Reinventing text adventure games for the modern web" date="2011-09-05" excerpt="The time is right for this forgotten genre of game to be rediscovered." %}

## Other posts

{% for post in site.posts %}
### <a href="{{ post.url }}">{{ post.title }}</a></h2>

<div class="date">
{{ post.date | date: "%-d %B %Y" }}
</div>

{{ post.excerpt }}

<a href="{{ post.url }}">Read more...</a>
{% endfor %}