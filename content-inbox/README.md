# content-inbox

Drop raw material for the website here. Claude picks it up, optimises it and moves it into the site.

**Everything in this folder except this README is git-ignored**, so personal files never end up in the public repo.

## What to put here

| What | Format | Notes |
|---|---|---|
| **Headshot** | JPG / PNG, at least 1200 px on the short side | Plain background works best. Until there is one, the hero shows your initials. |
| **Certificate files** | PDF or image | One file per certificate. Name it after the certificate, e.g. `bloomberg-bmc.pdf`. Add the date and verify link if you have them. |
| **Project screenshots** | PNG / JPG, any size | Put them in a sub-folder per project, e.g. `amorby/`. |
| **New project notes** | `.md` or `.txt` | For each project: name, link, what problem it solves, what you built, the result (only real numbers), year, tech used. |
| **Anything else** | any | Testimonial quotes (with the person's OK), awards, clubs, volunteering, course list, GPA, GitHub username. |

## Already here

- `linkedin-profile.pdf`: LinkedIn export
- `linkedin-profile.md`: content extracted from it, with your confirmed answers

## Where it ends up

- Texts → `src/data/*.ts` (all 5 languages)
- Photos and screenshots → `public/images/`
- Certificates → `public/certificates/`

Open questions are marked `TODO(Vít)` in `src/data/`.
