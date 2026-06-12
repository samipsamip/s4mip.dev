---
title: WOW Product Image Finder
description: A small utility that fetches any Woolworths product's image straight from the CDN, given its product code.
order: 3
problem: The RF devices used in Woolworths' online department show pickers a product ID but no image. Finding the right item from just an ID, a name, and an aisle location is slow and error-prone, and the devices have no capability to display pictures.
highlights:
  - One-input lookup, product code in, product image out
  - Resolves images directly from the Woolworths CDN
  - Used daily on the floor by me and countless colleagues
stack:
  - JavaScript
  - HTML
  - CSS
  - Vercel
github: https://github.com/comingback2life/wow-product-image-finder
live: https://wow-product-image-finder-comingback2life.vercel.app
cover: ../../assets/wow-image.png
coverAlt: The Woolworths Image Finder interface, a single product ID input and a Find Image button
---

I built this while working in Woolworths' online department. Our RF devices showed only product IDs, so identifying an unfamiliar product meant guessing from a name and a location. This tool closed that gap: type the product code into your phone, and it resolves the image directly from Woolworths' CDN and displays it instantly.

It helped me every day on the job, and countless colleagues who faced the same friction ended up relying on it too.

It's also deliberately tiny: plain JavaScript, HTML, and CSS, deployed on Vercel. Sometimes the right amount of engineering for a daily problem is very little.
