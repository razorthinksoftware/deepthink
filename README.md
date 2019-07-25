# Deepthink [![Demo](https://img.shields.io/badge/julia-demo-green.svg)](http://kingspp.github.io)


Razorthink's inhouse RSS Feed! What's the happening trend in the domain of Artificial Intelligence?

The idea is to create a bucket of recent trends and patterns.

Objectives,

* Simple yet intuitive UI
* Posting should be obvious and easy [Google Sheets](https://docs.google.com/spreadsheets/d/1MVLQO341_zALN4gmkMLMwiC5_ZamJ7DhGiHACmzCpJA)!
* Frugal innovation to derive zero-cost solution

Learn more and contribute on [GitHub](https://github.com/razorthinksoftware/deepthink).


Configuration:

![Configuration](https://github.com/razorthinksoftware/deepthink/trigger.png)

User:
* User adds / updates content in  [Google Sheets](https://docs.google.com/spreadsheets/d/1MVLQO341_zALN4gmkMLMwiC5_ZamJ7DhGiHACmzCpJA)!
* The sheets triggers onChange event and executes [publishToTravis](https://github.com/razorthinksoftware/deepthink/code.gs) function.
* Travis run [nodejs script](https://github.com/razorthinksoftware/deepthink/get_data.js) configured to fetch the posts from google sheets and create a markdown files.
* The jekyll site auto updates on the changed / added md files from _posts folder.

Developer:
* Developer modifies the [package](https://github.com/razorthinksoftware/deepthink)
* On push, an event is triggerd in github using webhooks.
* The event is published to Travis CI.

Some fun facts about the setup of this project include:

* Built using [Jekyll](http://jekyllrb.com).
* Developed on GitHub and hosted for free on [GitHub Pages](https://pages.github.com).
* Free DB host - [Google Sheets](https://docs.google.com/spreadsheets/d/1MVLQO341_zALN4gmkMLMwiC5_ZamJ7DhGiHACmzCpJA).
* Appreciate [TravisCI](https://travis-ci.org/)'s help for auto-sync! 
* Base template by [Hyde](https://github.com/poole/hyde) and [Poole](https://github.com/poole/poole).
* Quotes curated by [Forismatic](http://forismatic.com)!
* Support for Open Graph Protocol using [iFramely](https://iframely.com/).
* [Disqus](https://disqus.com/) for comments.
* Site Traffic analysis by [Google Analytics](https://analytics.google.com/analytics/web/).





To serve jekyll pages:

```bash

# Init Op Only
npm install
bundle install

# To run locally
bundle exec jekyll serve
 ```
