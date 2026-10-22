---
permalink: /blog/
title: News
nav:
  order: 7
  tooltip: Lab news and highlights
---

## Highlights

<div class="news-highlight-feature">
  <div class="news-highlight-copy">
    <p class="news-highlight-label">From our lab</p>
    <h3>Research, milestones &amp; community</h3>
    <ul>
      <li>Congratulations to Makayla Pardo on defending her thesis!</li>
      <li>Congratulations to Melanie Villalobos on passing her qualifying exam!</li>
      <li>Our lab presented research at the Legorreta Cancer Center conference.</li>
    </ul>
    <a href="#lab-news">Explore lab news →</a>
  </div>
  <div class="lab-slider news-highlight-slider" role="region" aria-label="Lab highlights photos" aria-roledescription="carousel" tabindex="0">
    <div class="lab-slider-track">
      <figure class="lab-slide"><img src="{{ '/images/news/michael-thesis-poster-1.jpg' | relative_url }}" alt="Michael presenting his thesis poster"></figure>
      <figure class="lab-slide"><img src="{{ '/images/news/coffee-break-with-lab-1.jpg' | relative_url }}" alt="Lab members gathering for a coffee break"></figure>
      <figure class="lab-slide"><img src="{{ '/images/news/community-bakeoff-birthday-1.jpg' | relative_url }}" alt="Lab community bakeoff and birthday celebration"></figure>
    </div>
    <button class="lab-slider-arrow previous" type="button" aria-label="Previous highlight photo">‹</button>
    <button class="lab-slider-arrow next" type="button" aria-label="Next highlight photo">›</button>
    <span class="lab-slider-status" aria-live="polite"></span>
  </div>
</div>

{% include section.html %}

## Lab News

{% include search-box.html %}

{% include tags.html tags=site.tags %}

{% include search-info.html %}

{% include list.html data="posts" component="post-excerpt" filter="hidden != true" %}
