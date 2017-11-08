---
layout: post
title: >
    Expressions in Quest 5.0
permalink: /2010/02/16/expressions-in-quest-5-0/
source: textadventures
sourceUrl: http://blog.textadventures.co.uk/2010/02/16/expressions-in-quest-5-0/
---
<p>Quest 5.0 handles expressions throughout all script commands. Whereas in previous versions, things like string variables had to be denoted using special characters, in Quest 5.0 you can use expressions everywhere, just as you can in ordinary programming languages.</p>

<p>Of course, many games will only ever need very simple expressions, and the visual editor will mean that many game authors may never need to write one directly. But, with Quest 5.0, the full power of expressions is available everywhere if you need it.</p>

<p>This means no more special characters are required to denote variables and functions, and also the "if" command gets the full power of expressions - you can use nested expressions with "and" and "or", and compare expressions directly.</p>

<p>Here are some example script commands containing expressions:</p>

<pre>
foreach (obj, GetObjectsInScope("Visible")) {
  msg ("You can see: " + obj.name)
}

if ((a and b) or (c and d) or (somenumber * 3 &gt; somethingelse)) { .... }

foreach (obj, somelist + anotherlist + SomeFunctionReturningAList(blah)) {
  ....
}

MyCustomFunction(a, b, c+d)

player.parent = GetRandomRoom(GetNearbyRooms(player.parent))

someobject.take =&gt; {
  msg ("Blah blah")
  someobject.counter = someobject.counter + someotherobject.someproperty
}
</pre>

<p>Quest 5.0 also supports local variables. This means you can reuse the same simple variable name inside different functions, if you don't need to access that value outside the function. You don't need to declare variables in advance - you can just use them by setting them.</p>

<p>Global variables are now just properties of the "game" object, which means the entire state of the game is always defined entirely by object properties.</p>

