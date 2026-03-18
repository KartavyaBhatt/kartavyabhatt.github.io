# kartavyabhatt.github.io

Interactive personal portfolio website for Kartavya Bhatt.

## Files
- `index.html` — Main portfolio page with sections: Hero, About, What I Do, Skills, Artifacts, Contact.
- `styles.css` — Permanent light-theme visual design, responsive layout, and component styling.
- `script.js` — Mobile navigation, scroll reveal, dynamic artifact rendering, and footer year.
- `artifacts/artifacts.json` — JSON data dictionary used to render artifact cards on the homepage.
- `artifacts/*.html` — Individual artifact pages.
- `artifacts/template-artifact.html` — Reusable template for manually adding new artifacts.

## Add a new artifact manually
1. Copy `artifacts/template-artifact.html` to a new file (for example: `artifacts/new-artifact.html`).
2. Fill in: Title, Objective, Process, Tools, and Value Proposition.
3. Add an object to `artifacts/artifacts.json` with `title`, `description`, and `url`.

## Run locally
```bash
python -m http.server 4173
```
