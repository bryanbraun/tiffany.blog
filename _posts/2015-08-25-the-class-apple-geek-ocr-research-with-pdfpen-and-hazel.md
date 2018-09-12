---
ID: 237
title: OCR Research with PDFPen and Hazel
author: Tiffany White
post_date: 2015-08-25 23:25:47
layout: post
link: >
  https://thatmacnerd.com/the-class-apple-geek-ocr-research-with-pdfpen-and-hazel/
published: true
tags: uncategorized
categories:
  - Mac Automation
---
&nbsp;

<img class="aligncenter size-full wp-image-514" src="https://thatmacnerd.com/wp-content/uploads/2015/08/hazel-hero.png" alt="hazel-hero" width="412" height="259" />

&nbsp;

I have a lot of productivity apps that I use, perhaps my vice. But still, I can get work done quickly and efficiently. Here's my setup to OCR pdfs I find on the internet and import them automatically to my reference managers of choice.

<strong>What you need</strong>
<ol>
 	<li>Hazel</li>
 	<li>PDFPen</li>
 	<li>Papers</li>
 	<li>(Optional) DEVONthink Pro</li>
 	<li>AppleScript</li>
</ol>
<strong>How it works</strong>
<ol>
 	<li>Open Hazel Preference Pane and click the plus in the bottom right corner to add a folder to watch. Click the plus in the window next to that to add a rule. You can name it OCR My Research or whatever you like.</li>
 	<li>Name your rule. Then follow these steps:
<ol>
 	<li>Choose "If 'all' conditions are met"</li>
 	<li>Choose "Kind" is "PDF"</li>
 	<li>Then below choose "Do the following to the matched file or folder: "Run AppleScript". Choose the embedded AppleScript and paste this in</li>
</ol>
</li>
</ol>
<pre><code>tell application "PDFpen"
    open theFile as alias
    tell document 1
        ocr
        repeat while performing ocr
            delay 1
        end repeat
        delay 1
        close with saving
    end tell
    tell application "PDFpen"
        quit
    end tell
end tell</code></pre>
<span style="line-height: 1.5;">Next, choose "Open" in application "Papers". Do the same when choosing your next condition only open in DEVONthink.</span>
<ol>
 	<li>
<ol>
 	<li>(Optional) I like to move my pdfs once I've OCR'd them and have imported them into my databases. I have Research folders all over my Mac as our school uses Box.com for a storage provider. I also use Dropbox and iCloud Drive for important documents and use a nifty AppleScript to keep them in sync. Anyway, the next thing I do is move the PDF after Hazel opens it in the two apps. Choose "Move" to folder "Whatever your folder name is".</li>
</ol>
</li>
</ol>
Thanks to <a href="http://katiefloyd.com/blog/automatically-ocr-documents-with-hazel-and-pdfpen">Katie Floyd</a> of Mac Power Users for the modified AppleScript. All in all, your setup should look something like this:<a href="https://thatmacnerd.com/wp-content/uploads/2015/08/Screenshot-2015-08-25-3.jpg"><img class="aligncenter wp-image-239 size-large" src="https://thatmacnerd.com/wp-content/uploads/2015/08/Screenshot-2015-08-25-3-1024x749.jpg" alt="Screenshot 2015-08-25-3" width="760" height="556" /></a>

&nbsp;
