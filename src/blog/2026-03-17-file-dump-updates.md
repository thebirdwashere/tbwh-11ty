---
layout: base.njk
title: File Dump updates and other fun server stories!
date: 2026-03-17T19:11:23.384Z
description: no, the site isn't dead yet.
tags:
    - post
categories: []
---

## {{ description }}

### First post of 2026! Wow!

So, I kinda fell off the website building bandwagon again, as per usual.

Strangely it took me realizing that my home server probably has not been fully updated since I migrated it to its new hardware to get myself back into this stuff, so I finally got around to doing that, including setting up Proxmox to use non-enterprise repos, which I didn't even know you needed to do.

After that I realized the same thing was true for my web server, which became a bit tricky as apparently I'm just horrendously bad at maintaining access to it, so when I went to run "apt upgrade" my VPN docker died on me.....yeah. And I had no access to port forwarding settings either.

Anyways, that's all done now and it gave me an itch to play around with some new software, I remembered that I had heard of a file server I thought seemed pretty interesting and possibly actually useful called Copyparty, so I got that set up, for stuff like file sharing and also the Fun Stuff file dump avaliable [here](/fs-prompt)

I'm still offering the classic NGINX directory listing alongside Copyparty, it's not super useful since Copyparty offers a pretty similar experience for older browsers, but maybe someone will find out that that interface doesn't work lol.

Hopefully I can also get some other cool stuff put up on there eventually, also thinking of doing some more general photography stuff possibly on the site alongside bunposting, gotta find more cool stuff to do with this site since sometimes I just can't think of anything to write.


#### Created on {{ page.date | asPostDate }}