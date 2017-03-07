---
layout: post
title: >
    More advanced ways with verbs
permalink: /2006/11/06/more-advanced-ways-with-verbs/
---
I wrote the other day <a href="http://www.axeuk.com/blog/2006/11/02/verbs-an-easier-way-to-add-commands-in-quest-40/">about verbs</a>, and how they provide you with a much easier way of creating commands in Quest 4.0. I thought I would tell you a little bit more about how they work.

<strong>How an object's verbs are stored</strong>

Basically verbs provide an easier way of doing what can be done in Quest 3.x with code like this:

<pre>
command &lt;eat #@object&gt; {
    if action &lt;#object#; eat&gt; then doaction &lt;#object#; eat&gt;
    else {
        if property &lt;#object#; eat&gt; then msg &lt;#(object):eat#&gt;
        else msg &lt;You can't eat that&gt;
    }
}
</pre>

You will notice if you add an "eat" verb to an object in QDK 4.0 and then specify a script, that script will be stored as the object's "eat" <strong>action</strong>. This means you can call it or check for its existence elsewhere within your game script in the same way as you call or check for an action. Similarly, if you specify the "Print a message" option for your object's verb in QDK, the message gets stored as a <strong>property </strong>of that object.

<strong>The default script</strong>

In the verb definition (i.e. under "Verbs" on the tree in QDK, or as a "verb" tag in ASL), the script specified is the <em>default</em> script, i.e. it runs if the object the player refers to does <em>not</em> have that verb defined. QDK defaults to a message saying "You can't eat that" (or whatever the verb is), but you can of course customise this to whatever you want.

If you want to always run a particular script, whether or not the object has that verb defined, you should use good old-fashioned <strong>commands</strong> instead of verbs.

<strong>Synonyms</strong>

One final tip: you can specify synonyms of your verb by listing them within the verb definition, separating them with semicolons. For example "eat; consume; munch". Quest will only look in the object for the first property or action specified, so in this example, whether the player types "eat apple", "consume apple" or "munch apple", Quest will only look for the "eat" action or property. If you want to use a differently named action or property instead of the first one in a list, add it at the end after a colon. For example "eat; consume; munch :eatproc" will make Quest look for an "eatproc" action or property instead.