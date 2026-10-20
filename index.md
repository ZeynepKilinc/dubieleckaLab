---
---

<div class="home-research">
  <h2 id="our-research">Our Research</h2>
  <div class="home-research-grid">
    <article class="home-research-card">
      <img src="{{ 'images/marrow-he.webp' | relative_url }}" alt="Bone marrow tissue illustration">
      <h3>Aging &amp; Inflammation</h3>
      <p>We investigate how age-related chronic inflammation changes the bone marrow microenvironment and affects the homeostasis and malignant transformation of hematopoietic stem cells.</p>
      <a href="{{ '/projects/' | relative_url }}">Explore our research</a>
    </article>
    <article class="home-research-card">
      <img src="{{ 'images/research-highlights-overview.png' | relative_url }}" alt="Overview of the lab’s blood cancer research">
      <h3>Blood Cancer Stem Cells</h3>
      <p>We study how disease-initiating stem cells interact with their niche to sustain the development, progression, and relapse of myeloproliferative neoplasms.</p>
      <a href="{{ '/research/' | relative_url }}">Read our publications</a>
    </article>
    <article class="home-research-card">
      <img src="{{ 'images/projects-lab-discussion.png' | relative_url }}" alt="Lab members discussing research">
      <h3>Translational Hematology</h3>
      <p>Our work combines stem cell biology, immunophenotyping, and molecular profiling to identify vulnerabilities in malignant cells and inform new therapeutic strategies.</p>
      <a href="{{ '/technologies-and-approaches/' | relative_url }}">Our approaches</a>
    </article>
  </div>
</div>

{% include section.html %}

<div class="home-lab-showcase">
  <div class="home-lab-summary">
    <h2 id="our-lab">Our Lab</h2>
    <p>We study how aging, chronic inflammation, and the bone marrow microenvironment drive blood cancers. Our goal is to identify new ways to target disease-initiating stem cells and prevent relapse.</p>
    <a href="{{ '/team/' | relative_url }}">Meet our team →</a>
  </div>
  <div class="lab-slider" role="region" aria-label="Life in the Dubielecka Lab" aria-roledescription="carousel" tabindex="0">
    <div class="lab-slider-track">
      <figure class="lab-slide"><img src="{{ 'images/lab-group.png' | relative_url }}" alt="Dubielecka Lab group photo"><figcaption>A collaborative community studying blood cancer.</figcaption></figure>
      <figure class="lab-slide"><img src="{{ 'images/projects-lab-discussion.png' | relative_url }}" alt="Lab members discussing research plans"><figcaption>Bringing ideas together to advance hematology research.</figcaption></figure>
      <figure class="lab-slide"><img src="{{ 'images/background.jpg' | relative_url }}" alt="Coro West Building exterior"><figcaption>Our home at the Coro West Building in Providence.</figcaption></figure>
    </div>
    <button class="lab-slider-arrow previous" type="button" aria-label="Previous lab photo">‹</button>
    <button class="lab-slider-arrow next" type="button" aria-label="Next lab photo">›</button>
    <span class="lab-slider-status" aria-live="polite"></span>
  </div>
</div>

{% include section.html %}

## Highlights

{% capture text %}

Our lab brings together trainees, scientists, and clinical collaborators studying age-related myeloid malignancies, inflammatory signaling, and the biology of disease-initiating hematopoietic stem cells.

{%
  include button.html
  link="team"
  text="Meet our lab"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/lab-group.png"
  link="team"
  title="Our Lab"
  text=text
%}
