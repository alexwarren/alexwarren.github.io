---
layout: project
title: Xlogan
startyear: 2003
endyear: 2010
permalink: /projects/xlogan
---

![](/images/projects/screenshots/xlogan1.png)
![](/images/projects/screenshots/xlogan2.png)
![](/images/projects/screenshots/xlogan3.png)
![](/images/projects/screenshots/xlogan4.png)
![](/images/projects/screenshots/xlogan5.png)
![](/images/projects/screenshots/xlogan6.png)

<http://media.textadventures.co.uk/downloads/archive/xloganpro202.exe>

A full release history from Xlogan's `versions.txt`:

    18/JAN/2010 - XLOGAN 2.0.2
        - Now recognises Firefox 3.5, Windows 7, Chrome and Android on the
        Browsers tab, and recognises Bing on the Search tab.
        - Improved performance when decompressing GZ log files.
        - Added "Visit URL" button to Errors page.
        - Fixed bugs:
            - "Requested File" list wasn't saving recently used items.

    11/SEP/2008 - XLOGAN 2.01
        - Now recognises Firefox 3, IE8 and iPhone.
        - Added "Clear" button to Filters screen. Filters are now cleared when
        the Reset link is clicked.
        - Fixed bugs:
            - no report would be shown if the log file lacked browser data.
            - After viewing a visitor report, the file list would not be
            cleared when another visitor report was loaded.
            - If the first line of a log was invalid, an error would occur
            when trying to convert time zone.
            - Xlogan would fail to load if there was a blank line at the
            end of COUNTRY.DAT
            - The month name "Mai" was not recognised if it appeared in a
            log file, and would cause Xlogan to give a run-time error.

    30/MAR/2007 - XLOGAN 2.0
        - Added individual Visitor Reports - you can now view the full browsing
        trail for each visitor.
        - Xlogan now remembers how columns are sorted, and applies this sorting
        the next time a log file is opened.
        - Referrer and search engine/search term statistics now show total
        number of hits where an HTTP 200 response was given, rather than the
        total number of hits as this was inaccurate if a download manager was
        used.
        - The Files report no longer shows hits from spiders.
        - Search engine hits from Google AdWords are now listed separately, as
        long as "gclid" is in the requested URL.
        - Added "Reset" button.
        - Fixed bugs:
            - When selecting multiple log files using the "Open File"
            button, if the total length of filenames exceeded 256
            characters, no files would be added.
        - Xlogan Pro features:
            - Added Conversions Report
            - Added save/load XML Report
            - Added compare report

    06/MAR/2007 - XLOGAN 2.0 BETA 2
        - Visitors tab now shows Entry and Exit pages.
        - Each site profile can now have multiple domains.
        - For log files that cover multiple sites, you can now show the domain
        in the Files list.
        - Added option to remove session IDs from URLs - useful for phpBB etc.
        - When you select an item from a list in the Report, the whole line is
        now highlighted.
        - Dates are now formatted according to local settings.
        - The Date and Hour tables and graphs now show statistics for unique
        IP's (visitors) instead of hits.
        - Added option to convert times to local time.
        - Now recognises different Firefox versions, Safari, Windows XP Media
        Center Edition and Mac OS X in the Browsers report.
        - New Errors report shows you HTTP 404 "Not Found", HTTP 500 "Internal
        Server Error" and other error messages seen by your website visitors.
        - Showing the Raw Log file is now turned off by default, as this makes
        processing the log file significantly faster.
        - Various performance improvements.
        - Fixed bugs:
            - Spiders were being included in the Visitors report.
            - Editing a site profile would edit the wrong profile.
            - Some log files would cause a run-time error when Regional
            Settings were set to German.
            - Bandwidth used is now displayed in MB instead of bytes. This
            avoids problems where Xlogan wouldn't display a bandwidth
            value over 2.1GB.
            - Fixed some display issues under Large Fonts.

    08/JAN/2007 - XLOGAN 2.0 BETA 1A
        - Changed expiry date of beta version.
        - Now recognises IE7 and Windows Vista.

    04/OCT/2005 - XLOGAN 2.0 BETA 1
            - Interface changes
            - Site profiles
            - Can now open multiple log files
            - Can now select multiple files from FTP to download at once
            - Xlogan now carries on trying to process the file if it encounters an
            invalid log entry.
            - New Visitors report (what was previously called "Visitors" is now the
            Summary)
            - More advanced filtering options
            - Ability to rename downloaded files according to site profile and date
            - Many other changes and tweaks.

    13/SEP/2003 - XLOGAN 1.0
            - The Referred to/by window now remembers its size, position and column
            widths.
            - If a GET request in a log file doesn't have a closing quote, Xlogan no
            longer exits with a run-time error.
            - Added donation links.

    30/JUN/2003 - XLOGAN 1.0 BETA 5
            - On the File list, Xlogan now shows separate statistics for reloads
            (HTTP 304) and resumes (HTTP 206).
            - Added splash screen.
            - Fixed a Windows XP issue where sometimes Xlogan wouldn't load.
            - Combined "Referred to..." and "Referred by..." buttons into one
            "Referred by/to..." button. The new window shows both lists at once,
            with a "Visit URL" button.
            - You can now double-click a URL or entry in the Search Keywords list to
            visit the URL.
            - A proper Help file now replaces README.HTM

    07/JUN/2003 - XLOGAN 1.0 BETA 4
            - Xlogan now stores a list of recently-used files, filters and FTP
            servers.
            - The site domain is no longer an option - it is instead specified on
            the Open window, and has a recently-used list with it. This makes it
            easier for you to use Xlogan with various domain names.
            - The Search Terms tab has been renamed Search Engines, and can now also
            show you totals by search engine. (These may not add up to the same
            values as for keywords, as keywords excludes directory browsing for
            example, where keywords are not specified in the URL)
            - The lists of recognised Search Engines and Spiders can now be edited.
            - Fixed bug causing an overflow error if an empty log file was loaded.
            - Various other tweaks.

    02/JUN/2003 - XLOGAN 1.0 BETA 3
            - Xlogan now tells you which line caused the problem if it deems a log
            file to be invalid.
            - Added support for compressed .gz log files.
            - Added a built-in FTP browser to allow you to download log files from
            within Xlogan.
            - Some interface tweaks.
            - Added statistics showing visitors by hour, and added graph display of
            both date and hour statistics.
            - Xlogan now remembers the window size and position, plus the widths of
            all the column headings.
            - Xlogan now supports Common Log Format (CLF) in addition to NCSA
            extended/combined log format (referred to as Apache combined log file
            format. CLF is identical apart from the omission of Referrer and User
            Agent data).

    31/MAY/2003 - XLOGAN 1.0 BETA 2
            - Added Search Terms report.
            - Added support for log files using DNS-resolved IP addresses.
            - Now accounts for spiders other than just Googlebot, and shows spiders
            in the Browers report.
            - Various other tweaks and fixes.

    28/MAY/2003 - XLOGAN 1.0 BETA 1
            - First public beta release.