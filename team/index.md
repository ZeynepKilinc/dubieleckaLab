---
title: Team
nav:
  order: 3
  tooltip: About our team
---

# {% include icon.html icon="fa-solid fa-users" %}Team

<div class="team-page"></div>

The Dubielecka Lab brings together trainees, scientists, and clinical collaborators studying age-related hematologic malignancies, inflammatory signaling, and the biology of disease-initiating hematopoietic stem cells.

{% include portrait.html lookup="patrycja-dubielecka" %}
{% include portrait.html lookup="anna-chorzalska" %}
{% include portrait.html lookup="makayla-pardo" %}
{% include portrait.html lookup="janet-joseph" %}
{% include portrait.html lookup="james" %}
{% include portrait.html lookup="valeria-brown" %}
{% include portrait.html lookup="cristina-huezo-arguello" %}
{% include portrait.html lookup="zeynep-kilinc" %}
{% include portrait.html lookup="melanie-villalobos" %}
{% include portrait.html lookup="john-jack-pulford" %}

## Alumni

<div class="past-members">
  {% for member in site.data.past_members %}
    {%
      include past-member.html
      image=member.image
      name=member.name
      lab_position=member.lab_position
      next_position=member.next_position
      left=member.left
      link=member.link
      placeholder=member.placeholder
    %}
  {% endfor %}
</div>
