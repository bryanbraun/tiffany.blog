---
title: "Automating macOS with iOS and Siri Shortcuts"
date: 2019-02-16
layout: post
categories:
  - Mac Automation
tags:
  - Shortcuts
  - iOS automation
  - Keyboard Maestro
  - Applescript
  - ssh
image: https://res.cloudinary.com/thatmacnerd/image/upload/v1550310909/Automating%20macOS%20with%20iOS/automating_macos_from_ios.png
excerpt: "We can pretty much call Federico Viticci a programmer at this point. He's become a master of automation in a few short years.
This time, he figured out how to script and automate macOS with iOS and Shortcuts. The keys to all this are ssh, Keyboard Maestro, and BetterTouchTool."
description: Federico Viticci has done it again. This is how you automate your Mac...from iOS.
---

We can pretty much call Federico Viticci a programmer at this point; he's become a master of automation in a few short years.

This time, he figured out how to script and automate macOS with iOS and Shortcuts. The keys to all this: ssh, Keyboard Maestro, and BetterTouchTool.

Here, I am going to summarize the article and share with you my modified shortcuts, most of which were taken from [MacStories Shortcuts Archive](https://www.macstories.net/shortcuts/#mac).

These scripts start a macro over ssh, while setting my lights to a specific color, opening and positioning apps, and setting a Toggl timer.

{% include toc %}

## Getting Started {#id}

[Keyboard Maestro](https://www.keyboardmaestro.com/main/) is the swiss army knife of macOS automation.

It allows you to embed Applescripts, JSA[^1], and do routine things like launch apps, move windows, based on triggers. These could be keyboard shortcuts, typed strings, time based, login based— there's too many to list here.

For this particular task, we are going to setup Keyboard Maestro to open a few apps, position them, and run some Applescripts based on BetterTouchTool actions. You'll need to purchase the full version of BetterTouchTool, which will receive updates for 2 years, but it is only $7.50 US. Not too bad.

From there, we'll setup using ssh to login to your Mac to run these Keyboard Maestro scripts with iOS and Shortcuts.

## Setting up Keyboard Maestro {#id}

You can create a new macro and call it whatever you want, assign it whatever trigger you want as well. It doesn't matter at this point. In the following example, I have a macro called *Coding Time* that I named after the shortcut I would create when setting this up on Shortcuts on iOS.

It opens Chrome, brings it to the front, pauses until Chrome loads, and opens a couple tabs with specific urls.

![](https://res.cloudinary.com/thatmacnerd/image/upload/v1550306680/Automating%20macOS%20with%20iOS/Screenshot-2019-02-16_03-19-43_AM.png)

In this next example, Keyboard Maestro selects the 2nd tab in the new Chrome window, pauses for 1 second, maximizes the window and pauses for another second before opening my text editor/IDE VS Code. There's another brief pause, then it executes some Applescripts I have in a `Scripts` folder in my home directory.

![](https://res.cloudinary.com/thatmacnerd/image/upload/v1550306680/Automating%20macOS%20with%20iOS/Screenshot-2019-02-16_03-20-03_AM.png)

The final touch is opening my code note taking app, Quiver and maximizing it.

![](https://res.cloudinary.com/thatmacnerd/image/upload/v1550306685/Automating%20macOS%20with%20iOS/Screenshot-2019-02-16_03-20-19_AM.png)


## Setting up BetterTouchTool {#id}

Navigating over to the Advanced Gestures and Triggers tab and selecting the Keyboard tab, you can add a new shortcut or key sequence. There is a button with the same name that you can press to add whatever action you want.

In order to add an action sequence, click the **Attach Additional Action** button to chain actions together. In this example, I am launching my terminal emulator, iTerm, moving it to the next monitor, amd maximizing the window. I am doing the same thing for different app sequences.

![](https://res.cloudinary.com/thatmacnerd/image/upload/v1550306683/Automating%20macOS%20with%20iOS/Screenshot-2019-02-16_03-20-45_AM.png)

Now that we have this setup, we can right click on an action sequence to get the UUID of the sequence. We need this to execute our BetterTouchTool Applescripts.

Here is an example of one of my BetterTouchTool Applescripts:

```applescript
tell application "BetterTouchTool"
	execute_assigned_actions_for_trigger "070EFD1D-BFAB-41F9-8352-3B1F7BE6D9FE"
end tell
```

## Running scripts over ssh {#id}

Here is the fun part where Shortcuts comes in.

{% notice warning %}
It is not within the scope of this article to tell you how to enable sshing into your Mac. [Here is a really good article](https://www.booleanworld.com/access-mac-ssh-remote-login/) that covers this.
{% endnotice %}

### Creating a timer with Toggl

This goes along with starting my day. I want to create a timer with Toggl which I will eventually export and import to my time tracker of choice on the Mac, [Timing](https://timingapp.com/).

Here is what this looks like in Shortcuts:

![](https://res.cloudinary.com/thatmacnerd/image/upload/v1550378695/Automating%20macOS%20with%20iOS/timer_shortcuts.png)

![](https://res.cloudinary.com/thatmacnerd/image/upload/v1550379388/Automating%20macOS%20with%20iOS/toggl_shot_shortcuts.png)

There are some intermediate steps, but if you just want to get the shortcut, click on the *Start Work Timer* below to import into Shortcuts to play around with it.

### Using ssh to login to your Mac and run your macro

If you went over the article in the notice above, following these instructions shouldn't be too hard.

- Enter the *host*, *port*, *user*, which is your home folder/user name, and your *password*
- Use the following Applescript, putting whatever the name of your macro is in Keyboard Maestro:

```applescript
osascript -e 'tell application "Keyboard Maestro Engine"
    do script "Coding Time"
end tell'
```
- If you have wifi connected lights, pick a scene in HomeKit or another shortcut. If you don't, no worries; you can skip this part.
- You can include some text for Siri to speak as I have done or not.

![](https://res.cloudinary.com/thatmacnerd/image/upload/v1550378695/Automating%20macOS%20with%20iOS/coding_time_shortcuts.png)

Adding this to Siri is a good way to trigger this shortcut with your voice as I have done here:


{% include responsive-embed url="https://www.youtube.com/embed/pZiJgM_M9S0" ratio="16:9" %}

## Other fun things

You can trigger iTunes from your iOS device with Shortcuts, Siri, and Applescript, much like I have done here:

{% include responsive-embed url="https://www.youtube.com/embed/t2neHFOaYtA" ratio="16:9" %}

Here is what the shortcut looks like:

![](https://res.cloudinary.com/thatmacnerd/image/upload/v1550378695/Automating%20macOS%20with%20iOS/choose_itunes_playlist_shortcuts.png)

## Available Shortcuts

The list of shortcuts mentioned in this article plus a few others.

{% notice info %}
[Start Work Timer](https://www.icloud.com/shortcuts/8aacb7c0d4d5493888339ecd521da34d)
{% endnotice %}

{% notice danger %}
[Start Coding Routine](https://www.icloud.com/shortcuts/6826e3c1ff164c0eae9076bf35eb97f0)
{% endnotice %}

{% notice success %}
[Toggle iTunes](https://www.icloud.com/shortcuts/24b2c7281d144fb8951b7c22034f9182)
{% endnotice %}

{% notice warning %}
[Play iTunes Playlist](https://www.icloud.com/shortcuts/cb6a48990eab4b39a104cf8ff0429acc)
{% endnotice %}

{% notice info %}
[iTunes Current Song](https://www.icloud.com/shortcuts/aa83fd3b7b6243c78c93dc67b5136ab9)
{% endnotice %}


[^1]: JavaScript for Automation