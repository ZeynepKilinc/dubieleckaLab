---
---

<section class="home-lab-intro">
  <div class="home-lab-copy">
    <h1 id="our-lab">Our Lab</h1>
    <p>Advancing age is the single most significant risk factor for the development of most cancers, including hematological malignancies. As the aging of the human population accelerates and the associated health burden expands, it is critical to uncover the molecular underpinnings of age-related neoplasms in order to develop effective therapeutic strategies. Our laboratory focuses on interrogating the effects of age-related chronic inflammation on the malignant transformation of hematopoietic stem cells leading to the development of blood neoplasms.</p>
    <p>We are interested in outlining how the aging microenvironment affects homeostasis of hematopoietic stem cells and the blood-producing system as a whole. Reciprocally, we are also interested in assessing how malignant stem cells affect and harness the microenvironment to support their systemic retention and blood cancer recurrence. Our ultimate goal is that our findings inform new therapeutic strategies to eradicate disease-initiating malignant hematopoietic stem cells.</p>
  </div>
  <div class="home-lab-carousel" aria-label="Dubielecka Lab photo display">
    <img src="{{ 'images/lab-group.png' | relative_url }}" alt="Dubielecka Lab group photo">
    <img src="{{ 'images/projects-lab-discussion.png' | relative_url }}" alt="Lab members discussing research plans">
    <img src="{{ 'images/background.jpg' | relative_url }}" alt="Coro West Building exterior">
  </div>
</section>

{% include section.html %}

## Highlights

{% capture text %}

We study how age-related chronic inflammation and the tumor microenvironment influence hematopoietic stem cells, blood cancer-initiating stem cells, and the development, progression, and relapse of myeloproliferative neoplasms.

{%
  include button.html
  link="research"
  text="See our publications"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/research-highlights-overview.png"
  link="research"
  title="Our Research"
  text=text
%}

{% capture text %}

Our projects combine translational hematology, stem cell biology, immunophenotyping, and molecular profiling to understand how malignant clones and their microenvironment sustain blood cancer progression and recurrence.

{%
  include button.html
  link="projects"
  text="Browse our projects"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/projects-lab-discussion.png"
  link="projects"
  title="Our Projects"
  flip=true
  style="bare"
  text=text
%}

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
