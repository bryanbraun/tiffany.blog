#! /usr/bin/env node

const fs = require('fs');
const slugify = require('slug');
const title = process.argv[2];

if (!title) {
  throw 'a title is required!';
}
const slug = slugify(title.toLowerCase());
const dir = `./_homescreens/${slug}`;

if (!dir) {
  throw 'this directory does not exist!';
}

fs.writeFileSync(
  `${dir}.md`,
  `---
title: "${title}"
image:
  path:
  thumbnail:
---`,
  function(err) {
    if (err) {
      return console.log(err);
    }
    console.log(`${title} was created!`);
  }
);
