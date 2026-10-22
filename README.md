Visit **[zeynepkilinc.github.io/dubieleckaLab](https://zeynepkilinc.github.io/dubieleckaLab)** 🚀

# Dubielecka Lab website — editing guide

[View the live website](https://zeynepkilinc.github.io/dubieleckaLab/)

## Find a page by its website name

Open the folder below, then open **index.md** to edit the page text. On GitHub, click the pencil button to edit a file. Preview changes locally before publishing when possible.

| Website page or section | File to edit |
| --- | --- |
| Homepage — banner, Our Research, Our Lab slider, funding logos | [homepage/index.md](homepage/index.md) |
| Research — Basic Science, Translational Research, Clinical Research, Technologies and Approaches | [research/index.md](research/index.md) |
| About → Our Mission | [our-mission/index.md](our-mission/index.md) |
| About → Our Team — featured PI, team order, alumni section | [our-team/index.md](our-team/index.md) |
| About → Collaborators | [collaborators/index.md](collaborators/index.md) |
| About → Opportunities | [opportunities/index.md](opportunities/index.md) |
| Discoveries | [discoveries/index.md](discoveries/index.md) |
| Publications — Highlights and publication list | [publications/index.md](publications/index.md) |
| News — Highlights and photo slider | [news/index.md](news/index.md) |
| Contact | [contact/index.md](contact/index.md) |

About is a dropdown, not a separate page. Its menu is in [_includes/about-nav.html](_includes/about-nav.html). The Clinical Translation and Collaborations page is currently hidden from navigation. `homepage-ver2` is an older alternate design.

## People, publications, and news entries

- **Individual biographies:** [_members/](_members/). Each file is named after the person; James He is `james.md`. This special Jekyll folder name lets the site generate profile pages automatically.
- **Alumni cards:** [_data/past_members.yaml](_data/past_members.yaml). A biography also lives in `_members/`.
- **Individual news stories:** [_posts/](_posts/), named with a date and story title. The News page collects these automatically.
- **Publication details and custom images:** [_data/sources.yaml](_data/sources.yaml). `_data/citations.yaml` is generated; persistent edits belong in `sources.yaml`.
- **Bold lab-author names:** [_plugins/lab_authors.rb](_plugins/lab_authors.rb), using member and alumni records.

## Images and visual appearance

| What to change | Location |
| --- | --- |
| People’s photos | `images/members/` and the image path in their `_members/` file |
| Research and technology pictures | `images/research/` |
| News photos | `images/news/` |
| Funding and collaboration logos | `images/funding/` |
| Publication figures | `images/publications/` |
| Homepage layout | `_styles/home.scss` |
| Header, navigation, and marrow banner | `_styles/header.scss` and `_includes/header.html` |
| Team page styling | `_styles/team.scss` |
| Technology expandable panels | `_styles/technologies.scss` |
| News layout | `_styles/news.scss` |
| Opportunities layout | `_styles/opportunities.scss` |
| Footer | `_includes/footer.html` |

`_includes/` contains shared page pieces; `_layouts/` contains shared page layouts; `_scripts/` contains interactive behavior. `_config.yaml` holds site settings. Keep the special underscore folder names, as Jekyll uses them to build the website.

## Preview and publishing

Build with Ruby 3.1: `bundle exec jekyll build`. Generated output goes into `_site/`; edit the source files above, not `_site/`. Commits pushed to `main` trigger the GitHub build and deployment workflows.

The source folders now match the website labels. Existing public addresses are preserved by the `permalink` setting at the top of each renamed page. For example, the Publications source is `publications/index.md`, while its established public address remains `/research/`. Keep those settings to preserve bookmarks and existing links.

Built with the [Lab Website Template](https://greene-lab.gitbook.io/lab-website-template-docs).
