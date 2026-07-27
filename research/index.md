---
title: Publications
nav:
  order: 1
  tooltip: Published works
---

# {% include icon.html icon="fa-solid fa-microscope" %}Publications

The Dubielecka Lab studies how aging, chronic inflammation, and the bone marrow microenvironment shape hematopoietic stem cell behavior and the development, progression, and relapse of blood cancers. Our work focuses on myeloproliferative neoplasms and other hematologic disease settings where malignant stem cells interact with immune and stromal signals in their niche.

The lab's translational goal is to identify vulnerabilities that can be used to target disease-initiating malignant hematopoietic stem cells while preserving normal blood formation.

{% include section.html %}

## Recent Highlights

{% include citation.html lookup="doi:10.1182/blood.2024027125" style="rich" %}

{% include citation.html lookup="Impact of statin use on cardiovascular and hematologic outcomes" style="rich" %}

{% include citation.html lookup="Low serum cholesterol is a biomarker" style="rich" %}

{% include citation.html lookup="Alterations in the humoral immunophenotype" style="rich" %}

{% include section.html %}

## Research Themes

{% capture text %}

The lab investigates how age-related inflammatory signaling and the tumor microenvironment influence hematopoietic stem cell homeostasis and malignant transformation.

{% endcapture %}

{%
  include feature.html
  title="Aging, inflammation, and blood cancer"
  image="images/bonaletal.png"
  text=text
%}

{% capture text %}

Recent work highlights low-frequency JAK2V617F clones, cardiovascular comorbidities, immune alterations, and complement signaling as linked problems in myeloid malignancy biology.

{% endcapture %}

{%
  include feature.html
  title="Myeloproliferative neoplasms"
  image="images/photo.jpg"
  text=text
  flip=true
%}

{% include section.html %}

## Funding and Programs

<div class="funding-logos">
  <a href="https://www.nih.gov/" aria-label="National Institutes of Health">
    <img src="{{ 'images/funding/nih.png' | relative_url }}" alt="National Institutes of Health">
  </a>
  <a href="https://legorreta.brown.edu/" aria-label="Legorreta Cancer Center">
    <img src="{{ 'images/funding/legorreta.png' | relative_url }}" alt="Legorreta Cancer Center">
  </a>
  <a href="https://rifoundation.org/" aria-label="Rhode Island Foundation">
    <img src="{{ 'images/funding/rhode-island-foundation.svg' | relative_url }}" alt="Rhode Island Foundation">
  </a>
  <a href="https://www.hematology.org/" aria-label="American Society of Hematology">
    <img src="{{ 'images/funding/ash.svg' | relative_url }}" alt="American Society of Hematology">
  </a>
</div>

{% include section.html %}

## Publications

{% include search-box.html %}

{% include search-info.html %}

{% include list.html data="citations" component="citation" style="rich" %}
