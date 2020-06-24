---
layout: post
title: >
    Quest 5.4 Beta is out now
permalink: /2013/02/28/quest-5-4-beta-is-out-now/
source: textadventures
sourceUrl: http://blog.textadventures.co.uk/2013/02/28/quest-5-4-beta-is-out-now/
tag: [Quest 5]
---
Quest 5.4 is now in beta. You can download the Windows version from the <a href="http://www.textadventures.co.uk/quest/download/">Quest download page</a>. <del>The web version will be ready within the next few days</del>. <strong>Update 5th March</strong>: Quest 5.4 is also now live <a href="http://www.textadventures.co.uk/create/">on the web version too</a>!

Here's a quick overview of what's new:
<ul>
	<li>the new <a title="Quest 5.4 Text Processor – easier adaptive text and links" href="/2013/02/27/quest-5-4-text-processor-easier-adaptive-text-and-links/">text processor</a> makes it much easier to create dynamic text and links</li>
	<li>gamebooks <a title="Bringing more power to gamebook mode in Quest 5.4" href="/2013/02/27/bringing-more-power-to-gamebook-mode-in-quest-5-4/">can now use scripts</a></li>
	<li>the script editor now <a title="Quest 5.4 Script Editor – showing you teh codez" href="/2013/02/25/quest-5-4-script-editor-showing-you-teh-codez/">has a code view</a></li>
	<li><span style="line-height:14px;">menus are now shown <a title="Slicker hyperlinks in Quest 5.4" href="/2013/02/28/slicker-hyperlinks-in-quest-5-4/">within the game text</a></span></li>
	<li><span style="line-height:14px;">object and exit hyperlinks <a title="Slicker hyperlinks in Quest 5.4" href="/2013/02/28/slicker-hyperlinks-in-quest-5-4/">activate and deactivate</a> according to what's in the current visible scope</span></li>
	<li>list and dictionary attribute types can now hold any type of attribute value, so you can now create lists of lists, dictionaries of dictionaries, and all kinds of combinations</li>
	<li>there's a simpler syntax for calling JavaScript within your ASL - instead of using the RunScript request, you can now use a more natural-looking syntax with "JS." followed by your function call. For example, JS.alert("Hello world")</li>
	<li>new Portuguese (Brazilian) translation, contributed by Ramon Dellaqia</li>
	<li>new Romanian translation, contributed by Catalin Catz</li>
	<li>option to speak all text via SAPI</li>
	<li>when adding a duplicate object name, instead of giving you an error message, a unique object name is generated and the name you entered is used as its alias - so it's now easier to add multiple objects that appear to have the same name.</li>
</ul>
If you're using libraries created for Quest 5.3 and earlier, please note that some XML attribute names have changed - please see the <a href="http://quest5.net/wiki/Upgrade_Notes#Upgrading_from_Quest_5.3_to_Quest_5.4">Upgrade Notes</a> on the wiki for details. (Game files loaded in the editor will be automatically upgraded to use the new 5.4 attribute names when they are saved, so this shouldn't cause a problem if you're only using the standard libraries.)

Please try out the new version and let me know if anything breaks!