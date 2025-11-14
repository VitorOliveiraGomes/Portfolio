document.getElementById('year').textContent = new Date().getFullYear();

// ===== TRADUÇÕES =====
const translations = {
  pt: {
    'featured-title': 'Projetos em Destaque',
    'projects-title': 'Projetos',
    'projects-lead': 'Abaixo estão os repositórios públicos mais recentes do meu GitHub.',
    'about-title': 'Sobre mim',
    'education-title': 'Formação, Cursos e Certificações',
    'skills-title': 'Tecnologias e Habilidades',
    'contact-title': 'Contato',
    'load-repos': 'Carregar meus projetos do GitHub',
    'view-github': 'Ver no GitHub',
    'download-cv': 'Baixar CV',
    'formation-subtitle': 'Formação Acadêmica',
    'courses-subtitle': 'Cursos Complementares',
    'certifications-subtitle': 'Certificações',
  },
  en: {
    'featured-title': 'Featured Projects',
    'projects-title': 'Projects',
    'projects-lead': 'Below are my most recent public repositories from GitHub.',
    'about-title': 'About me',
    'education-title': 'Education, Courses and Certifications',
    'skills-title': 'Technologies and Skills',
    'contact-title': 'Contact',
    'load-repos': 'Load my projects from GitHub',
    'view-github': 'View on GitHub',
    'download-cv': 'Download CV',
    'formation-subtitle': 'Academic Education',
    'courses-subtitle': 'Complementary Courses',
    'certifications-subtitle': 'Certifications',
  },
  es: {
    'featured-title': 'Proyectos Destacados',
    'projects-title': 'Proyectos',
    'projects-lead': 'A continuación se encuentran mis repositorios públicos más recientes de GitHub.',
    'about-title': 'Acerca de mí',
    'education-title': 'Educación, Cursos y Certificaciones',
    'skills-title': 'Tecnologías y Habilidades',
    'contact-title': 'Contacto',
    'load-repos': 'Cargar mis proyectos de GitHub',
    'view-github': 'Ver en GitHub',
    'download-cv': 'Descargar CV',
    'formation-subtitle': 'Educación Académica',
    'courses-subtitle': 'Cursos Complementarios',
    'certifications-subtitle': 'Certificaciones',
  }
};

let currentLanguage = 'pt';

function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('language', lang);
  updateLanguage();
}

function updateLanguage() {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[currentLanguage][key]) {
      element.textContent = translations[currentLanguage][key];
    }
  });
}

// Load saved language or default to Portuguese
const savedLanguage = localStorage.getItem('language') || 'pt';
document.getElementById('language-selector').value = savedLanguage;
setLanguage(savedLanguage);

document.getElementById('language-selector').addEventListener('change', (e) => {
  setLanguage(e.target.value);
});

// ===== CARROSSEL =====
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

if (prevBtn && nextBtn) {
  const images = document.querySelectorAll('.carousel-img');
  
  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.remove('active');
      if (i === index) {
        img.classList.add('active');
      }
    });
  }
  
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });
  
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });
}

// ===== GITHUB REPOS =====

const loadBtn = document.getElementById('loadRepos');
if (loadBtn) {
  loadBtn.addEventListener('click', async () => {
    loadBtn.disabled = true;
    loadBtn.textContent = 'Carregando...';
    
    const response = await fetch('https://api.github.com/users/VitorOliveiraGomes/repos');
    const data = await response.json();
    
    const reposEl = document.getElementById('repos');
    reposEl.innerHTML = data.slice(0, 9).map(repo => {
      const description = repo.description ? `<p>${repo.description}</p>` : '';
      return `
        <article class='repo'>
          <h4><a href='${repo.html_url}' target='_blank' rel='noopener noreferrer'>${repo.name}</a></h4>
          ${description}
        </article>
      `;
    }).join('');
    
    loadBtn.textContent = 'Carregar meus projetos do GitHub';
    loadBtn.disabled = false;
  });
}