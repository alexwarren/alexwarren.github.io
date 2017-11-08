---
layout: post
title: >
    Types in Quest 5.0
permalink: /2010/02/18/types-in-quest-5-0/
source: textadventures
sourceUrl: http://blog.textadventures.co.uk/2010/02/18/types-in-quest-5-0/
---
<p>"Types" let you share sets of properties between objects. They work in the same way as Quest 4.x, except slightly more efficiently in that instead of copying the properties to the object, the object just references the underlying the type if it doesn't have its own override for a property.</p>

<p>You can view all the properties of an object using the Debugger, which is accessed via the Tools menu. Properties from an inherited type are shown in grey.</p>

<img src="/images/debugger.png">

<p>Types are defined using a &lt;type&gt; element, and properties are defined in the same way as for an object. Objects and types can both inherit from other types using an &lt;inherit&gt; tag.</p>

<pre>
  &lt;type name="food"&gt;
    &lt;health type="int"&gt;0&lt;/health&gt;
    &lt;eat&gt;It looks tasty, but you're not hungry right now.&lt;/eat&gt;
  &lt;/type&gt;

  &lt;type name="fruit"&gt;
    &lt;inherit name="food"/&gt;
    &lt;health&gt;10&lt;/health&gt;
  &lt;/type&gt;
</pre>

<p><b>Default behaviour</b></p>

<p>If the ASLX defines a type called "default", then it is applied to all objects - there is no need to specifically inherit from this type. Core.aslx uses this to define the default behaviour for objects:</p>

<ul>
<li>The displayverbs and inventoryverbs properties are defaulted to give the standard buttons on the panes on the right-hand side of the Quest screen ("Look at", "Take" and "Speak to" for the objects list, and "Look at", "Use" and "Drop" for the inventory list)</li>
<li>All objects are droppable by default</li>
<li>The neutral gender and article ("it") are set</li>
<li>Default container properties are set - by default the object is not a container, cannot be opened or closed, etc. This is just for convenience really - if we didn't set these in the default type, then properties such as "isopen" would default to <i>null</i> instead of <i>false</i>, which would make the container logic messier. (An enhancement might be to add special logic so that in an expression "null=false" would be true, but I'm not sure how good an idea this would be - I'm open to feedback on this)</li>