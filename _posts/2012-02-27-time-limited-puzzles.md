---
layout: post
title: >
    Time-limited puzzles
permalink: /2012/02/27/time-limited-puzzles/
---
When I was at Perins School <a title="Text adventures in the classroom – Quest day at Perins School" href="http://www.textadventures.co.uk/blog/2012/02/24/text-adventures-in-the-classroom-quest-day-at-perins-school/">last week</a>, I was asked about puzzles with a time limit. For example, the player opens a cupboard, inside which is a hungry alien. How do you give the player 10 seconds to kill the alien, before the alien kills them instead?

This is pretty straightforward to handle, because in Quest you can run scripts after a certain number of seconds. Here's a quick how-to:

First, add the cupboard and alien objects. The alien should be inside the cupboard. For the cupboard, go to the Container tab. Choose "Container" from the type list, and untick the "Is open" box so that the cupboard is closed when the game begins.

<img class="aligncenter size-full wp-image-1153" title="Cupboard container" src="http://textadventuresblog.files.wordpress.com/2012/02/1.png" alt="" width="722" height="526" />

Now we want to run a script when the player opens the object. We'll tell the player they've surprised the sleeping (and hungry) alien, then give them 10 seconds to get rid of the alien before it kills them. To do this, scroll down to "After opening the object", and add a "Print a message" script. Next, add another script - from the Timers section, choose "Run a script after a number of seconds".

<img class="aligncenter size-full wp-image-1154" title="Run a script after a number of seconds" src="http://textadventuresblog.files.wordpress.com/2012/02/2.png" alt="" width="722" height="616" />

You can now specify how many seconds to wait before something else happens. In this case, 10 seconds. After 10 seconds, we want to see if the "alien" object is still visible. If so, print a message and kill the player. If not, we don't need to do anything.

So, all we need to do is add an "If" inside the "After 10 seconds" script, as shown below:

<img class="aligncenter size-full wp-image-1155" title="Kill player after 10 seconds" src="http://textadventuresblog.files.wordpress.com/2012/02/3.png" alt="" width="724" height="616" />

Finally, we just need to implement a way to solve the puzzle. Let's add a flame thrower object. When the player uses the flame thrower on the alien, the alien bursts into flames.

Add an object called "flame thrower", then on the "Use/Give" tab scroll down to "Use this on (other object)". Select "Handle objects individually", add "alien", and then edit the script. Add a "print a message" command to say something to the player, then add a "Remove object" command to remove the alien from play.

The resulting script looks like this:

<img class="aligncenter size-full wp-image-1156" title="Use flame thrower on alien" src="http://textadventuresblog.files.wordpress.com/2012/02/4.png" alt="" width="724" height="616" />

Now after the player opens the cupboard, if they use the flame thrower on the alien, the alien will no longer be visible in the room. This means that after the 10 seconds have elapsed, nothing will happen. However, if the player has not used the flame thrower, the alien will still be visible, in which case the alien enjoys a tasty meal.

&nbsp;