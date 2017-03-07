---
layout: post
title: >
    Preventing your software from descending into an abyss of complexity
permalink: /2013/06/25/avoiding-complexity
---
Nice article by Kris Gale on the <a href="http://firstround.com/article/The-one-cost-engineers-and-product-managers-dont-consider">hidden costs of complexity</a> in software:
<blockquote>Among the most dangerously unconsidered costs is what I've been calling complexity cost. Complexity cost is the debt you accrue by complicating features or technology in order to solve problems. An application that does twenty things is more difficult to refactor than an application that does one thing, so changes to its code will take longer.</blockquote>
I used to work on a huge financial software product, written in VB6. Legend had it that this was the largest VB6 program ever built - hundreds of different components. And it was painfully slow to work on. The whole application desperately needed refactoring, yet despite there being a team of 20 developers working on it, development had basically completely ground to a halt. We were all <em>busy</em>, of course - plenty of bug fixes and minor feature requests - but it never felt that the application was noticeably getting better.

There had been an attempt to move the application into the world of .NET, but all that had achieved was creating a hybrid VB6 and C# application that added yet more layers of code. Nothing was ever removed, or stripped back, or simplified - just more and more code added to the pile.

<span style="line-height:1.5;">It meant that it took a long time to add any new functionality, as you had to dig through all of the layers, and inevitably changing anything would cause something to break, often in a subtle way in a completely different part of the application.</span>

I used to enjoy coming home from work and hacking on <a href="http://quest.codeplex.com">Quest</a> for a few hours, because it felt like I had suddenly become 1000x more productive, and could add new features and fix bugs almost scarily quickly.

Now that Quest is (for the moment) my full-time job, and with its codebase having grown quite considerably over the years, I have to be careful not to bring the same problems upon myself. All software tends to stagnate over time - I'm reasonably happy with how my own architecture is holding up, but even then I often find I'm slowed down by having to ensure that it always remains compatible with games created for older versions, and that any changes I make to how it works apply across both the desktop and web editions.

In some ways, it would be nice to strip things back a bit - perhaps making it a web-only product, instead of there being a Windows desktop version too. The existence of the desktop version seems a bit "legacy" now, but there still a genuine need for it - schools don't yet always have reliable or fast internet connections for example.

The challenge, then, is to ensure that any complexity that exists is there for a good reason, and to keep an eye open for where things can be simplified. It's very easy to ask "how can this software do more?" - perhaps we should also sometimes ask "how can this software do less?"