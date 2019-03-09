---
title: "Using 1Writer, Dropbox, & Blink Shell for Writing on iPad Pro"
date: 2019-03-08
layout: post
categories:
  - Working on iPad
tags:
  - iPad Pro
  - Blink Shell
  - ssh
  - Dropbox
  - 1Writer
image: https://res.cloudinary.com/thatmacnerd/image/upload/v1552073760/Writing%20On%20iPad/writing_on_ipad.png
excerpt: It's hard trying to write for a static site on iOS; there are plenty of Markdown writing apps but, with static sites such as this one, there is no dashboard as in a traditional CMS.
description: A bit of an idiosyncratic way of writing posts for and previewing your static sites on iPad.
---

It's hard trying to write for a static site on iOS; there are plenty of Markdown writing apps but, with static sites such as this one, there is no dashboard as in a traditional CMS. You use the command line for everything, including previewing your site.

What I needed in order to move some of my writing off my Mac and to my iPad Pro was a way to be able to get into my Mac without actually *being* at my Mac, and having some way to get into my Mac, spin up a dev server to be able to see my changes live in the Chrome browser on my iPad[^1].

## MacStories Mac Shortcuts and forcing myself to learn ssh

With the last article I wrote here, I shared some of MacStories team's shortcuts, specifically Federico's *fantastic* Mac shortcuts which I modified and posted here on the site, going a bit more in depth for non-technical readers.

Using these shortcuts forced me to finally learn about how to ssh into my Mac, which was surprisingly easy[^2].

I found an article on sshing into a Mac and by looking at the comments and structure of the shortcut, I was able to figure it out quickly. This was the impetus I needed to learn how to use an app I have had on my iPad Pro for some time.

## Blinksh, or Blink Shell, is a game changer

<figure>
    <img class="align-center" src="https://res.cloudinary.com/thatmacnerd/image/upload/v1552084035/Writing%20On%20iPad/new_shell.png" />
    <figcaption style="text-align: center;">
       Blink shell
    </figcaption>
</figure>

One of the best things about Blink is the ability to either ssh into your server or use mosh, or (mo)bile (sh)ell. The difference between these two shells is that ssh is based on a TCP connection which will timeout after a certain period whereas mosh uses a UDP connection to your network so that you can keep the shell connection open. With mosh, it doesn't matter if the connection drops, the app crashes, or you restart, your shell remains in tact[^3]. You can exit your session with `exit`.

<figure>
    <img class="align-center" src="https://res.cloudinary.com/thatmacnerd/image/upload/v1552083645/Writing%20On%20iPad/IMG_3225.jpg" />
    <figcaption style="text-align: center;">
       ssh connection to my Mac
    </figcaption>
</figure>

### Multiple shells for maximum productivity

You can also open multiple shells, sort of like you can with iTerm on your Mac. This way, if I want to write for my three static sites and preview them all at once, I can have multiple shells open and run dev servers in each.

## How this ties in with 1Writer and Dropbox

I use 1Writer to work with posts on my iPad Pro because it allows me to add a folder directly from Dropbox, bypassing the Files app. This is important, because when I ssh into my Mac to create a file, I need to be able to sync that file back to my iPad Pro to be able to view the live preview on my iPad. Dropbox acts as a vessel between both platforms; without it, I wouldn't be able to see the previews over my network on my iPad Pro from the file I created on my iMac.

## Examples

Here are some examples of my workflow.

{% include responsive-embed url="https://www.youtube.com/embed/-C-g6cf5vJs" ratio="16:9" %}

{% include responsive-embed url="https://www.youtube.com/embed/q1HWLT9kpK8" ratio="16:9" %}

[^1]: Yes, I prefer Chrome pretty much everywhere and I don't really care what the Apple community thinks about that.
[^2]: I had this fear of ssh. I thought it was some esoteric thing programmers did that I'd get around to eventually. Thanks to Federico for forcing me to learn it sooner.
[^3]: Having a bit of trouble getting Blink to setup a mosh connection currently. Hope to get it working soon.