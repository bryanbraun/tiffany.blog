---
ID: 1236
post_title: >
  Airmail Gets Deeper Integration with
  DEVONthink
post_name: airmail-integration-devonthink
author: Tiffany White
post_date: 2017-05-06 01:22:13
post_excerpt: >
  Airmail finally adds DEVONthink Pro
  Office support to its Mac App.
layout: post
link: >
  https://thatmacnerd.com/airmail-integration-devonthink/
published: true
tags:
  - Airmail
  - DEVONthink
categories:
  - News
---
<img class="aligncenter wp-image-1202" src="https://thatmacnerd.com/wp-content/uploads/2017/05/IMG_3403-1024x643.jpg" alt="Airmail" width="625" height="393" />

Airmail finally adds DEVONthink Pro Office support to its Mac App.

According to the [Devonian Times](http://blog.devontechnologies.com/2017/05/airmail-3-2-5-adds-devonthink-support/):

> Selected email messages can be sent to DEVONthink’s inbox. They are saves as plain text documents and include a link back to the original message in Airmail.

Unfortunately for us heavy Airmail and DEVONthink users, the emails are saved as plain text with a link back to the original message. It's still not up to the level of Mail.app. Hopefully Bloop will rethink the integration later on in Airmail's development pipeline.

## iOS Integration

<img class="aligncenter wp-image-1194" src="https://thatmacnerd.com/wp-content/uploads/2017/05/Image-5-5-17-3-55-PM.jpeg" alt="Airmail_iOS" width="417" height="366" />

DEVONthink on iOS has a deeper integration with Airmail with DEVONthink's advanced automation [^1].

You can add a custom action in the Settings, something like *Add to DEVONthink*. You would need to select the *Open URL* action and add this URL scheme:

`x-devonthink://createhtml?title=[message_subject]&source=%3Cp%3E%3Cstrong%3EFrom%3A%3C%2Fstrong%3E%20%3Ca%20href%3D%22mailto%3A[message_sender]%22%3E[message_sender_name]%3C%2Fa%3E%3Cbr%2F%3E%0A%3Cstrong%3ESubject%3A%3C%2Fstrong%3E%20[message_subject]%3Cbr%2F%3E%0A%3Cstrong%3ELink%3A%3C%2Fstrong%3E%20%3Ca%20href%3D%22[message_linkback]%22%3E[message_linkback]%3C%2Fa%3E%20%3C%2Fp%3E%0A%0A%3Cp%3E[message_html]%3C%2Fp%3E`

Add to your swipes [^2] or however you'd like to access the action. The resulting email in DEVONthink looks like this:

<img class="aligncenter wp-image-1192" src="https://thatmacnerd.com/wp-content/uploads/2017/05/Image-5-5-17-4-08-PM-576x1024.jpeg" alt="Devonthink_Airmail" width="238" height="423" />

The integration with iOS seems much farther along than that of the Mac. This is interesting to see the Mac become a second class citizen for Bloop.

[^1]: The updated advanced URL schemes help you to accomplish this.
[^2]: I would add it as a swipe action if you're archiving emails in DEVONthink often.