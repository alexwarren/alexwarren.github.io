---
layout: project
title: Quest (versions 1 to 4)
startyear: 1998
endyear: 2010
permalink: /projects/quest-versions-1-to-4
logo: quest.png
techtags:
    - VB6
description: A text adventure game system for Windows
---

History of Quest:

- [Part 1 (Quest is 15)](/2013/11/07/quest-is-15)
- [Part 2 (1999-2000)](/2013/11/26/15-years-of-quest-part-2-1999-2000)
- [Part 3 (2000-2004 - Experimenting with Multi-Player)](/2013/11/27/15-years-of-quest-part-3-2000-2004-experimenting-with-multi-player)

![](/images/projects/screenshots/quest1.png)
![](/images/projects/screenshots/quest2.png)
![](/images/projects/screenshots/quest3.png)
![](/images/projects/screenshots/quest4.png)
![](/images/projects/screenshots/quest5.png)
![](/images/projects/screenshots/quest6.png)
![](/images/projects/screenshots/quest7.png)
![](/images/projects/screenshots/quest8.png)

<http://media.textadventures.co.uk/downloads/archive/quest415.exe>

A full release history from Quest's `versions.txt`:

    10/MAY/2011 - QUEST 4.1.5
        - Improved performance of loading QSG files.
        - Fixed bugs:
            - Quest was unnecessarily checking for matching pairs of
            brackets within text blocks.

    03/JAN/2011 - QUEST 4.1.4
        - Quest is now free, and there is no longer a separate Quest Pro
        product. Quest now includes all of the additional features that were
        previously only part of Quest Pro, including the Quest Compiler,
        Quest Packager and unrestricted QDK.

    06/DEC/2010 - QUEST 4.1.3
        - Improved performance of extracting resources from CAS files.
        - Fixed bugs:
            - In games written for Quest 3.1 and earlier, object "look"
            scripts would not run.
            - When extracting a resource from a CAS file, only the first
            attempt would be successful.

    17/JAN/2010 - QUEST 4.1.2
        - Fixed bugs:
            - Slow performance when running procedures in large games.
            - A run-time error could occur when typing "put on" if that
            command did not exist.
            - Locked exits weren't working in packaged games.
            - Some container-related messages were not present in the LDF
            file.

    05/SEP/2009 - QUEST 4.1.1
        - Fixed bugs:
            - Some expressions were being calculated incorrectly. Quest
            would always perform addition before subtraction, leading
            to erroneous results. It now performs division and
            multiplication first, left-to-right, then addition and
            subtraction, left-to-right.
            - Dynamically created directional exits without scripts would
            cause a run-time error.
            - Entering a dynamically created room would cause a run-time
            error.
            - If an object's parent tag did not match the exact case of the
            parent object, it wouldn't be listed in the contents.

    19/JUL/2009 - QUEST 4.1
        - Object prefixes and suffixes are now used when disambiguating
        objects, so if object apple has a prefix of "an", the player can type
        "look at an apple" or "x an app" etc.
        - New quest.doorways string variable replaces the old quest.doorways.*
        variable, with a complete formatted list of exits from the current
        room.
        - When disambiguating an object name, extra spaces are now ignored, so
        e.g. "look at    banana" now works properly.
        - Significantly improved performance when loading and saving QSG files.
        - A new variable #quest.error.object# is now populated when
        disambiguation of an object fails. This could be used in a "badthing"
        error message to display which object name failed to be resolved.
        - New "alreadytaken" error displays "You already have that" if the
        player tries to take an object which they already have in their
        inventory (previously Quest displayed a misleading badthing "I can't
        see that here").
        - Quest could previously crash if there was a loop of object parents,
        e.g. if A's parent was B, and B's parent was A. This no longer
        occurs, and Quest now logs an error message if a loop is detected in
        an object parent hierarchy.
        - Fixed bugs:
            - $lengthof(...)$ function was returning an incorrect length
            for strings that started on ended with space characters.
            - Comment lines were incorrectly being checked for opening
            and closing brackets and variable characters.
            - If the last object in a room had a prefix or suffix
            containing a comma, the word "and" would be added in the
            wrong place in the object list.
            - Brackets in strings passed to functions would truncate the
            list of parameters. Quest now checks for the closing bracket
            nearest the end $ character.
            - Typing a command followed by a space would bring up a
            disambiguation menu of all objects.
            - Resources in CAS files using nested folders didn't work.
            - Putting something in a container implicitly makes that
            container "seen", for games with ASL version 410 and later.
            Previously, if the player put something in a container that
            they had not looked at, they wouldn't be able to look at that
            item until they looked at the parent, as the parent was not
            marked as "seen".

    26/APR/2009 - QUEST 4.1 BETA
        - ASL version 410
        - Quest Packager is now included with Quest Pro, allowing you to create
        a setup EXE file for your game, so users can install it just like any
        Windows application.
        - New lockable exits:
            - To create an exit that is initially locked, use the "locked"
            keyword e.g.:
                north locked <kitchen>
                place locked <bakery>
            - To specify a message to print when the player tries to use a
            locked exit, specify it as a second parameter e.g.:
                north locked <kitchen; The door is locked.>
            - New custom error tag "locked" lets you specify the default
            response if the player tries to use a locked exit for which
            no lock message has been specified.
            - New "lock", "unlock" script commands let you lock and unlock
            exits during the game. e.g.:
                lock <kitchen; north>
                unlock <street; bakery>
            - To create a locked exit at runtime you can use e.g.
            "create exit north locked <room1; room2>" - note that this
            syntax is not supported in QDK. In QDK, create the exit as
            usual and then lock it separately via script.
        - Other improvements to exits in ASL version 410:
            - Exits are implemented as objects, so you can check their
            status using the Object Debugger.
            - New $findexit(from; to)$ function returns the object name for
            an exit (it returns a blank string if the exit doesn't
            exist).
            - You can now do "for each exit in game/<room>" to iterate
            through all exit objects.
            - You can now specify a script when using "create exit".
            - You can now destroy directional exits e.g.
            "destroy exit <room1; northeast>"
            - Note that prefixes are no longer supported in place tags.
            Instead Quest takes the prefix from the destination room
            automatically. So whereas before you would have used
            "place <the; supermarket>" to get a description of "You can
            go to the supermarket", now you don't need to - just make
            sure that the supermarket room itself has a prefix of "the".
        - QSG files no longer save redundant property and action information,
        so saving and loading games is now much more efficient.
        - For ASL 410 and later, the "visited" property for a room is now set
        only after the description for the room is printed, so you can print
        a different description if the player has visited the room before.
        - "use" tags in rooms are no longer supported as of ASL 410.
        - New error "defaultwait" lets you specify default prompt for the
        "wait" command.
        - Can now use "for each room in game" to get a list of rooms in the
        game.
        - Removed features:
            - QuestNet Server is no longer part of Quest 4.1.
            - SAPI4 is no longer supported for text-to-speech, only SAPI5 is
            supported.
            - As of ASL 410, the following commands are no longer
            supported. They will continue to be supported for previous
            ASL versions:
                shell
                shellexe
                playmod
                modvolume
        - Fixed bugs:
            - objects overriding actions specified by more than one type
            wouldn't override correctly.
            - objects and rooms created via the "create" command didn't
            pick up the "default" and "defaultroom" types. This has been
            fixed only for ASL 410 and later to preserve backwards
            compatibility.

    25/APR/2009 - QUEST 4.0.5
        - Fixed bugs:
            - fixed various crashes when running using JAWS.
            - when connecting to a QuestNet game with a blank title, Quest
            wouldn't successfully connect to the game.
            - when double-clicking a QSG file in Explorer, if the ASL/CAS
            file was not found and you chose not to find it, quest.exe
            would remain running in the background.
            - The word "and" was hard-coded (for room descriptions "You can
            see ..., ... and ..."). This has now been added to the LDF
            file so it can be translated.
            - Variable names containing capital letters could cause a
            run-time error.
            - If a game contained parameters with no end-of-parameter ">"
            character, no error would be reported.

    29/NOV/2008 - QUEST 4.04
        - Fixed bugs:
            - fixed run-time error displaying collectables in Quest 2.x
            games.
            - a run-time error occurred if a game's default font name was
            invalid.
            - a run-time error could occur if variables were accessed using
            different cases.
            - CAS files with resources which used "define menu" blocks
            wouldn't load correctly.
            - verbs defined with capital letters wouldn't work correctly.
            - an object inside a container which was itself inside a closed
            container could still be taken. The container logic has been
            improved to recurse properly through the parent containers
            of an object before allowing it to be taken, opened, closed,
            added or removed.

    09/FEB/2008 - QUEST 4.03
        - The command entry box now uses the same font and fontsize as the
        game.
        - You can now turn off the player's ability to use abbreviated object
        names, by adding "abbreviations off" to the "define options" block.
        - Quest now writes an error to the ASL log if an internal error occurs
        while running a script command, instead of quitting with an error
        message.
        - Fixed bugs:
            - fixed run-time error when opening some large games.
            - fixed problem where "if" statements of the form "if ... then
            if ... and/or ... then ..." would be processed incorrectly.
            - QCompile wouldn't add a WAV file to a CAS if the playwav
            command did not include the file extension.
            - a run-time error would occur if the "clone" command was used
            in an object's "action" script.

    11/APR/2007 - QUEST 4.02
        - Fixed bugs:
            - object buttons would sometimes appear even when panes were
            turned off or disabled.
            - fixed window resizing issue in Windows Vista.
            - Updated broken bug-fix from Quest 4.01: If an infinite loop
            is created by an "exec" command calling itself, Quest no
            longer fails with a run-time error (stack overflow). Instead
            the loop is halted after 500 nested "exec" calls, before the
            stack overflow error occurs. This avoids a problem with Quest
            halting when the problem occurs.
            - function calls with in-line expressions now work correctly.

    09/MAR/2007 - QUEST 4.01
        - Improved compatibility with JAWS and Window-Eyes screen readers. When
        either of these is detected, all text is spoken through the screen
        reader, instead of SAPI.
        - Fixed bugs:
            - Fixed bug where games for Quest 2.x wouldn't work properly.
            - Fixed problem loading MP3 files from locations other than the
            Quest folder.
            - Fixed run-time error when the Object Debugger was minimised.
            - Fixed run-time error when an invalid array index was
            specified.
            - Fixed bug where specifying the "normal" parameter for the
            "exec" command would still process user-defined commands and
            verbs.
            - If an infinite loop is created by an "exec" command calling
            itself, Quest no longer fails with a run-time error (stack
            overflow). Instead the loop is halted when the stack is full.
            - When loading a game, Quest no longer calls the game start
            room before loading the QSG save data. This was usually not
            noticeable, but caused problems if the start room contained
            a script that prompted for user input, or checked string
            variables etc.
            - Properties and flags set in a start room script were not
            being saved.
            - Embedded CAS resources wouldn't work the second time they
            were called.
            - In v3 (and earlier) games that didn't implement an open,
            close, put, add or remove command, no error message was
            printed when the player used these commands.

    17/JAN/2007 - QUEST 4.0
        - ASL version 400
        - If the JAWS screen reader is detected, Quest will offer you the
        option to turn on "Speak all text". Panes are now disabled if JAWS
        if detected.
        - Fixed bugs:
            - Object Debugger wasn't displaying the "inventory" location.
            - Negative numbers in expressions weren't recognised.
            - Taking or dropping a container wouldn't move contained items
            to the inventory.

    20/DEC/2006 - QUEST 4.0 BETA 3
        - ASL version 392 (pre-release of ASL version 400)
        - For ASL 392 and later, Quest now processes string variables, numeric
        variables, functions etc. within text blocks.
        - Change to behaviour when putting an object in or on another object:
        you must first be carrying the object in order to put it somewhere
        (unless you're using scripts for putting). If the player is not
        carrying an object, but it can be seen in the room, then Quest will
        try to pick the object up first using the "take" command. If this
        succeeds (i.e. if the object ends up in the inventory), it will then
        put the object in/on the container/surface.
        - Similar change to behaviour when taking an object that is inside a
        container - you must first remove the object from that container in
        order to pick it up, unless you're using a script to take the object.
        If the object is takeable by default but inside a container, Quest
        will try to remove the object first using the "remove" command. If
        this succeeds (i.e. the object is no longer inside a container), it
        will then take the object.
        - Dropping an object that is inside a container (in your inventory)
        now automatically tries to remove that object from the container
        first. If the object cannot be removed, dropping fails.
        - When opening an object that has no description, Quest no longer
        prints "Nothing out of the ordinary" underneath "You open it".
        - You can now express colours in RRGGBB format, e.g.
            foreground <FF0000> 	sets the foreground colour to red
        - Commands and Verbs defined by the game now always take precedence
        over any Commands and Verbs defined by a library. (Previously this
        was mostly true, except that a library command would take precedence
        over a game verb).
        - Updated the $getobjectname$ function - when using the "game"
        parameter, you can now optionally add a second parameter "seen". When
        disambiguating, this will go through all objects in the game that
        have been seen by the player. An object is counted as seen if its
        "seen" property is set, or it is in the inventory, or the room it
        is contained in has its "visited" property set.
        - Fixed bugs:
            - Quest was always interpreting "if ( #something# = thing )" as
            a numeric expression, so string comparisons would always
            fail.
            - The "type" script command would apply properties and actions
            from the type to the wrong object. "if type" would fail for
            other types included within the specified type block.
            - Blocks within braces would lose the context of where they
            were running, so function return values couldn't be set
            within a multi-line "if" block, for example.
            - After closing a non-transparent container, objects within it
            were still accessible to "look" until the parent itself was
            looked at.
            - Quest was interpreting blank "list closed" and "list empty"
            tags as scripts for the "list" tag.
            - Setting a "take" property wouldn't update the object's "take"
            behaviour.

    23/NOV/2006 - QUEST 4.0 BETA 2
        - ASL version 391 (pre-release of ASL version 400)
        - Implemented containers:
            - The following tags are implemented: container, surface,
            transparent, opened, parent <object name>,
            open (nothing, text or script), close (nothing, text or
            script),
            add (nothing, text or script)
                - if script is specified, object is in
                #quest.add.object.name#
            remove (nothing, text or script)
                - if script is specified, object is in
                #quest.remove.object.name#
            list (nothing, text or script)
                - if specifying a string, add colon to end to list
                contents. defaults to on.
            list empty (nothing, text or script),
            list closed (nothing, text or script).
            - A property "seen" is added to object once it has been looked
            at.
            - The following commands are implemented: open <object name>,
            close <object name>, add <object name; to object>,
            remove <object name>
            - The following errors are added:
            alreadyopen, alreadyclosed, cantopen, cantclose, defaultopen,
            defaultclose, badput, cantput, defaultput, alreadyput,
            cantremove, defaultremove
        - Implemented "select case", e.g.:
            select case <#number#> {
                case <1> msg <You entered 1.>
                case <2; 3; 4> msg <You entered 2, 3 or 4.>
                case else msg <You entered something else.> }
        - You can now use more complicated expressions within "set numeric"
        and "if". (Previously, "set numeric" only supported very simple
        expressions and "if" didn't allow any)
        - Expressions can now be included in any parameter by surrounding
        it with braces, e.g.:
            msg <2 + 2 = {2+2}>	returns "2 + 2 = 4"
            msg <In 5 years, you will be {% raw %}{%age% + 5}{% endraw %}>
        Use {% raw %}{{ and }}{% endraw %} if you actually want to print a brace character.
        - Added STDVERBS.LIB, which adds default responses to a number of
        common commands.
        - Quest's parser will now accept abbreviated object names, e.g. you
        can look at an object "rhododendron" by typing "x rho".
        - beforesave and onload scripts can now be specified for single-player
        games (these tags were previously only available in QuestNet Server).
        - For ASL versions 391 and higher, the startscript is now no longer run
        when the game has been loaded from a QSG file. Use the new "onload"
        script to run script after loading from a QSG file if you need to.
        - "define options" block can now be in single-player games, accepting
        the following options:
            panes on/off/disabled
            debug on/off	NB: Replaces "nodebug" in "define game" block
        - A "visited" property is now set when the player first goes to each
        room.
        - Implemented transcripts:
            - Type SCRIPT ON to start recording a transcript. All commands
            you type will be output to a file - e.g. mygame.asl will
            output a transcript to mygame.asl.transcript
            - Type SCRIPT OFF to stop recording
            - Type RUN SCRIPT to run the script
        - Object Debugger improvements:
            - window is now resizable
            - you can now add, edit and remove properties at run-time by
            double-clicking the properties box
            - information on timers is displayed, showing you the tick
            value (so you can see when they will fire). You can also
            change the interval and activate or deactivate timers.
            - the Object Debugger now does appear in games with ASL version
            less than 390, but the features allowing you to change the
            game world are disabled.
        - You can now add a menu to Quest using:
            define menu <&My Menu>
                item &text: command	' use & to insert keyboard
                item t&ext: command	'   mnemeonic
                -			' Inserts a separator line
                item te&xt: command
            end define
        When the player clicks a menu item, the specified player command
        is run. Note you can only add one menu.
        - If a default look description is specified (using
        "error <defaultlook; ...>"), that message will also appear as the
        default "examine" text, if one hasn't been specified separately.
        - The "baditem" error is now obsolete - an invalid object in a "take"
        or a user-defined command now generates the "badthing" error.
        - The "baddrop" error is now obsolete - if the player tries to drop
        something but they are not carrying it, the "noitem" error message
        is generated.
        - LDF is re-enabled in this release.
        - Fixed bugs:
            - If Quest was launched from Explorer or QDK and then closed
            while an "enter" command in a game startscript was in effect,
            QUEST.EXE wouldn't be unloaded properly.
            - Fixed bug in QuestNet games where clicking the object "Look",
            "Take" or "Speak" buttons when the list was empty could
            cause a run-time error.
            - Quest now detects recursive synonyms (such as
            "thing = do thing") and won't initialise them, thus avoiding
            an overflow error if they player types them. An error is
            reported to the ASL log when the game is loaded if a
            recursive synonym is detected.
            - Pressing up or down at the start of the game would cause
            a run-time error.
            - Exits created using variables or functions weren't being
            saved correctly.

    31/OCT/2006 - QUEST 4.0 BETA 1
        - ASL version 390 (pre-release of ASL version 400)
            - For ASL versions 390 and higher, an "out" tag pointing to an aliased
            room no longer ignores any prefix specified.
            - LDF errors are now turned off by default - the English text will be
            displayed instead wherever text is undefined. [But note that LDF
            is actually disabled in this beta]
            - Added MP3 support:
                    playmp3 <filename.mp3>  to play
                    playmp3 <>              to stop
            - CAS files can now include other files required by the game such as
            graphics and sound files.
                - extract <filname.ext> command
            - Tweaked interface and included XP manifest so Quest is now XP-ified.
            - Numeric variables are now double-precision floating-point and can
            store numbers from -1.79769313486232E308 to -4.94065645841247E-324
            for negative values and 4.94065645841247E-324 to 1.79769313486232E308
            for positive values.
        - You can now use the up and down arrows to cycle through previously
        entered commands.
        - Improved error reporting when a game can't be loaded due to a
        mismatched number of { braces } or define blocks.
        - Increased internal Quest limits on the number of objects, ASL code
        lines etc. that can appear in a game from 32,767 to around 2 billion.
        - Property Viewer is now called Object Debugger, allowing more powerful
        debug features. You can now jump between rooms, move objects and set
        availability and visibility from this window. Note that this makes
        it all the more important to set "nodebug" in released games! The
        Object Debugger only appears in games with ASL version 390 and
        higher, so it will not appear for older games.
        - By default, pictures are now shown within the main Quest window for
        ASL versions 390 and higher. To show a picture in a popup window as
        with previous versions, use "picture popup" instead.
        - Implemented verbs, an easier way of running custom actions on objects.
        In define game block, use:
            verb <eat; consume: actionname> (script if no action defined)
        Then when the player types "eat thing", the relevant action is run
        (or property printed).
        - Fixed bugs:
            - cloned rooms were not being saved correctly.
            - Quest would exit with a run-time error if you tried to set a
            variable with a number for a name. This could happen if you
            erroneously put % characters around a numeric variable name for
            example.
            - Properties for rooms created or cloned at run-time were not
            being loaded correctly.
            - A line containing "} else {" would cause Quest to crash when
            loading the file.
            - Calling the $instr()$ function with a starting position of 0
            would cause Quest to quit with a run-time error. It now logs
            an error to the ASL Log instead.
            - Help window background colour wasn't being applied for
            custom help text.

    21/NOV/2004 - QUEST 3.53
            - Removed support for server welcome message when connecting to a
            QuestNet Server - it was not very useful and caused problems when
            logins were used.
            - Fixed bug where "hidden" and "invisible" properties couldn't be read
            by "if property" if they were specified in an object definition.
            - Fixed bug causing run-time error if invalid values were used in the
            $left(...)$, $right(...)$ and $mid(...)$ functions.
            - Fixed bug where using hex RRGGBB values in foreground and background
            commands and tags sometimes caused a run-time error.
            - Fixed bug where setting object properties such as prefix and suffix
            to empty wouldn't remove the prefix and suffix displayed in the room
            description.
            - Fixed bug where apostrophes in "type" blocks were always interpreted
            as comments. Now only apostrophes starting a line or with a space
            before them are interpreted as comments, e.g:
                ' this is a comment
                look = It's not very exciting
                take = You can't take this.	' this is another comment
            now work correctly.
            - Fixed bug where variables couldn't be updated in status variable
            onchange scripts.

    17/FEB/2004 - QUEST 3.52
            - Fixed bugs
                    - Questnet IRC-style option was missing from LDF.
                    - Numeric status variables were always being set to zero when
                    the game was loaded.

    07/JAN/2004 - QUEST 3.51
            - Fixed bugs:
                    - Quest quit unexpectedly if a game was restored while a MOD
                    file was playing.
                    - In LDF mode, when an error was encountered loading a file,
                    Quest would attempt to read a non-existent string, meaning the
                    error message didn't display properly.
                    - An exit could not be created from a room's "script" tag.
                    - A run-time error occurred when a status variable had no "type"
                    set.
                    - Cloned objects were not being saved.
                    - If the windows were minimized when closed from the taskbar,
                    they would next appear off-screen when Quest was loaded
                    again.
            - Added option to use IRC-style commands when connected to a QuestNet
            server, so typed text is by default said to players in the same rooms,
            and commands have to be prefixed with a slash "/".
            - Quest now associates itself for QuestNet URLs of the form:
                    qnet://server
            or
                    qnet://server:port
            So you can add links like this to webpages, and people with Quest
            installed can click these to connect to your server.
            - Quest now recognises when a connection to a QuestNet server has been
            refused, rather than carrying on waiting for a response.

    05/OCT/2003 - QUEST 3.5
            - Fixed bug where variables couldn't be passed as parameters to
            procedures.
            - Many room tags can now be changed and read using properties and
            actions - see the documentation for full details.
            - "place" exits can now be removed using
                    destroy exit <fromroom; toroom>
            - You can now check whether an object is hidden by looking at its
            "hidden" property, and see whether it's invisible by looking at its
            "invisible" property.
            - Quest now shows a warning if you try to open a QuestNet Server game
            (checks for the presence of "gametype multiplayer").
            - If the path to the ASL log file had been deleted, Quest would quit
            with a run-time error when trying to write the log file. Now it shows
            a warning and turns off writing the log file.
            - Many windows now remember their size, positions and column widths.
            - Better error reporting when Quest fails to load a game.

    07/SEP/2003 - QUEST 3.5 BETA 2
            - Improvements to LDF:
                    - The widths of the "Selected game" and "Add" buttons can be
                    changed to accommodate different word lengths, by modifying
                    "add-width" and "game-width" in the "start" section.
                    - The "archive" string in the "start" section wasn't being
                    applied.
                    - Added "questnet" string.
                    - Added "default" section for gender and article.
            - When an "enter" command is in effect, the "up" and "down" buttons are
            now disabled as well as the north, south etc. buttons.
            - When loading a game from a ZIP file, Quest will now successfully
            include libraries in the ZIP.
            - On the Options window you can now choose your own default foreground
            and background colours.
            - Exits can now be destroyed by leaving the destination room parameter
            blank, e.g. "create exit north <room1; >"
            - Fixed "if type" for rooms.
            - You can now specify "game" as the second parameter of
            $getobjectname()$ to search for the object anywhere in the game.
            - You can now read "take" tags:
                    take <Take text>
                            is readable with the object's "take" property
                    take do <some script>
                            is executable with the object's "take" action
                    take
                            is testable - the object's "take" property is ON
            - You can now run object "give ..." tags using the same names as those
            used to set them.
            - You can now override "beforeturn" and "afterturn" using "override"
            without having to also specify a script.

    27/JUL/2003 - QUEST 3.5 BETA
            - ASL Version 320
            - Added LDF - Language Definition Files - to enable the Quest interface
            to be displayed in any language, and to facilitate making games in
            languages other than English.
            - Added "up" and "down" directions.
            - You can now set an array index for a string in an enter command
            without specifying the % characters - "enter <mystring[index]>" is the
            same as "enter <mystring[%index%]>".
            - Improved QuestNet server support:
                    - you get a version of the normal pane of links when you're
                    disconnected
                    - option to reconnect to the server
                    - support for server login
            - As collectables don't exist in ASL3, you can now use "~" characters on
            their own, but only with ASL versions 320 and up, as this was still
            not allowed previously.
            - Added text to speech facility, using Microsoft Speech API (SAPI).
            Quest will use SAPI5 if available (this comes with Windows XP) -
            otherwise Quest will use SAPI4 (which comes with Windows 2000). SAPI4
            is available as a separate download (for Windows 95, 98 and ME) from
            the Axe Software website - spchapi.exe. If no version of SAPI is
            installed, the "Enable speech" option is disabled.
                    - Quest can speak everything printed on the screen, or it can
                    speak only when explicitly told to do so. Or, you can choose
                    to let it never speak at all.
                    - added "msg nospeak" command, which is like "msg" except the
                    text is not spoken when the player has the "Speak everything
                    which is printed on the screen" option on.
                    - added "speak" command, which speaks the specified text (if
                    speech is enabled).
                    - $speechenabled$ function returns "1" if speech is enabled, "0"
                    otherwise.
            - Fixed bug where "if here" would fail if the room name contained
            capitals.
            - When Quest can't find the ASL or CAS file referred to when loading a
            QSG file, it now gives you the option to find the file.
            - Added support for animated gifs using the "animate" command, with
            syntax the same as for the "picture" command. Use "animate persist" if
            you want the background frame to persist throughout the animation. For
            some gifs you may need to specify the size of the picture window
            manually.
            - Room description variables are now updated whenever an exit is
            created.
            - Implemented inc and dec commands for easy incrementing and
            decrementing numeric variables. inc and dec will initialise the
            variable first to zero if it has not been defined. Set the increment
            or decrement with an optional second parameter; the default is 1.
            - Implemented flags, essentially a shortcut to boolean properties for
            the "game" object. Set with flag on <flagname>, flag off <flagname>
            and test using if flag <flagname>.
            - Added support for opening ASL or CAS games contained within ZIP files.
            All other files in the ZIP are extracted to a temporary directory,
            allowing Quest to directly open a single ZIP file containing a game
            plus graphics and sounds, for example.
            - In a beforeturn script, you can now run a "dontprocess" script command
            which will stop the command from being processed after the script
            finishes.
            - For games with asl-version 350 or greater, Quest no longer
            automatically adds quotes around text specified in a "speak" tag,
            allowing you to more easily enter description text here rather than
            assuming a spoken reply.
            - Any text formatting codes are now removed from typed-in commands.
            - Added $removeformatting(string)$ function to remove text formatting
            codes from a string.
            - You can now change, or execute an object's "gain" and "lose" script
            via the "gain" and "lose" actions.
            - In ASL 350, games are assumed to be single player games unless
            otherwise specified. To specify the type of game, in the "define game"
            block use
                    gametype singleplayer
                or
                    gametype multiplayer

    04/DEC/2002 - QUEST 3.12 (build 156)
            - Fixed bug where a game using if ( #(something):property# ...) ...
            wouldn't load.

    03/DEC/2002 - QUEST 3.12
            - Fixed bug where Quest wouldn't recognise the file extension if a file
            was dragged from Windows Explorer onto Quest.exe
            - Some tweaks to error reporting
            - Fixed several display issues under Windows XP
            - With asl-version 311 and later, if an object's "look" or "examine"
            tag specifies a script, that script will be available as an action and
            can be called the usual way with doaction <object name; look> etc. A
            side-effect of this is that you can't change an object's description
            by changing its "look" property if a script has been specified. If you
            want to change the "look" description of an object that has had a
            script specified for it, you need to change the "look" action instead.
            - Fixed bug where the Look at/Take/Speak to buttons could become
            disabled for the rest of the game.
            - The "intro" text block is no longer displayed when restoring a game.
            This was only noticeable anyway (and irritating) if the "intro" block
            included a "|w" wait-for-keypress code.
            - Clicking the "Restore..." menu item in the "Quest" menu while a "wait"
            was in progress would cause a run-time error, so this option is now
            disabled while Quest is waiting for a keypress.
            - Fixed bug where a space was not appearing before an object's suffix in
            its description.

    12/SEP/2002 - QUEST 3.11
            - Fixed bug whereby if a room had no "look" description, a blank line
            was printed instead.
            - Fixed bug that caused a run-time error if $displayname(...)$ was
            called with an object name that did not exist.
            - Implemented #quest.lastobject# which returns the name of the last
            object that the player referred to.
            - When using "exec", you can refer to the real names of objects for
            commands such as "look at...".
            - Fixed bug where games saved (to QSG) that used arrays wouldn't load
            properly.
            - Fixed bug where "if type" wouldn't return true for types that were
            inherited by an object from other types.
            - You can now drag and drop a file from Windows Explorer onto the Quest
            Start window. If you drag it onto the Favourites list or the Add
            button, it will be added to the Favourites list. If you drag it onto
            the Play button, the game will load. If you drag it anywhere else, it
            will appear in the "Selected game" box, where you can add it or load
            it as usual.
            - Fixed bug where the foreground colour would sometimes revert to black
            if the main text window had been clicked.
            - The help window's background is now set to the same background as the
            Quest window.
            - Quest will now not create a "go to" exit if an identical exit already
            exists (e.g. if you execute "create exit <room1; room2>" twice).
            - Some minor logging tweaks.
            - If both the game's asl-version and the library's asl-version is 311 or
            greater, any startscript specified in the library will be executed
            before any startscript in the game's "define game" block.
            - Libraries with asl-version of 311 or later can now include other
            libraries with an !include statement. A library won't be included
            twice, so if a game includes a library A, and a library B which also
            includes a library A, the library A is only included once.
            - Fixed saving bug causing Quest to report spurious QSG Errors when
            loading a saved game.
            - You can now read various object tags in the same way as you read
            object properties: prefix, suffix, detail, gender, article,
            displaytype, look, examine.
            - An object's "detail" property will now override a "detail" tag.
            - A "define type <default>" block can now specify the default prefix
            etc. for an object, and a "prefix" tag in an object definition will
            now override it correctly.
            - If there is no script specified for a "place" tag in a room, Quest
            will automatically use the specified room's alias as the name for the
            exit, if it exists.
            - Fixed bug where, if the "Places and Objects" list had a mixture of
            places and objects in it, sometimes the right-click menu would be
            incorrect for the selected item in the list.
            - Libraries can now add to the "default" and "defaultroom" types by
            using "!addto type <default>" and "!addto type <defaultroom>".
            - Worked around bug in Windows 2000 where mangled small icons were
            displayed when in True Color mode.
            - Added link to Quest Games Archive on Quest Start window.
            - Fixed bug where a runtime error would occur when a Quest attempted to
            load a picture from a non-existent path.

    26/JUN/2002 - QUEST 3.1
            - Added shortcut for accessing object aliases from variables - put an
            "@" in front of the variable name. This is the same syntax as for
            autodisambiguation i.e. you could now write:
                    command <inspect #@object#> {
                            msg <You inspect the #@object#.>
                            msg <In code I call it #object#.> }
            Here, the string variable #object# contains the "real" object name,
            and #@object# acts as a shortcut to getting the alias. It is quicker
            than writing the equivalent $displayname(#object#)$.
            - Added facility to skip { brace } checking for older (v2) games, some
            of which failed to load under Quest 3.0, for example bargain.cas. You
            can skip brace checking by adding the game's filename to the registry
            in HKCU\Software\VB and VBA Program Settings\Quest\FileCheck. The
            NumSkip key has the number of filenames in the list, and then "SkipX"
            lists the files, where X is a number from 1 to NumSkip.
            - Comments in synonyms blocks now work. Apostrophes that feature in
            synonyms blocks are dealt with intelligently - for an apostrophe to be
            interpreted as marking the start of a comment, it must either be the
            first character on the line in the synonyms block, or it must be
            separated from other characters by at least one space. This means
            that a synonyms line such as:
                    don't = do not     ' this is nice
            works as you would expect.
            - Changed the tab order on the Options window. "Fonts & Colours" tab is
            now called "Display".
            - Fixed bug whereby setting an object property to "not X", where "X" was
            not set anyway, caused "X" to appear as a property.
            - Added "type <object name; type name>" command to add all properties
            and actions of specified type to the specified object at any time
            during the game (previously you could only set types using the "type"
            tag, so types could not be added during the game, and neither could
            types be applied to objects which were created during the game).
            - Added option to specify which folder Quest will start browsing from
            when the "Load a game" button is pressed. This defaults to the "My
            Documents" folder.
            - If the "Log ASL script messages to a file" option is ticked but no log
            file is specified, a log file called QUESTLOG.LOG is now created in
            the "My Documents" folder rather than in C:\, and similarly if "Output
            all game text to a file" is ticked but no file is specified,
            GAMELOG.LOG is also now created in the "My Documents" folder.
            - On the Options window, when you click Foreground or Background to
            choose label colours, the current colour is selected on the window
            rather than defaulting to black.
            - Tweaked room descriptions so that an "out" exit has the word "out" in
            bold, rather than the room name (as you have to type "out" to go out,
            rather than "go to..." and then the room name), and also added the
            missing space when directional exits followed an out exit in the room
            description.
            - For games with asl-version of 310 or greater, when a "description" tag
            is specified, the description specified by the "look" tag is now NOT
            automatically printed after the description. This allows for greater
            flexibility when using custom room descriptions - to print the "look"
            tag description where you want it in a "description" script, refer to
            the new #quest.lookdesc# string variable which returns the current
            room "look" description. For the old/default behaviour, with the look
            description printed last, simply add msg <#quest.lookdesc#> to the end
            of any "description" script. See the updated example in the help file.
            - The ASL, CAS and QSG file associations are now set in the Quest Setup,
            which means there's no longer any need to have run Quest at least once
            before you can launch an ASL/CAS/QSG file by double-clicking it.
            - Added a "Restore File Associations" button to the Quest Options window
            which will restore the ASL, CAS and QSG file associations should
            another application over-write them.
            - Fixed bug that caused a run-time error if $getobjectname(...)$ was
            called with an object displayed-name that could not be found.
            - $getobjectname(...)$ now also, by default, looks in the inventory for
            the object, and not just the current room. Plus, up to two rooms can
            be specified for $getobjectname(...)$ to look in instead.

    24/DEC/2001 - QUEST 3.1 BETA
            - Added MOD support - plays MOD, S3M, XM and IT music files:
                    - playmod <filename [;loop]>
                    - playmod <> stops playing
                    - modvolume <volume>
                            - volume can be from 0 to 100.
                            - default volume is 100.
                            - volume can be changed while music is playing.
            - playwav and playmidi now also support ";loop" for looping
                    - playwav <>, playmidi <> stops playing.
            - Some minor changes to Quest Start window.
            - New option to turn off sounds.
            - Added "clone" command:
                    - clone <object to clone; new object name; [new object room]>
                    - new object will have an alias of the old object's name (you
                    can change the alias by changing the alias property)
            - Added "shellexe" command:
                    - works like "shell" but allows command line switches
            - "Room/Object Properties" window now "Property Viewer".
            - The "define game" block and "define room" blocks can now include
            properties, and these properties can be accessed by referring to the
            "game" object or room name.
            - Shortcut to accessing object properties:
                    - #objectname:property# exactly equivalent to
                    $objectproperty(objectname;property)$
                    - Can use #(stringvariable):property# to access the property of
                    the object specified in the string variable.
                            - e.g. with object "fish" with property "value=5":
                                    set string <food; fish>
                                    msg <#(food):value#>
                            returns "5".
            - Improved, easier disambiguation from custom player commands:
                    - command <ignite #@thing#> doaction <#thing#; ignite>
                            equivalent to
                    command <ignite #thing#> doaction <$getobjectname(#thing#)$; _
                            ignite>
                    - this new form is recommended whenever a command needs to
                    handle objects, as if the "thing" in the above example
                    doesn't exist, Quest will give the player the standard
                    "baditem" error message and won't execute the "doaction"
                    script.
            - You can now sort the variables listed in the string/numeric variable
            debug windows by clicking the column headings.
            - New "background" and "foreground" script commands and tags in "define
            game" block allow you to change background/foreground colours. They
            accept parameters of white, black, red, green, yellow and blue. New
            Quest option allows you to override these to Windows default colours.
            Changing the colour with "foreground" changes the colour specified by
            the |cb formatting tag to the colour you specify, so |cb is always the
            foreground colour, even when it's not actually black.
            - New "alt" tag allows you to specify alternative names for objects -
            separate names with semicolons if necessary. Objects can share "alt"
            names just as they can share aliases, and in the case of ambiguity,
            the standard disambiguation menu appears.
            - Parser now supports "it", "them", "him", "her" etc.  for referring to
            the last object that was referred to. E.g. you can type "look at
            potato" and then type "take it".
                    - new "badpronoun" error when pronoun doesn't refer to anything,
                    with prounoun used in #quest.error.pronoun#.
                    - for objects with an article of "him" or "her", Quest accepts
                    "him" or "her" respectively as pronouns. For everything else,
                    Quest accepts "it", "them", "this", "that", "those" and
                    "these" (regardless of the actual plurality of the object).
            - Dropping of an object puts object's article into
            #quest.error.article#, and by default article is now printed (rather
            than always using "it" as in the message "You drop it").
            - Implemented "oops" command - if a player types "look at potatto" and
            Quest gives an error, they can type "oops potato" or "the potato"
            (assuming there actually is an object called "potato") and it will
            execute "look at potato".
            - Quest no longer requires the "AT" in "LOOK AT THING"
                    - badlook error obsolete
            - when "examine" object doesn't exist, badthing error now printed rather
            than badexamine error.
            - badexamine error rather than badthing error when "examine" is used
            on its own (i.e. without an object).
            - Quest now supports L = LOOK (AT), X = EXAMINE abbreviations.
            - Fixed bug where moving objects out of the inventory using "move"
            rather than "lose" failed to update the inventory pane.
            - The font for the ASL Log window is now the same as the specified Quest
            default font.
            - Added "RESTORE" (equivalent to "LOAD") and "RESTART" player commands.
            - Fixed erroneous error reported whenever an object was revealed or
            concealed.
            - Improved mouse support on inventory pane:
                    - Can now drag and drop to use/give objects to other objects in
                    the inventory.
                    - New popup menu allows easy "look at", "examine", "use" and
                    "drop" of objects in the inventory.
            - Improved support for new beta of QuestNet Server.
            - Enhanced security options:
                    - The default list of disallowed file types has been expanded,
                    and covers all file types deemed "dangerous" by Microsoft
                    Outlook.
                    - Descriptions of file types now stored and displayed on the
                    confirmation window.
            - Output to inventory and rooms/objects list now suspended during
            outputoff.
            - Fixed bug saving numeric variables in Quest 2 games.

    07/NOV/2001 - QUEST 3.04
            - bug fix (not widely released):
                    - status variable display strings were sometimes getting mixed
                    up.
                    - all lines containing the word "define" were being counted in
                    the error checking code, even lines that didn't begin a define
                    block.

    31/OCT/2001 - QUEST 3.03
            - bug fix release:
                    - when using $getobjectname(...)$ in a "set" command, the
                    disambiguation menu came up twice.
                    - status variables box now not displayed if empty.

    20/SEP/2001 - QUEST 3.02
            - bug fix release:
                    - pictures resized in ASL file weren't displaying at the correct
                    size.
                    - removed debug code that appeared in v3.01 that caused problems
                    connecting to a QuestNet server.

    18/SEP/2001 - QUEST 3.01
            - bug fix release:
                    - "inventory" command caused runtime error if you were carrying
                    one object.
                    - some problems with taking and dropping fixed.
                    - When connecting to a QuestNet server, Quest would hang for a
                    few seconds while resolving the hostname.

    08/SEP/2001 - QUEST 3.0
            - ASL version 300.
            - Minor updates to Options window; "Ask me before exiting Quest" now
            defaults to off.
            - $objectproperty$ didn't work for properties with capitals in their
            names.
            - In multiplayer mode, Quest window now not displayed until finished
            connecting to QX server.
            - In an object action, the object calling the action script is now
            returned in $thisobject$, and its display name in $thisobjectname$.
            - Updated "speak" behaviour - now works with aliases, and "speak"
            action/property overrides an object's speak tag.
            - Multiple commands can now appear on a "command" statement, separated
            by semicolons.
            - Objects can now be defined outside of a room block - useful if it's an
            object that only ever exists in the player's inventory etc.
            - New "stop" command finishes game but doesn't automatically print any
            text block.
            - If "Ask before exiting game" is on, Quest no longer asks for
            confirmation before exiting if the game has finished.
            - Fixed bug where object gender error variable was not set for default
            speak text.
            - Quest Start window now minimisable.
            - Actions with braces in define type blocks weren't working.
            - "take" actions didn't work.
            - "give" data can be changed/defined at run-time using actions:
                    action <object name; give 'other object name'> (script)
                    action <object name; give to 'other object name'> (script)
                    action <object name; give anything> (script)
                    action <object name; give to anything> (script)
            equivalent to changing the following tags, respectively:
                    give <other object name> (script)
                    give to <other object name> (script)
                    give anything (script)
                    give to anything (script)
            - Updating "gender" and "article" properties now updates gender and
            article properly.
            - "repeat" didn't support multiple conditions as documented.
            - Inventory pane wasn't updated when objects were moved to inventory
            using the "move" command.
            - New-look About window.
            - Status variable display strings can now contain variables, functions
            etc.
            - Fixed "%%" for printing "%" etc.
            - When the player tries to drop an object they are not carring, the new
            "baddrop" error message is printed rather than the "baditem" error.
            - New "type" condition checks whether an object is of a specified type.
            e.g. "if type <banana; edible> then ..." checks to see whether the
            banana is of type "edible".
            - New "action" condition checks whether an object has a particular
            action defined for it. e.g. "if action <#obj#; eat> then doaction
            <#obj#; eat>"
            - Properties in a "define type" block can now be within a "properties"
            tag, as well as "naked" (i.e. lines of the form "(property)",
            "(property) = (value)")
            - Panes on right side of Quest window can be toggled on and off using
            new "panes on" and "panes off" commands.
            - Output of "inventory" command now takes notice of object prefixes and
            suffixes, and reads more naturally.
            - You can now place comments at the end of lines safely, not just at the
            beginning of lines.
            - Prefixes had disappeared from place names.

    11/APR/2001 - QUEST 3.0 BETA 2
            - ASL version 284 (pre-release of ASL version 300)
            - updated Quick Help text
            - You can now copy text from the main window to use in a Word or text
            document by right-clicking the main text window and selecting "Copy".
            You can also use Ctrl+C, which now doesn't stick an odd character in
            the command box.
            - "Edit Favourite Games List" window has been replaced by buttons on the
            Start window, similar to the Server list arrangement buttons
            introduced in Beta 1.
            - bug fix: "if" statements after tags such as "take", which had their
            corresponding "else"s on a separate line, were losing the "else" part.
            - Quest disables bits of the main window more selectively when a game
            ends, rather than disabling pretty much everything.
            - Combined the two different "load" buttons on the Quest Start window.
            Saved games can now be distinguished from game files as they have
            different icons.
            - Removed the small help information window at the bottom of the Quest
            Start window, and replaced it with tooltips.
            - The picture window can now be closed using "picture close"
            - room blocks can now have their own "beforeturn" and "afterturn" code.
            Use "beforeturn override" and "afterturn override" if the room's
            beforeturn/afterturn code replaces any beforeturn/afterturn code in
            the "define game" block. If no "override" is specified, both the
            room's and the game's beforeturn/afterturn code is executed.
            - Implemented "for each", which can currently be used in the form:
                    for each object in <some room> (script)
            or
                    for each object in game (script)
            with the object returned in #quest.thing# on each pass of the loop.
            - New function $displayname(object name)$ returns the displayed name of
            an object. For example, with "for each object...", where #quest.thing#
            is the unaliased name, the printed version of the object name is
            returned in $displayname(#quest.thing#)$.
            - More sophisticated parameter handling for functions:
                    - previously parameters stored in string variables, so a
                    function calling another function would no longer have access
                    to its parameters
                    - now function parameters are returned using:
                            - $numberparameters$ returns number of parameters passed
                            to that function
                            - $parameter(number)$ returns the parameter
                    - So a function now has access to its parameters throughout the
                    lifetime of the function, even when it is calling other
                    functions.
                    - Previous string variables still written to for backwards
                    compatibility.
            - "do" procedures can now accept parameters, which can be accessed
            using via the method above for functions.
                eg      do <myproc(something;something else)>
            would execute "myproc"; myproc would find $numberparameters$ to
            return 2, $parameter(1)$ to return "something" and $parameter(2)$ to
            return "something else".
            - $getobjectname(name)$, the opposite of $displayname(name)$
            implemented - this returns the actual object name of an object as
            typed in by the player. For example, if there is an object "object15"
            in the room with alias "book", $getobjectname(book)$ will return
            "object15". It will bring up the standard Quest disambiguation window
            (asking the player to select what they mean by "book") if more than
            one object exists in the room with alias "book".
            - Updated Room/Object properties window - you can now choose to
            selectively view either rooms or objects only, or both rooms and
            objects.
            - Added "repeat" command:
                - repeat [while | until] (condition[s]) (script)
                - "condition" takes the same conditions as the "if" command,
                    separated by "and" or "or" if multiple conditions are present.
                - e.g.
                        repeat until is <%number%; 3> set <number; %number%+1>
            - A few rearrangements to the Options window
                    - Replaced "RRGGBB values" label colour selection with proper
                    colour picker.
            - Quest Start window remembers which tab was selected from last time
            Quest was run.
            - A single underscore can now be used where lines are split, rather
            than a double underscore.
            - Bug fix: Quest wasn't resetting numeric variables on a game restart.
            - Implemented friendlier conditions. You can now use "if" statements in
            the following form:
                if (%myvariable% = 12) then ...
                if (#something# = blue) then ...
                if (%somenumber% > 15) then ...
                if (%something% <= 2) then ...
            The same "friendlier" conditions can be used with the repeat command.
            - Better error checking for matching "define"/"end define"s and
            matching braces {}.
            - A function can use "return" to return a value from any point now -
            within an "if" command for example. (Previously "return" had to be on
            a line on its own).
            - Collectables replaced in ASL 284 with displayed numerics:
                    - in define game section:
                            define variable <myvariable>
                                    type [numeric | string]
                                    value <start value>
                                    display [nozero] <! chunk*s* etc.>
                                    onchange {script}
                            end define

                    - default type is numeric
                    - "display" tag takes same format as collectables display string
                    did. "nozero" will not display string when value of variable
                    is zero
                    - "onchange" script is executed whenever the variable contents
                    are set.
            - Slight change to main Quest window - now gives small area for display
            of collectables / displayed variables. Frame around "Places and
            Objects" list removed; buttons now at top of list.
            - Quest Setup now uses new installer:
                    - Nicer, easier to use interface
                    - Single EXE setup
                    - Removes Quest entries from registry on uninstall
                    - Can create desktop icon
            The installer used is the excellent Inno Setup (www.jrsoftware.org).
            - String and numeric variable arrays are now displayed in full on the
            debug windows.
            - New QSG (Quest Saved Game) format: All new features such as object
            properties and actions, timers, created rooms etc. are saved in a new
            hard-to-peek-at binary format.
                    - Quest still uses the old text format for version 2 games, so
                    older games will save and load properly, and you can load
                    Quest 2.x QSG files.
            - Pictures can now be resized, e.g.:
                            picture <mypic@250x150>
                            picture <mypic@250x150;My Picture's Caption>
                    - picture size is in pixels
                    - players can also resize pictures, but height:width ratio
                    maintained.
            - Added option to turn off pictures always being on top of other windows
            - Picture window now closes when game exits
            - Blank lines in the synonyms block would cause a run-time error
            - Documentation updated; now in CHM (HTML Help) format
            - Friendlier default error messages
            - "examine" action or property now overrides examine tag of an object
            - Blank lines in a game's "about" information are no longer printed
            - New "inventory" player command prints the current inventory
            - Quest now asks whether you want to run the file when a game tries to
            run a file disallowed by security options.

    20/MAR/2001 - QUEST 3.0 BETA 1
            - ASL version 283 (pre-release of ASL version 300)
            - changes to interface:
                    - "Welcome to Quest" window becomes "Quest Start" window, tabbed
                    window
                    - options window revamped
                    - main window slightly redesigned; can turn off "panes" on
                    right-hand side for full-screen adventure game view
            - implemented dynamic object creation:
                    - use "create object <object name [; contained in room]>
                    - if no container room is specified, the object is created but
                    is not present in any room - it can be moved as usual though.
            - implemented dynamic place exit creation:
                    - use "create exit <startroom; endroom>" to create a "go to ..."
                    place exit from startroom to endroom.
            - "create exit out <startroom; endroom>" is now available in addition to
            the directional exits.
            - the following object properties take precedence over Quest defaults:
                    hidden
                    invisible
                    prefix
                    suffix
                    look
                    displaytype
            these can be used for dynamic object creation, object inheritance etc.
            - implemented object actions:
                    - set up using:
                            action <action name> (script)
                    - can also be included in "define type" blocks in above manner
                    and included with a "type" tag, as for object properties.
                    - execute an object's action using:
                            doaction <object name; action name>
            - "look" action takes precedence over "look" property or Quest default.
            - optional "define type <defaultroom>" block can set default properties
            for rooms, just as "define type <default>" does for objects.
            - actions can be changed at run-time using:
                    action <object name; action name> (script)
            - "use" data can be changed/defined at run-time using actions:
                    action <object name; use> (script)
                    action <object name; use 'other object name'> (script)
                    action <object name; use on 'other object name'> (script)
                    action <object name; use anything> (script)
                    action <object name; use on anything> (script)
            equivalent to changing the following tags, respectively:
                    use (script)
                    use <other object name> (script)
                    use on <other object name> (script)
                    use anything (script)
                    use on anything (script)
            - similarly, "take" data can be changed or modified with the "take"
            action.
            - added "displaytype <>" tag, which can modify the type displayed in the
            object list of the Quest window - meaning characters, which in ASL3
            must be defined as objects, can now show a type of "character" in the
            object list by using "displaytype <character>".
            - by default, banned list of shell extensions now includes VBS and HTML.
            - non-ambiguous "if" handling: Quest will now accept {braces} around
            "then" and "else" parts of a single-line "if" statement without
            problems:
                    if ask <A> then {if ask <B> then msg <1>} else msg <2>

    01/SEP/2000 - QUEST 3.0 (ALPHA) BUILD 35
            - ASL version 282 (pre-release of ASL version 300)
            - automatic string trimming, introduced in ASL 281, now does not apply
            to ASL 280 and lower.
            - inventory drag and drop now supports both "give" and "use" - left
            click-and-drag to give, right click-and-drag to use and object.
            - implemented object property types and inheritance - define type
            blocks and type tag; default properties in "define type <default>"
            block (optional).
                    - define type blocks of following form:
                            define type <type name>
                                    properties
                                    .
                                    .
                            end define
                    - eg.:
                            define type <fruit>
                                    type <food>
                                    sweet
                                    tasty
                            end define

                    (the above assumes there is also a "define type <food>" block
                    somewhere in the game)
            - object properties can now be changed using the "property <object;
            property data>" command. Use "not (property name)" within the
            "property data" parameter, "property" tags or "define type" blocks to
            cancel boolean property values set previously (e.g. by inherited
            types).
            - the command to show a picture is now "picture", not "show". "show"
            replaced "showobject" and "showchar" for unhiding objects in earlier
            alphas.
            - previous alphas broke "use" tags for entire rooms; this is now fixed.
            For "use object" when in a room, a "use" tag for that object in the
            room definition overrides any general "use" tag for the object. That
            is, "use <object> msg <Blah>" in the room definition takes precedence
            over "use msg <Hello>" in the object definition when the player types
            "use object".
            - rewritten much room handling code - takes slightly longer to set up
            games while room data is initialised, but games should be faster once
            loaded, particularly large and complex games when displaying room
            descriptions.
            - implemented dynamic room creation:
                    - use "create room <room name>" to create a room
                    - use "create exit north <startroom;endroom>" to create an exit
                    north from the startroom to the end room, etc. This command
                    can also change the room an exit points to if the exit already
                    exists.
            - default font in windows is now Tahoma when present on system
            - font sample in options window now works
            - redesigned debug windows
            - rooms are now also implemented as objects, meaning rooms can have
            properties in the same way objects can. This means no object may share
            a name with a room.
                    - the following object properties take precedence over the Quest
                    defaults if you want to use dynamic room creation in combination
                    with object inheritance or want to change the descriptions etc.
                    of any room:
                            alias
                            prefix
                            indescription
                            description
                            look
                    - so to change the ordinary "look" description of any room,
                    whether the room's default is set using the look tag or not, you
                    can now use:
                            property <room name; look=new look information>

    27/JUL/2000 - QUEST 3.0 (ALPHA) BUILD 28
            - ASL version 281 (pre-release of ASL version 300)
            - added QX Client support, allowing Quest to connect to the forthcoming
            QX3 (Quest Server, allowing for multiplayer IF)
            - characters are now defined as objects, so objects now support the
            speak, give and gender tags:
                    - "hideobject"/"hidechar" becomes "hide"
                    - "showobject"/"showchar" becomes "show"
                    - "moveobject"/"movechar" becomes "move"
                    - "concealobject"/"concealchar" becomes "conceal"
                    - "revealobject"/"revealchar" becomed "reveal"
            - the "give" player command now works with the new unified item/object
            model.
            - updated inventory pane to be a list, and changed the look of the
            objects list beneath. You can now drag and drop items from your
            inventory to the objects list to give items to characters in the game
            easily.
            - implemented the "article" property, used for default take and give
            responses, returned in #quest.error.article#
            - implemented picture caption - use "show <filename.bmp;caption text>"
            - "examine" user command now applies to both inventory and current room;
            default text is same as "look at" text; default error message
            (badexamine) now "That does not appear to be here".
            - "examine" and "look at" now work for both objects in the current room
            and objects in the inventory.
            - universal "set" keyword:
                    - initially use "set" with variable type, using same syntax as
                    previously with "setvar" etc. eg:
                            set numeric <mynumeric; 5>
                            set string <mystring; Hello>
                            set collectable <mycollectable; =4>
                    - after a variable has been defined, its contents can optionally
                    be updated with the variable type removed, eg:
                            set <mystring; Updated contents>
            - when setting string contents, contents are now trimmed of spaces. If
            you want spaces at the start or end of a string, use square brackets.
            eg:
                    set string <mytwospaces; [  ]>
            - made "give" more flexible in the same way "use" was made more flexible
            with build 9:
                    - for "give a to b", use any of:
                            - in b, give <a> {script}
                            - in a, give to <b> {script}
                            - in b, give anything {script}
                            - in a, give to anything {script}
                    - "give" info priority is above order
                    - for the "anything" options, #quest.give.object.name#
                        returns the *real* (unaliased) name of the "unknown"
                        object (ie the object that this statement is not in
                        the "define block" of)
        - implemented "gain" and "lose" tags for when objects are gained and
            lost by the player. Note that these only work for the standard giving
            and losing/dropping of objects, and not for objects moved into or from
            the inventory using "move" or for objects that are taken from the
            player by using "hide" while the object still "lives" (albeit non-
            existently) in the inventory.
        - implemented arrays:
                    - arrays automatically dimensioned when set with higher index
                    - eg.   set numeric <mynumericarray[10]; 2>
                        creates an array "mynumericarray", with eleven elements 0
                        to 10, element 10 containing "2".
                    - string and numeric arrays can be created
                    - out-of-range arrays return an error; numeric out-of-range
                    arrays return -32766 (similar to non-existent numeric
                    variables which return -32767).
                    - To use a numeric variable in an index, use:
                            %myarray[indexnumber]%
                    where "indexnumber" is a numeric variable - note NO "%"
                    characters around the variable name.
                            - eg. in a "for loop":
                                    for <i;1;10> msg <%myarray[i]%>
                    - upper bound of an array can be returned by the
                    $ubound(arrayname)$ function.
                            - returns "!" if variable does not exist
            - implemented object properties
                    - set properties in "define object" block using one or more
                    "properties" lines, of the form:
                            properties <(property name) [= (value/string)] [; ...]>
                    eg.
                            properties <wearable; hunger=12; type=animal>
                    - get object property using $objectproperty(object name;
                    property)$
                            - returns "!" and ASL log error if object/property
                            doesn't exist
                    - for non-valued properties (eg "wearable" in above example),
                    use "if property" to check that property exists:
                            if property <object; wearable> then ....

    26/MAR/2000 - QUEST 3.0 (ALPHA) BUILD 9
            - ASL version 280 (pre-release of ASL version 300)
            - ASL: object/item unification:
                    - "give", "lose" and "if got" now accept objects as parameters
                    - no need to set up "items" and "startitems"
                    - new "examine" tag in object define block
                            - error messages "badexamine" and "defaultexamine" for
                            nonexistent objects and objects with no "examine" tag
                            respectively, when the player tries to examine these
                            objects
                    - new "examine" player command examines picked-up objects
                    - taking objects moves them to a virtual "inventory" room.
                    - you can use hideobject to make objects disappear from the
                    inventory, and concealobject to make objects invisible (but
                    still present) in the inventory, just as you do with objects
                    outside the inventory.
                    - new "drop" command is the same as the "lose" command - object
                    is moved from inventory to the current room.
                    - to take something from the player which *doesn't* end up on
                    the floor of the current room, you could:
                            - use hideobject to make it vanish from existence
                            - use moveobject <object; character> to move it to some
                            character's inventory
                            - etc.
                    - objects must now have unique names
                            - aliases can be used though
                            - menu comes up in case of ambiguity allowing player to
                            select which object they mean; menu filled with choices
                            taken from the new "detail" tag from each object
                            involved.
                    - take tag can be blank - object picked up by default, unless
                    there is script after "take" in which case this will be executed
                    instead.
                    - "defaulttake" ASL2 error is now ASL3 "badtake" error
                    - "defaulttake" is now "You pick it up."
                    - "drop" player command
                            - new "cantdrop" error when object can't be dropped
                            - prints "baditem" error message if no such object
                            - drop tag:
                                    - "drop everywhere [<message>]"
                                    - "drop nowhere [<message>]"
                                    - "drop {script}"
                            - if no drop tag, object dropped and "defaultdrop"
                            message printed
                    - "use" now more flexible:
                            - for "use a on b", use any of:
                                    - in b, use <a> {script}
                                    - in a, use on <b> {script}
                                    - in b, use anything {script}
                                    - in a, use on anything {script}
                            - "use" info priority is above order
                            - for the "anything" options, #quest.use.object.name#
                            returns the *real* (unaliased) name of the "unknown"
                            object (ie the object that this statement is not in
                            the "define block" of)
            - revamped "Edit Favourites List" window
            - revamped splash screen
            - new selection-block window - no more eight selection
            restriction
            - reorganised menu structure on main window
            - progress bar shows status better as large CAS files load
            - the "pause", "enter" and "wait" script commands no longer need
            most menus to be disabled - Quest can now be closed properly
            even when one of these is in effect.
            - "pause" no longer freezes the entire Quest window when in operation.
            - the "help" guide now appears in a separate window. This window
            can be printed to from script commands:
                    - "helpmsg" used in the same way as "msg"
                    - "helpdisplaytext" used in the same way as
                    "displaytext"
                    - "helpclear" used in the same way as "clear"
                    - "helpclose" closes help window

            The help window is cleared when Quest's default help text is
            printed.

            - added $loadmethod$ function: returns "loaded" if game was
            started from a previously-saved QSG file, otherwise returns
            "normal". Useful for intros in games - no need to show intro
            if $loadmethod$ returns "loaded", for example.
            - revamped enhanced-style message boxes - they now respond
            better to keypresses.
            - implemented timers:
                    - new "define timer <(timer name)>" block:
                            - "interval <(length)>" specifies no. seconds between
                            timer executes
                            - "action {script}" specifies what to do when the timer
                            "fires"
                            - "enabled" specifies timer is running from game start
                            (default is "disabled")
                    - change interval using "set interval <(timer name);(new
                    interval)>"
                    - turn on timer using "timeron <(timer name)>"
                    - turn off timer using "timeroff <(timer name)>"
                    - $timerstate(timername)$ function returns:
                            - "1" if timer on
                            - "0" if timer off
                            - "!" if no such timer name
                    - $timerinterval(timername)$ returns timer interval, or "!" if
                    no such timer name
            - more consistent log messages
            - added options for opening log window when game starts or when an error
            occurs, for remembering window position, always-on-top and
            timestamping log messages
            - redesigned Welcome window
            - "out" tag in rooms may now contain prefix:
                    - eg "out <the; Market>"
                    - if the room referred to has an alias, that alias is displayed
                    and any prefix specified is ignored.
                    - #quest.doorways.out# returns actual out place - unaliased/no
                    prefix
                            - to retain compatibilty, asl-version < 280 returns
                            aliased out place
                    - #quest.doorways.out.display# returns aliased/prefixed out
                    place.
            - Quest was checking text sections for correct < and > usage - Quest now
            ignores text sections when checking that all "<"s have matching ">"s.

    02/JAN/2001 - QUEST 2.19
            - bug fix release:
                    - One-line multiple "if" statements such as:
                            if ask <A> then msg <1> else if ask <B> then msg <1>
                            else msg <2>
                    were broken by the fix in Quest 2.18 for the similar-but-
                    different one-line multiple "if" statements bug. This version
                    executes both types properly.
                    - "not" didn't work for individual conditions, only the first
                    condition in an "if" statement.
                    - when loading .QSG saved games where multiple characters shared
                    the same name, all .QSG data would be applied to one character
                    only - similar to object load bug fixed in Quest 2.18.

    22/DEC/2000 - QUEST 2.18
            - bug fix release:
                    - One-line multiple "if" statements such as:
                            if ask <A> then if ask <B> then msg <1> else msg <2>
                            else msg <3>
                    were not being executed properly - if the player answered no
                    to A, B's "else" condition was being executed, and if the
                    player answered yes to A and no to B, no "else" condition was
                    being executed.
                    - Quest would revert to the default font if the text box on the
                    main window had text selected in it.
                    - changed the behaviour of "here" - it would previously find the
                    first object of that name that existed and check if it was in
                    the current room. As multiple objects in Quest 2.x can have
                    the same name, it now just checks the current room for an
                    object of that name. No error is reported if the object
                    doesn't exist.
                    - when loading .QSG saved games where multiple objects shared
                    the same name, all .QSG data would be applied to one object
                    only, meaning objects weren't in the correct places if they
                    shared names with other objects.
                    - clicking a direction button when Quest was waiting for any key
                    to be pressed caused a run-time error.
                    - if a collectable was attempted to be set out of range, the
                    debug window would display an incorrect value.
                    - when waiting for a keypress, the "speak to" etc. buttons still
                    functioned as normal.
                    - Cancel buttons in some save/load dialogs would cause a
                    save/load anyway.
            - QDK 1.01 now included.

    23/AUG/2000 - QUEST 2.17
            - bug fix/maintenance release:
                    - asl-version used should now be <217>
                    - the "out" tag would not execute script after the place name
                    parameter, and did not display in the room description
                    properly if used as previously documented, with the script
                    immediately following the "out" tag. This has now been
                    resolved, and to use script with the "out" tag, use:
                            out <place name> (script)
                    - the "here" condition in an "if" statement did not check that
                    the character was not hidden, and so would incorrectly report
                    that an object that had been hidden in the current room was
                    "here".
                    - added "exists" and "real" conditions to "if" statement:
                            - "real" returns true if an object is available for
                            interaction
                            - "exists" returns true if the object is defined in the
                            current game
                    - fixed bug causing "use ... on ..." to fail if the object
                    referred to contained capital letters

    13/JUN/2000 - QUEST 2.16
            - bug fix release:
                    - using the command "use (something) on (something else)" where
                    the "something" contained the letters "on" confused the
                    parser; eg. typing "use coconut on zombie" caused Quest to
                    look for a "coc" item, and then usually to report it as not
                    found. The same error would occur with objects with "with" in
                    their names.
                    - using percentage collectables, or collectables with a "%"
                    character in their display strings, caused Quest to exit with
                    a run-time error.

    01/MAY/2000 - QUEST 2.15
            - minor interface update to coincide with release of QDK 1.0 Beta 4:
                    - NE/NW/SE/SW buttons were mixed up East<-->West

    13/JAN/2000 - QUEST 2.14
            - bug fix release:
                    - adding CAS files to "Favourite Games" list generated an error
                    about an invalid file.

    01/JAN/2000 - QUEST 2.13
            - bug fix release:
                    - CAS files larger than 32K in size caused an overflow error.

    24/DEC/1999 - QUEST 2.12
            - bug fix release:
                    - bringing up a selection block after a "wait" (or a "|w" in a
                    message) when the user pressed space caused a runtime error.

    21/DEC/1999 - QUEST 2.11
            - bug fix release:
                    - division now works properly with the "setvar" command (was
                    acting in the same way as addition).
                    - synonyms are now only converted for entire words - in previous
                    versions, setting up a synonym so "x = examine" meant that
                    "box" became "boexamine".
            - small changes to log file output when including libraries
            - Alan Bampton's "Standard" library beta 3 now included with Quest
            - TEMPLATE.ASL returns to the Quest distribution after being
            accidentally ommitted from some previous releases.

    28/NOV/1999 - QUEST 2.1
            - "enhanced" interface option no longer available - there is only one
            interface style, which is the new one - this has the standard minimise
            and maximise buttons, can be resized, and appears with full title in
            the taskbar
            - new option to change label colours
            - got rid of annoying drumbeat on "welcome" screen (sorry - I thought it
            sounded good... but it didn't)
            - added MIDI support - new "playmidi" command plays specified MIDI file.
            Using "playmidi <>" with an empty parameter stops the MIDI playing.
            - fixed bug that caused the game to start in a non-existent room with a
            jargon name if there was a multiple-line "startscript" section above
            the "start" statement in the game definition
            - fixed bug that caused Quest to crash with a runtime error if a
            a collectable display string had text but no "!" character

    11/AUG/1999 - QUEST 2.0
            - splash screen no longer "always on top" - caused problem when error
            messages needed to be displayed.
            - QDK now included with Quest - see separate README-QDK.TXT for info.
            - updated QSG format to save object/character visible information and
            object/character room information
            - default room descriptions more natural:
                    - "There is ..., ..." replaced with "There is ... and ... here"
                    - "You can see ..., ..." now "You can see ... and ..."
            - cosmetic changes to "Welcome" window and "About" window
            - "for" loop support improved:
                    - optional fourth "step" parameter allowed
                    - counter variable can be set within loop (allows for jumping
                    out of loop by setting counter variable => end value)
            - added $symbol()$ function - currently accepts:
                    - gt = >
                    - lt = <
            - added $ucase()$, $lcase()$ and $capfirst()$ functions
            - "possitems" has become simply "items". "possitems" is still supported
            though, in exactly the same way. Semicolons are supported for
            separating item names as well as commas (this makes it more consistent
            with the use of semicolons in other areas of Quest). This also applies
            to "startitems" and "collectables".
            - added keyboard shortcuts to menus on main window
            - added "here" condition to "if" statement - checks to see if character
            or object specified is in the current room. eg "if here <thing> then
            msg <Thing is here>"
            - added $locationof(character/object)$ to return location of specified
            character or object
            - added "outputoff" and "outputon" script commands
            - #quest.objects# and #quest.characters# now updated when characters
            and objects in room change
            - Fixed bug that caused a runtime error if $lengthof(string)$ was
            executed with an empty (zero-length) string
            - Added $instr([start position;]search string;string to find)$ function
                    - "_" character to search for spaces (only required at beginning
                    or end of string to find)
            - Improved library support:
                    - All libraries must now begin with "!library" and contain an
                    "!asl-version <200>" line (old libraries without these will
                    still work)
                    - The "define game" block of a game can be added to by
                    surrounding the lines to add with "!addto game" and "!end"
                    - The "define synonyms" block can also be added to in a
                    similar way, using "!addto synonyms" and "!end"
                    - Everything else is added to the game code
                    - Multiple "collectables" lines allowed (so you can have a
                    "collectables" line in an "!addto game" section of a
                    library and have the collectables defined there present in
                    the game, etc.)
                    - Multiple "possitems"/"items", "startitems", "beforeturn",
                    "afterturn" and "startscript" lines are also allowed
            - Added support for returning collectable contents from parameters -
            just surround the collectable name with "~" characters, as with
            numeric variables etc.
            - Improved error checker now checks for missing "#", "$", "~" and "%"
            for variables in parameters
            - "#" can now be returned from a parameter if "##" is used - eg,
            msg <We're ##1 for potatoes> prints "We're #1 for potatoes". The same
            applies to "$", "~" and "%".
            - Implemented 8-way compass (added NE, NW, SE, SW)
            - Quest now exits completely when the player exits a game run from
            Explorer/command line/QDK, rather than going back to the "Welcome to
            Quest!" window.
            - The registered version of Quest is renamed "Quest Pro".

    02/MAY/1999 - QUEST 2.0 BETA 2
            - Fixed bug that caused an program error when "playerlose" was
            executed in script after the player had clicked a direction
            button
            - Small changes to mini Quest logo on main window
            - Selected text on selection window now printed to main window when
            player clicks "Select" - helps with game logging/walkthroughs/etc.
            - Added "wait" command to wait for keypress. Useful when displaying
            pages of text.
            - New |w format code allows you to add "waits" in the middle of text
            sections etc. New |c clears screen.
            - New support for shelling files, with new security options to
            prevent problems with EXE viruses, Word macro viruses etc.
            - Fixed bug on "Welcome to Quest" window if you removed so many
            games from the Installed Games list that the list area got
            stuck in an "empty" place.
            - Many windows now default to the centre of the screen
            - Fixed save/load errors.
            - Fixed load error that would move the main text area downwards,
            making the entire window look nasty.
            - New file format for .QSG saved games saves numeric variable
            contents. Note that older .QSG files are no longer supported.
            There is a QSGCONV utility available from the Axe Software
            website that will convert older files, though.
            - Added plural support to "collectables" line - use * characters to
            surround any letter(s) that only appear in the plural form of the
            line. Anything between the * characters is NOT printed when there
            is only one of the collectable.
            - Added facility to turn off collectable display if there are zero
            of the collectable - useful for not revealing details of the game
            that are irrelevant at the beginning, for example. Put a "d" in
            front of the collectable type x to activate this.
            - Implemented suffixes for objects and characters.
            - Added "revealobject", "revealchar", "concealobject" and
            "concealchar" commands to set visibility of objects/characters.
            Very similar to "hideobject" et al, but with "concealobject",
            objects are still accessible to the player - just not shown in
            descriptions etc. These commands build on the "invisible" tag
            functionality.
            - Fixed bug that caused error when a selection block tried to
            execute a "choose" command to show another selection.
            - Added $rand(num1;num2)$ function - chooses a random integer
            between num1 and num2.
            - Parameters can now be used with user-defined functions - each
            parameter can be read by reading #quest.function.parameter.x#
            where x is the parameter number.
                - no. parameters returned in #quest.function.numparameters#
            - Implemented "mailto" script command - starts currently
            registered email client with email address filled in. Useful
            for bug reporting, etc.
            - Most menus now disabled when keyboard override is in action,
            to prevent potential confusions and other problems associated
            with keyboard override.

    07/FEB/1999 - QUEST 2.0 BETA 1
            - Objects and characters can now be moved using movechar/moveobject
            with syntax <name; place>
            - Implemented "beforeturn" and "afterturn" script to execute script
            commands every turn
            - Implemented "invisible" tag to hide objects and characters from
            room descriptions and objects list
            - "use" tags debugged:
                    - proper message given when no "use" tag defined
                    - player can't use an item they don't have
            - fixed bug with quest.doorways.places that caused it only to
            change if there was more than one place to go to
            - "use" no longer needs an object - you can define a use tag for
            entire rooms or the game, and then "use ..." can be used on its
            own
            - Fixed bug that caused "quest.doorways.places" not to update when
            there were no places available
            - New-look items/collectables information pane
            - Improved main interface
            - Added collectables debug window
            - Added "nodebug" command - turns off debug windows
            - Improved splash screen

    10/JAN/1999 - QUEST 2.0 ALPHA 2
            - Custom error messages trimmed of leading and trailing spaces.
            - Multiple-condition "if" statements implemented
            - Main Quest window is now resizable - and the whole window can now,
            therefore, be viewed even when in 640x480 mode.
            - New formatting commands to change size:
                    |sxx (where xx is between 01 and 99) changes font size
                    |s00 changes font size to default
                    |jx changes justfication of lines, where x is
                            c = centre
                            l = left (default)
                            r = right
            NB: Changing |jx twice on one line (eg |jcTitle|jl) does NOT work.
            Instead, use |jcTitle on one line and then |jl on the next.
            (If necessary, use |jl|xn if following line contains no text)
            - "HELP" now looks much nicer
            - New font <> command
            - New options to set default font and font size, and to override
            attempts by the game to change font information.
            - New default fontname <> and default fontsize <> commands
            - Tidier options window
            - Fixed bug that caused some rooms to take prefixes of objects
            within them
            - Added "pause <>" and "clear" script commands
                    - "clear" clears screen
                    - "pause" suspends execution for specified no. of milliseconds
                    (1000 milliseconds = 1 second).
            - Added "startscript" to run script commands at the start of a game
                    - "nointro" turns off automatic display of intro text
            - Added "debug" script command to log text to log file
            - Fixed bug that caused Quest to hang when an invalid formatting
            code (starting with "|") was encountered
            - Libraries implemented - use "!include <filename>" to include
            them. Libraries taken from same path as the game's ASL file,
            and automatically incorporated into CAS files
            - Adding games to the "Installed Games" list is quicker and no
            longer parses the entire file
            - WAV files played with the "playwav <>" command now return control
            back to Quest immediately - Quest no longer waits for the WAV to
            finish and continues processing script commands immediately, by
            default. The new ;sync parameter of the playwav command does the
            v1.0 behaviour - it waits for the WAV to finish before resuming
            processing.
            - Implemented synonyms
                    - "define synonyms" block:
                            eg. "word1; word2; word3; word4 = word"
                    - quest.command contains "synonymed" version of command;
                    quest.originalcommand contains original version.
            - New internal functions:
                    - $gettag(room;tag)$ returns parameter of specified tag from
                    specified room. Eg,
                    $gettag(#quest.currentroom#;indescription)$
                    returns the "indescription" tag from the current room - useful
                    for doing custom descriptions.
                    - $lengthof(string)$ returns the length of the specified string.
                    - $left(string;length)$ returns the specified number of
                    characters from the left of the string.
                    - $right(string;length)$ returns the specified number of
                    characters from the right of the string.
                    - $mid(string;start;length)$ returns the middle characters
                    from start up to the length specified. Length can be omitted;
                    Quest will then return the rest of the string from the "start"
                    position.
            - String variable "quest.characters" no longer returns the "You can
            see..." prefix
            - Implemented "enter <variable>" for overriding keyboard input
            temporarily to type something into the specified variable
            - Fixed bug that caused Quest to moan "No such character!" when
            there was just no "speak" tag for the character
            - Improved character and object handling code; should be faster and
            will be able to handle "roaming" objects/characters.
            - Improved numeric variable "setvar <...>" statement - simple
            expressions can now be entered. For example, "setvar <num; %num%+1>"
            will add 1 to the specified variable.

    13/DEC/1998 - QUEST 2.0 ALPHA 1
            - Implemented string variables "quest.characters", "quest.objects",
            "quest.formatobjects", "quest.doorways.out" and
            "quest.doorways.dirs".
            - "Restart this game" on main window now prompts for confirmation
            - Implemented "indescription" tag for rooms for better descriptions.
            - New splash screen
            - New support for completely overriding room descriptions if
            required. By default, the "look" tag is now displayed *after* the
            rest of the room description, rather than within it.
            - Multiple-line statements (using {}) can now be in any "define"
            block (except "define text" blocks)
            - Multiple-line statements (using {}) can now be nested within each
            other.
            - The "not" part of the "if" statement now works correctly when
            using "is". There was a bug in previous versions that the "not"
            part would be ignored by Quest in the case of an "if [not] is"
            condition.
            - Added "clear" user command to clear the text area.
            - New-look "About box"
            - Much improved String Variables window, with resizable columns -
            can be scrolled through or resized to show all string variables
            (bug in v1.0 meant that only the top few could be seen)
                    - Now visible in task bar
            - Objects/etc. list now updated when objects are hidden from play.
            - Fixed problem where a warning would be reported for lines
            consisting solely of spaces/tabs
            - Fixed major bug in object/character show/hide code that caused ALL
            objects/characters in a room to appear/disappear at once!
                            - Also fixed bugs relating to "look" command used on
                            objects and characters
            - Warning no longer given when you try to open a read-only file
            - Much improved error handling - Quest no longer exits when you try
            to open a non-existent file, for example.
            - "quit" and other exiting methods on the main Quest window now send
            you back to the "Welcome to Quest!" window rather than exiting.
            - Game initialisation/restart is cleaner, as all objects etc. from
            the previous game are deleted. This fixes the bug in v1.0 that
            string variables from the previous game remained in the new one,
            for example.
            - Improved "Welcome to Quest!" window - more user-friendly.
            - Progress bar now shows progress of game initialisation.
            - Various interface enhancements.
            - Functions now implemented
                    - "define function" blocks
                    - run functions using $functionname$ in any <> parameters.
            - Numeric variables now implemented
                    - set variables using setvar <>
                    - read variables using %variablename%
                            - invalid variables log an error and return -32767.
                    - new Numeric Variables debug window
            - "for" loops now implemented
            - Custom error messages now implemented with "error" keyword
            in "define game" block.

    07/NOV/1998 - QUEST 1.0
            - removed "Game name" from Welcome dialog. (Inefficient; had to
            parse files selected - and not too useful either).
            - fixed bug that caused problems with "if" statements that didn't
            have an "else" - a different bug to the one "fixed" in Beta 3.
            (Fixed it and broke it again with error checking code...)
            - various changes to Options and "Edit Installed Games" windows.
            - Pictures are now displayed permanently on-top so they can be
            seen during gameplay (!)
            - Picture window sizes more accurately
            - Added (simplified) "Quest" logo to main interface.
            - Added "About Quest" to main menu
            - Modified display of action buttons ("Go here", "Look at" etc.),
            so irrelevant ones aren't shown.
            - Added build no. to About box.
            - Improved help system on "Welcome to Quest!" window
            - Clicking the "X" on the top-right of the "Welcome to Quest!"
            window now prompts for confirmation - it acts in the same way
            as the "Exit Quest" button.
            - Fixed memory leak when Quest was exited from the "Welcome to
            Quest!" window after a game had been played.
            - Sample game's code has been improved for easier reading.
            - Fixed a lot of rather stupid ASL documentation errors.
            - Registered version now available. Two different EXEs for each -
            no functional differences, just different messages and buttons
            in the "About" boxes.
            - Many windows now default to the centre of the screen.
            - Quest gives a warning if run at 640x480 resolution or lower.
            (Quest looks best at 800x600 or better).
            - Quest now has error-handling for attempts to show a non-existent
            picture - Quest will display (and log, if enabled) an error and
            continue rather than quit unexpectedly.
            - Fixed bugs relating to object names - they weren't being saved,
            and probably weren't being hidden etc. properly either, due to a
            bug where the name wasn't stored properly.
            - String variables are now saved in QSG files, along with the other
            game data. Unfortunately this means that QSG files saved with
            earlier versions are no longer compatible (if you try opening an
            old QSG file, Quest will inform you that the file format is
            incompatible).
            - Changed descriptions shown in Explorer of Quest's associated file
            types.
            - Moved "Show string variables" into a sub-menu of the main menu,
            named "Debug".
            - The first room in a game is now executed after the rest of the
            initialisation is complete and the window is displayed. This is
            because if the first room contained a script which activated a
            selection, the selection would come up and the main window would
            not be displayed until the selection had been made, which was
            awkward.
            - The "Output all game text to a file" can no longer be changed
            while a game is in progress, as this caused an error.
            - Changed "Remove" graphic on "Edit Installed Games" window and set
            mask colour on "Welcome to Quest" window so that Quest looks OK
            with non-standard (i.e. non-grey) Windows colour schemes.
            - When the game is started, the main window shows the top of the
            game information rather than the end (which makes more sense,
            surely!)
            - Version now displayed when game information is shown (as
            specified by "game version" tag in "define game" section).

    29/AUG/1998 - QUEST 1.0 BETA 3
            - removed animated arrow from "New Game" dialog
            - implemented user-defined commands
            - implemented list of objects, places and characters for more mouse
            control
            - Pictures now shown in separate window, of the same size as the
            picture.
            - Fixed bug that broke "if" statements that didn't have an "else"
            in them.
            - implemented string variables, with setstring command. Strings can
            be printed in the same way as normal text, by surrounding
            the variable with "#" characters. eg msg <#var1#> prints the
            value in var1.
                            - built-in string variables (beginning with "quest.")
                            contain information on the command the player just
                            typed
                            and the current room.
                            - string variables list shows contents of variables -
                            useful for debugging.
            - implemented "is" in "if" statements, used for comparing strings.
            - "look" can now be followed by a script command.
            - new "displaytext" command to display text section.
            - new keyboard shortcuts:
                    - F12 brings up the last command typed
                    - F11 clears the command
            - some changes to interface fonts and layout
            - new "exec" command runs command just as if player had typed it.
            "normal" parameter prevents infinite loops when user-defined
            commands have been over-ridden.
            - new error-checking routines.
                    - checks for missing < and > characters when file loads
                    - checks for bad "if" statements when they are executed
                    - checks for missing define block titles
            - file icon for ASL/QSG/CAS files included in Quest's EXE file -
            QSCRIPT.ICO no longer needed.
            - Mnemonics now used in many windows, for better keyboard control.
            - "Exit Quest" from the "Welcome to Quest" window now prompts for
            confirmation

    22/AUG/1998 - QUEST 1.0 BETA 2X
            - non-public preview of Beta 3, released to a handful of people.
            NB: Important change in Beta 3 (and later) from 2X:
            If you used this version, user-defined command numbers have been
            improved in B3, and you will need to change #x to #x# throughout
            your ASL code. Variable names can be used instead of numbers.

    16/AUG/1998 - QUEST 1.0 BETA 2A
            - fixed serious error that caused Quest to fail when there were no
            installed games - which is the case when you first use it! Argh!

    16/AUG/1998 - QUEST 1.0 BETA 2
            - fixed bug that caused error when player lost or won - woops!
            - implemented "else" in "if" statement.
            - implemented "ask" condition in "if" statement.
            - implemented "script" tags in "define room" blocks.
            - if no log file specified but error logging enabled, errors are
            logged into a default log file of C:\QUESTLOG.LOG
            - implemented "define selection" sections, with "choose" keyword.
            - implemented "prefix" tag for objects, characters and places.
            - Quest now ignores the word "the" if the player types in something
            such as "look at the shop assistant" - this is now evaluated in
            the same way as "look at shop assistant".
            - implemented "gender" tag. Currently only used when no "speak" tag
            is defined.
            - implemented the "prefix; " syntax for possible places.
            - Quest adds the word "or" before the last place name displayed
            to improve readability. For example, whereas before it might have
            said "you can go to night club, petrol station", with the
            combination of this and the prefixes it can now say "you can go
            to the night club, or the petrol station".
            - employed a variety of cunning tricks to make the interface more
            "interesting" and compact. Option to turn off the "new-style"
            message boxes if you don't like them, also to turn off the new
            look interface in favour of the traditional Windows style.
                - changes to look and feel of main window
                - nicer-looking "Edit 'Installed Games' list" window
            - changed text control on main window to a rich text control - new
            support for text formatting.
            - .CAS and .QSG extensions also associated with Quest, along with
            .ASL
            - Added "Automatically add to 'Installed Games' list" option.
            - Directions "north/south/east/west/place/out" can now be followed
            by script commands.
            - Location now shown in its own box as well as in the main box.
            - Implemented "hidden" objects/characters, so objects and characters
            can leave from rooms and appear in them.
                - new hidechar, showchar, hideobject and showobject
                commands, plus new "hidden" tag (no parameters) for
                objects and characters who are not visible when the game
                starts.
            - Players can now save and load their progress in games with QSG
            files.
            - Added curley-braces support which allows multiple lines of script
            to be executed in a "speak" tag or "if" statement, for example.
                - "if" statements can now therefore be on multiple lines.
                "else" can appear on its own line.
            NB: Mutli-line "if" statements should only be used within
            procedures.
            - Added formatting codes - colourful text. New formatting codes
            include |n which will start a new line in the middle of some
            text, and |xn at the end of text, which will mean the next
            text printed will stay on that same line.
            - Added "Show detailed information with 'LOOK' command" option.
            When enabled, this will repeat the entire detailed room
            description when the player types "LOOK". When disabled, only
            the room's description text (defined by its look <> tag) is
            shown.
            - Lines can be separated by placing two underscores ("__") at the
            end of the first line. You can even split lines in the middle
            of keywords!
            - "Funkier" interface for "New Game" dialog.
                    - implemented "game version/author/copyright/info" tags.
                    - implemented "about" command
                    - nice logo in "About" box

    01/AUG/1998 - QUEST 1.0 BETA 1
            - first public release.