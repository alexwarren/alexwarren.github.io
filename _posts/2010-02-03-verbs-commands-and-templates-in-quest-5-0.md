---
layout: post
title: >
    Verbs, Commands and Templates in Quest 5.0
permalink: /2010/02/03/verbs-commands-and-templates-in-quest-5-0/
---
<b>Note: this information is now out of date. Please see <a href="http://quest5.net/index.php?title=Verbs,_commands_and_templates">the updated article on the Quest 5 wiki</a></b>

Quest 5.0 currently follows relatively similar principles to previous versions when it comes to processing player input. I say "currently" as this may change over the course of the technical previews and beta versions, and I say "relatively" as although based on the "old" system, there is a lot more flexibility and power in the new way of doing things. In a nutshell, we retain the concepts of <strong>verbs</strong> and <strong>commands</strong>.

Here is a simple command:
<pre>&lt;command command="test"&gt;
  msg ("Hello")
&lt;/command&gt;</pre>
This allows the user to type "test", and in response prints "Hello". So far, very similar to Quest 4.

Verbs let you add "doing" words, to let players interact with objects. For example:
<pre>&lt;verb command="eat"&gt;You cannot eat that.&lt;/verb&gt;

</pre>
This would let the player type "eat crisps", and provide a sensible response for when the player tries to eat other objects in the game.

<strong>Templates</strong>

Core.aslx defines the behaviour for standard verbs such as "look at", "speak to" and so on, but the actual text for the verbs themselves comes from the language library (English.aslx). To have the behaviour in one place but the verb itself in another, we have templates, which look like this in English.aslx:
<pre>&lt;template name="eat"&gt;eat&lt;/template&gt;
&lt;template name="cannot_eat"&gt;You cannot eat that.&lt;/template&gt;</pre>
A French version might look like:
<pre>&lt;template name="eat"&gt;mangez&lt;/template&gt;
&lt;template name="cannot_eat"&gt;Vous ne pouvez pas manger ça.&lt;/template&gt;</pre>
We use square brackets in Core.aslx to dynamically replace text with the template. So Core.aslx might have a line like this to define the verb, which will behave in exactly the same way as the verb in the above example:
<pre>&lt;verb command="[eat]"&gt;[cannot_eat]&lt;/verb&gt;</pre>
As well as using square brackets, for &lt;command&gt; tags you can use command templates. These let you specify multiple ways of expressing the same command, which each resolve to the same template. For example, English.aslx might define an "inventory" command like this:
<pre>&lt;commandtemplate name="inventory"&gt;i&lt;/commandtemplate&gt;
&lt;commandtemplate name="inventory"&gt;inv&lt;/commandtemplate&gt;
&lt;commandtemplate name="inventory"&gt;inventory&lt;/commandtemplate&gt;</pre>
That way, "i", "inv" and "inventory" all resolve to the same template "inventory", and Core.aslx can define the behaviour of the command like this:
<pre>&lt;command template="inventory"&gt; ...</pre>
<strong>Matching objects in commands</strong>

For more complicated commands, such as "put apple on table", you can match objects within a command. Quest 5 lets you use regular expressions for this:
<pre>&lt;commandtemplate name="put"&gt;&lt;![CDATA[
  put (?&lt;object1&gt;.*) (on|in) (?&lt;object2&gt;.*)
]]&gt;&lt;/commandtemplate&gt;</pre>
This may look slightly frightening at first glance, but it's pretty simple underneath the scary syntax. The "&lt;![CDATA[" section is there because we need to use "&lt;" and "&gt;" characters for the named groups in the regular expression, but we will have an invalid XML file if we don't use a CDATA section.

For any named group with a name starting with "object", Quest tries to match it to an object in the current visible scope (e.g. the objects in the current room, plus the objects in the inventory - I'll be discussing scopes in more detail in a future post). You can also have named groups starting with "exit" to match available exits.

When the script for the command runs, local variables "object1" and "object2" are set to the objects specified in the command, so you can access their properties directly using "object1.parent" etc.

It may be the case that this mechanism is refined as we go through the development process, as regular expressions are probably overkill. It might be nice to simplify the named group syntax so that you can write "put #object1# (on|in) #object2#" in a similar way to Quest 4.x.

<strong>Dynamic Templates</strong>

Templates are used for all the standard output from Core.aslx. This includes the standard error messages, such as "I don't understand your command".

A <em>dynamic</em> template is a template that can call functions and read properties. This is useful for dynamic responses such as when the player tries to take an untakeable object. Usually, a response of "You can't take it" is sufficient, but what if the object is a female character? Dynamic templates to the rescue - they are essentially functions that return a string value, for example:
<pre>&lt;dynamictemplate name="TakeUnsuccessful"&gt;
  "You can't take " + object.article + "."
&lt;/dynamictemplate&gt;</pre>
A female character should have their "article" property set to "her", so this will print "You can't take her."

To print this from a script, call the DynamicTemplate function, which takes two parameters:
<pre>msg (DynamicTemplate("TakeUnsuccessful", object))</pre>

<b>Note: this information is now out of date. Please see <a href="http://quest5.net/index.php?title=Verbs,_commands_and_templates">the updated article on the Quest 5 wiki</a></b>