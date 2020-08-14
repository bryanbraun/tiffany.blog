---
ID: 1088
title: 'Drafts 4 for iOS: A Worthy Tool'
# drafts-4-ios-worthy-tool
author: Tiffany White
post_date: 2017-04-01 19:10:21
excerpt: >
  When we think about iOS automation these
  days, we tend to think about
  Workflow.app, which is the most powerful
  and full-featured example of what a
  talented team of developers can do
  within the limitations of iOS. It is
  rightfully the King of Automation on
  iOS.
layout: post
link: >
   
published: true
tags:
  - automation
  - drafts
categories:
  - iOS Automation
---
<a href=" 

When we think about iOS automation these days, we tend to think about [Workflow.app]( 

But before Workflow, there were a few apps that utilized [the x-callback url schemes](https://agiletortoise.zendesk.com/hc/en-us/articles/202771400-Drafts-URL-Schemes) like Editorial and Drafts [^1].

# Drafts, A Great App to Start With Automation

<a href=" 

The backbone of Drafts in the x-callback-url scheme created by Greg Pierce, the creator of Drafts, and Marco Arment, a famed Apple developer.

You can access your Drafts in the inbox. There are 5 tabs across the top: **Inbox**, **Archive**, **Flagged**, **Trash**, and **All**. These tabs are self-explanatory. I tend to flag drafts that I archive and want to come back to later.

<img class="aligncenter wp-image-1084" src=" 

If you trash a draft, you have the option to restore it, if you so choose, as shown here.

<a href=" 

The premise of x-callback-urls are linking to other apps, and parts of other apps with a url and parameters.

For example, take this url:

`drafts4://x-callback-url/create?text=Hello%20World&amp;action=Copy%20to%20Clipboard`.

The `drafts4://` is the system url for an app. If you type this into Safari, it will open Drafts.

In this example, we are creating a new draft with <code>create?</code> and adding the url encoded text [^2]. Then, the <code>&amp;action</code> is something we want to *do* with that text, which in this case, is copying the text, <code>Hello World</code> to the clipboard.

# Actions

The power of Drafts is in the actions.

Actions utilize the `x-callback-url` scheme I talked about above to give you near unlimited possibilities for passing text around, which is the only thing it can do, whereas Workflow can tap into other system APIs for a drag and drop experience unmatched on iOS.

You can find some default actions within the actions panel in Drafts which you can get to by tapping the Drafts icon on the top right of the app.

You can have a near limitless amount of actions and you can chain actions together using the `x-callback-url` protocol.

<a href=" 

If you tap the plus button in the Actions panel, you will be taken to a screen where you can create your own actions or visit the Actions Directory, where Agile Tortoise has compiled, with the help of users, a list of Actions that are freely available to you. Just search for an action and it will take you to the specified action’s page. Hit install and it will open up and Drafts and give you a prompt, asking if you would like to install it. Hit ok and it will be there for you to use in Drafts.

<a href=" 

If you decide to make your own Actions, you’ll be greeted with a screen with a few options.

<a href=" 

You can name, give a color to, and add steps to your action [^3] , and adding them to Action Groups, which you can access in the Actions Panel. By default, your actions will be placed in the **All** tab.

## Choosing Steps

Tapping on Steps brings you to a screen with lots of options, from Email, Clipboard, and Social actions, as well as cloud services.

<a href=" 

You can choose whatever you like here, and Drafts will notify you on the Actions success or failure when you run your action. Check out the [documentation](https://agiletortoise.zendesk.com/hc/en-us/categories/200192004-Drafts-4) to learn about errors and ways to chain actions.

Once you run an action, you can return to Drafts which is basically the `callback`function of the protocol.

## Advanced Action Steps: Action Sets

Action Sets are a whole other way to work with Drafts that makes it more powerful than it already is.

<a href=" 

You can not only chain steps together you can create a prompt to prompt you to select an action you created and added to the Prompt menu, and Drafts will execute your choice.

So how do you do this?

The key to this is using this URL when you are creating new actions under the URL selection:

`drafts4://x-callback-url/open?uuid=[[uuid]]&amp;action=[[prompt_button]]`

Here are the steps I took to create the set I have here:

<img class=" wp-image-1079 aligncenter" src=" 

Choose you action steps. You should choose *URL* and *Prompt*. But first, you should set up your prompt.

<a href=" 

You will need to type in the actions you wish to add to the set **the exact same as you have them in general**, separated by a pipe character, or `|`.

<img class=" wp-image-1074 aligncenter" src=" 

The you set up the URL:

<a href=" 

In the end, you should have something that looks like this:

<a href=" 

## Just Scratching the Surface

There are a lot of ways you can utilize Drafts in your workflow. I can’t cover them all here, but be sure to check out [other](https://www.macstories.net/reviews/drafts-4-review/) [articles](http://www.macdrifter.com/2016/01/getting-drafts-right-for-2016.html) on the [topic](https://nahumck.me/using-action-sets-drafts/).

How are you using Drafts? If you’re not using it, why not?

[^1]: Workflow, too, uses x-callback-urls in the best way possible.
[^2]: Spaces in urls need to be [url encoded](http://www.permadi.com/tutorial/urlEncoding/).
[^3]: Steps being url actions, chained together.
