---
layout: post
title: That's not a user story
comments: true
---

I saw a user story that looked like this:

> As a back-end service, I want to send the correct data about the widgets to the front-end, so the front-end displays the correct widget information.

Wait, when did a back-end service ever want do to anything? Has it gained sentience?

Now, user stories are great. They help us to build the right thing, by thinking about the user of our application and what they are trying to do.

Writing things down is also great. Despite it sounding strange, I'm glad that we have the user story about the back-end service, because it's much better than not having any spec about what the back-end service should be doing for this feature, or indeed forgetting that somebody needed to do some work at all on the back-end.

But did it really need to be a user story? Will we write better software by feeling empathy for the machine? Our instincts should say no, because the user - the real end-user of our application - doesn't care what about back-end services are doing. They only care about what they see on the device in their hand.

The purpose of a user story is to help us step back from a problem - before jumping into technical details, let's work out what the user really needs, and then we can build only what is necessary to get us there. After writing user stories, we might send them to developers or business analysts to spec out a feature, to get a more detailed idea of how it should work.

The problem here has come from mixing things up - instead of working out what the user's problem is (the user needs to see the right thing in the app), we have dived straight into a solution (the back-end service needs to provide some data to the app), and then put that solution within a template "As [user], I want [something], because [some reason]". But if we're writing a technical spec, we don't need to fit this template - it is perfectly OK to write "the back-end service needs to send some data to the front-end", because we should already have written some user stories about the real user. Real user stories might look like:

> As a user who has not opted into the new widget feature, I should not see any widgets.

> As a user who has chosen to have bells on my widget, I should see a bell button on every widget that is displayed.

This is not the first time I have seen things crowbarred into user stories. At a previous job I worked for a small consulting firm, and we would often get requests like this:

> Please update the Gizmo table so that all entries processed after 18th January have a DoodadIdentifier of 5.

Somebody had obviously got the Agile religion, and decided that all client requests now needed to be in the form of user stories. No longer would we just be doing what the client told us to do! We would get real insight into their problems, so we could propose the most effective solution for their needs!

Of course, all that really happened is that requests would now come in looking like this instead: 

> As the client, please update the Gizmo table so that all entries processed after 18th January have a DoodadIdentifier of 5, because I want you to do it.