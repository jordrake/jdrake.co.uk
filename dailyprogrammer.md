---
layout: page
title: Daily Programmer
permalink: /daily-programmer/
---

In an effort to improve and maintain my programming I have am attempting some of the 
[reddit.com/r/DailyProgrammer](http://www.reddit.com/r/DailyProgrammer) challenges. 

{% for challenge in site.data.dailyprogrammer %}
*   [{{ challenge.title }}]({{ challenge.demo }}) ([Source]({{ challenge.source }}))
{% endfor %}