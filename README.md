# kartavyabhatt.github.io

Interactive personal portfolio website for Kartavya Bhatt.

## Files
- `index.html` — Main portfolio page with sections: Hero, About, What I Do, Skills, Artifacts, Contact.
- `styles.css` — Visual design, responsive layout, and component styles.
- `script.js` — UI interactivity (theme toggle, mobile menu, scroll reveal, dynamic artifact rendering).
- `artifacts/artifacts.json` — JSON data dictionary used to render artifact cards on the homepage.
- `artifacts/*.html` — Individual artifact pages.
- `artifacts/template-artifact.html` — Reusable template for manually adding new artifacts.
- `assets/PROFILE_IMAGE_NOTE.txt` — Profile image placement instructions.

## Add a new artifact manually
1. Copy `artifacts/template-artifact.html` to a new file (for example: `artifacts/new-artifact.html`).
2. Fill in: Title, Objective, Process, Tools, and Value Proposition.
3. Add an object to `artifacts/artifacts.json` with `title`, `description`, and `url`.

## Profile photo
- Place your profile image at `assets/profile-photo.svg`.
- `index.html` already references this path; if missing, the site falls back to initials.

## Run locally
Open `index.html` in a browser, or run:

```bash
python -m http.server 4173
```
