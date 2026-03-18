const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') root.classList.add('light');

themeToggle?.addEventListener('click', () => {
  root.classList.toggle('light');
  localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
});

document.getElementById('year').textContent = new Date().getFullYear();

const menuBtn = document.getElementById('menuBtn');
const navList = document.getElementById('navList');
menuBtn?.addEventListener('click', () => navList.classList.toggle('open'));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('show');
    });
  },
  { threshold: 0.16 }
);
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

async function renderArtifacts() {
  const grid = document.getElementById('artifactsGrid');
  const template = document.getElementById('artifactCardTemplate');
  if (!grid || !template) return;

  try {
    const response = await fetch('artifacts/artifacts.json');
    if (!response.ok) throw new Error(`Failed to load artifacts: ${response.status}`);
    const artifacts = await response.json();

    artifacts.forEach((artifact) => {
      const clone = template.content.cloneNode(true);
      const link = clone.querySelector('a');
      const heading = clone.querySelector('h3');
      const description = clone.querySelector('p');

      link.href = artifact.url;
      heading.textContent = artifact.title;
      description.textContent = artifact.description;

      grid.appendChild(clone);
    });
  } catch (error) {
    const message = document.createElement('p');
    message.className = 'artifact-error';
    message.textContent = 'Unable to load artifacts right now.';
    grid.replaceWith(message);
    console.error(error);
  }
}

renderArtifacts();
