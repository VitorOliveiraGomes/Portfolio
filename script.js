document.getElementById('year').textContent = new Date().getFullYear();

// ===== TRADUÇÕES =====
const translations = {
  pt: {
    'featured-title': 'Projetos em Destaque',
    'projects-title': 'Projetos',
    'projects-lead': 'Abaixo estão os repositórios públicos mais recentes do meu GitHub.',
    "about-title": "Sobre mim",
    "education-title": "Formação, Cursos e Certificações",
    "skills-title": "Habilidades",
    "contact-title": "Contato",
    "brand-subtitle": "Estudante de Análise e Desenvolvimento de Sistemas",
    "hero-title": "Olá — eu sou o Vitor.",
    "hero-desc": "Sou estudante de <strong>Análise e Desenvolvimento de Sistemas</strong> com foco em Inteligência Artificial, Desenvolvimento Web e Análise de Dados. Busco constantemente aprender novas tecnologias e aplicá-las em projetos reais para crescer profissionalmente.",
    "featured-chatbot-desc": "Chatbot voltado para estudos e socialização, com foco em acessibilidade e personalização do aprendizado. Desenvolvido como parte do projeto ACEx (Atividades de Extensão).",
    "featured-chatbot-techs": "<strong>Tecnologias:</strong> Python, HTML/CSS, JavaScript, APIs de linguagem natural.",
    "load-repos": "Carregar meus projetos do GitHub",
    "view-github": "Ver no GitHub",
    "about-desc": "Sou um estudante dedicado de Análise e Desenvolvimento de Sistemas na Fundação Santo André, com foco em Inteligência Artificial, Desenvolvimento Web e Análise de Dados. Tenho raciocínio lógico, facilidade de aprendizado e gosto de resolver problemas práticos com tecnologia. Busco constantemente aprimorar minhas habilidades e contribuir com soluções inovadoras.",
    "view-certificate": "Ver certificado",
    "formation-subtitle": "Formação Acadêmica",
    "formation-item-1": "<strong>Fundação Santo André</strong> — Análise e Desenvolvimento de Sistemas (2024–2025)",
    "courses-subtitle": "Cursos Complementares",
    "course-1": "Introdução à Análise de Dados — Microsoft Power BI",
    "course-2": "Pacote Office — Avançado",
    "course-3": "Python — Intermediário",
    "course-4": "Java — Básico",
    "course-5": "VBA — Básico",
    "course-6": "Inglês — Intermediário",
    "certifications-subtitle": "Certificações",
    "cert-1": "IBM — Artificial Intelligence Fundamentals",
    "cert-2": "IBM — Web Development Fundamentals",
    "cert-3": "IBM — Cloud Computing Fundamentals",
    "cert-4": "IBM — User Experience Design Fundamentals"
  },
  en: {
    'featured-title': 'Featured Projects',
    'projects-title': 'Projects',
    'projects-lead': 'Below are my most recent public repositories from GitHub.',
    "about-title": "About me",
    "education-title": "Education, Courses & Certifications",
    "skills-title": "Skills",
    "contact-title": "Contact",
    "brand-subtitle": "Student of Systems Analysis and Development",
    "hero-title": "Hi — I'm Vitor.",
    "hero-desc": "I am a student of <strong>Systems Analysis and Development</strong> focusing on Artificial Intelligence, Web Development and Data Analysis. I constantly seek to learn new technologies and apply them in real projects to grow professionally.",
    "featured-chatbot-desc": "Educational chatbot focused on study and socialization, emphasizing accessibility and personalized learning. Developed as part of the ACEx extension project.",
    "featured-chatbot-techs": "<strong>Technologies:</strong> Python, HTML/CSS, JavaScript, Natural language APIs.",
    "load-repos": "Load my GitHub projects",
    "view-github": "View on GitHub",
    "about-desc": "I am a dedicated student of Systems Analysis and Development at Fundação Santo André, focusing on Artificial Intelligence, Web Development and Data Analysis. I have logical reasoning, ease of learning and enjoy solving practical problems with technology. I constantly seek to improve my skills and contribute with innovative solutions.",
    "view-certificate": "View certificate",
    "formation-subtitle": "Academic Education",
    "formation-item-1": "<strong>Fundação Santo André</strong> — Systems Analysis and Development (2024–2025)",
    "courses-subtitle": "Complementary Courses",
    "course-1": "Introduction to Data Analysis — Microsoft Power BI",
    "course-2": "Office Suite — Advanced",
    "course-3": "Python — Intermediate",
    "course-4": "Java — Basic",
    "course-5": "VBA — Basic",
    "course-6": "English — Intermediate",
    "certifications-subtitle": "Certifications",
    "cert-1": "IBM — Artificial Intelligence Fundamentals",
    "cert-2": "IBM — Web Development Fundamentals",
    "cert-3": "IBM — Cloud Computing Fundamentals",
    "cert-4": "IBM — User Experience Design Fundamentals"
  },
  es: {
    'featured-title': 'Proyectos Destacados',
    'projects-title': 'Proyectos',
    'projects-lead': 'A continuación se encuentran mis repositorios públicos más recientes de GitHub.',
    "about-title": "Sobre mí",
    "education-title": "Formación, Cursos y Certificaciones",
    "skills-title": "Habilidades",
    "contact-title": "Contacto",
    "brand-subtitle": "Estudiante de Análisis y Desarrollo de Sistemas",
    "hero-title": "Hola — soy Vitor.",
    "hero-desc": "Soy estudiante de <strong>Análisis y Desarrollo de Sistemas</strong> con enfoque en Inteligencia Artificial, Desarrollo Web y Análisis de Datos. Busco constantemente aprender nuevas tecnologías y aplicarlas en proyectos reales para crecer profesionalmente.",
    "featured-chatbot-desc": "Chatbot orientado a estudios y socialización, con énfasis en accesibilidad y personalización del aprendizaje. Desarrollado como parte del proyecto de extensión ACEx.",
    "featured-chatbot-techs": "<strong>Tecnologías:</strong> Python, HTML/CSS, JavaScript, APIs de lenguaje natural.",
    "load-repos": "Cargar mis proyectos de GitHub",
    "view-github": "Ver en GitHub",
    "about-desc": "Soy un estudiante dedicado de Análisis y Desarrollo de Sistemas en la Fundação Santo André, con enfoque en Inteligencia Artificial, Desarrollo Web y Análisis de Datos. Tengo razonamiento lógico, facilidad de aprendizaje y me gusta resolver problemas prácticos con tecnología. Busco constantemente mejorar mis habilidades y contribuir con soluciones innovadoras.",
    "view-certificate": "Ver certificado",
    "formation-subtitle": "Formación Académica",
    "formation-item-1": "<strong>Fundação Santo André</strong> — Análisis y Desarrollo de Sistemas (2024–2025)",
    "courses-subtitle": "Cursos Complementarios",
    "course-1": "Introducción al Análisis de Datos — Microsoft Power BI",
    "course-2": "Paquete Office — Avanzado",
    "course-3": "Python — Intermedio",
    "course-4": "Java — Básico",
    "course-5": "VBA — Básico",
    "course-6": "Inglés — Intermedio",
    "certifications-subtitle": "Certificaciones",
    "cert-1": "IBM — Artificial Intelligence Fundamentals",
    "cert-2": "IBM — Web Development Fundamentals",
    "cert-3": "IBM — Cloud Computing Fundamentals",
    "cert-4": "IBM — User Experience Design Fundamentals"
  }
};

// Texto exibido durante o carregamento de repositórios
translations.pt.loading = 'Carregando...';
translations.en.loading = 'Loading...';
translations.es.loading = 'Cargando...';

// Traduções manuais por repositório (use o nome do repositório como chave)
// Exemplo:
// const repoTranslations = {
//   'my-repo': { pt: 'Descrição em PT', en: 'Description in EN', es: 'Descripción en ES' }
// };
const repoTranslations = {
  'Chat-Bot-Educacional': {
    pt: 'ChatBot voltado para estudos',
    en: 'Educational ChatBot focused on study',
    es: 'ChatBot orientado a estudios'
  },
  'Portfolio': {
    pt: 'Meu Portfólio',
    en: 'My Portfolio',
    es: 'Mi portafolio'
  },
  'Projetos': {
    pt: 'Projetos Pessoais para fins de estudos e conhecimento da linguagem',
    en: 'Personal projects for study purposes and language learning',
    es: 'Proyectos personales para fines de estudio y aprendizaje del lenguaje'
  }
};

let lastLoadedRepos = null;

function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function renderRepos(repos) {
  const reposEl = document.getElementById('repos');
  if (!reposEl) return;
  if (!repos || !Array.isArray(repos)) {
    reposEl.innerHTML = '';
    return;
  }

  reposEl.innerHTML = repos.map(repo => {
    // prefer manual translation if available
    const manual = repoTranslations[repo.name] && repoTranslations[repo.name][currentLanguage];
    const descSource = manual ? manual : (repo.description || '');
    const hasHtml = /<[^>]+>/.test(descSource);
    const descriptionHtml = hasHtml ? descSource : (descSource ? `<p>${escapeHtml(descSource)}</p>` : '');

    return `
      <article class='repo'>
        <h4><a href='${repo.html_url}' target='_blank' rel='noopener noreferrer'>${escapeHtml(repo.name)}</a></h4>
        ${descriptionHtml}
      </article>
    `;
  }).join('');
}

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
      const value = translations[currentLanguage][key];
      // If the translation contains HTML tags, use innerHTML, otherwise use textContent
      const hasHtml = /<[^>]+>/.test(value);
      if (hasHtml) {
        element.innerHTML = value;
      } else {
        element.textContent = value;
      }
    }
  });
  // Re-render repositories if they were loaded previously to update descriptions
  if (lastLoadedRepos) {
    renderRepos(lastLoadedRepos);
    // update load button label according to current language
    const loadBtnLocal = document.getElementById('loadRepos');
    if (loadBtnLocal) loadBtnLocal.textContent = translations[currentLanguage]['load-repos'];
  }
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
    loadBtn.textContent = translations[currentLanguage]['loading'] || 'Carregando...';

    const response = await fetch('https://api.github.com/users/VitorOliveiraGomes/repos');
    const data = await response.json();

    // keep the loaded repos so we can re-render on language change
    lastLoadedRepos = data.slice(0, 9);
    renderRepos(lastLoadedRepos);

    loadBtn.textContent = translations[currentLanguage]['load-repos'] || 'Carregar meus projetos do GitHub';
    loadBtn.disabled = false;
  });
}
