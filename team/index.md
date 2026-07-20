---
title: Team
nav:
  order: 3
  tooltip: About our team
---

{% include portrait.html lookup="patrycja-dubielecka" %}
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
      current_position=member.current_position
      next_position=member.next_position
      left=member.left
      link=member.link
      placeholder=member.placeholder
    %}
  {% endfor %}
</div>

<div class="team-contribution contribution-callout">
  <p>Lab members can submit or update their profile details here.</p>
  <a class="contribution-button" href="https://forms.gle/kPJwxcjeDiJPEpaGA">Team member form</a>
</div>
