const btnAbrir   = document.querySelector('.btn-abrir-menu');
const btnFechar  = document.querySelector('.btn-fechar');
const menuMobile = document.querySelector('.menu-mobile');
const overlay    = document.querySelector('.menu-overlay');

function abrirMenu() {
    menuMobile.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function fecharMenu() {
    menuMobile.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

btnAbrir.addEventListener('click', abrirMenu);
btnFechar.addEventListener('click', fecharMenu);
overlay.addEventListener('click', fecharMenu);

document.querySelectorAll('.menu-mobile nav a').forEach(link => {
    link.addEventListener('click', fecharMenu);
});

/* ================================================
   ADICIONE este bloco ao final do seu script.js
   ================================================ */

/* ── DADOS DOS PROJETOS ──────────────────────────
   Edite cada objeto com as suas informações reais!
   ─────────────────────────────────────────────── */
const projetos = [
  {
    titulo: "To Do List",
    tag: "Frontend",
    descricao: "Lista de tarefas interativa com funcionalidades de adicionar, concluir e remover tarefas. Interface limpa com persistência local dos dados.",
    techs: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    imgStyle: "background-image: url('imagens/tarefas-port_1.png'); background-size: contain; background-repeat: no-repeat;",
    linkDemo: "#",
    linkGithub: "https://github.com/gabespinola/To-do-list"
  },
  {
    titulo: "Weather App",
    tag: "Frontend",
    descricao: "Aplicação de clima em tempo real que consome a API OpenWeatherMap. O usuário digita uma cidade e visualiza temperatura atual, umidade, velocidade do vento e condição do tempo.",
    techs: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
    imgStyle: "background-image: url('imagens/Captura de tela 2026-06-09 095603.png');",
    linkDemo: "#",
    linkGithub: "https://github.com/gabespinola/weather-app"
  },
  {
    titulo: "Cadastro de Funcionários",
    tag: "Angular",
    descricao: "Sistema de cadastro com operações de CRUD completas desenvolvido em Angular. Permite adicionar, editar e excluir registros com formulários validados.",
    techs: ["Angular", "TypeScript", "HTML", "CSS"],
    imgStyle: "background-image: url('imagens/Captura de tela 2026-06-15 093935.png');",
    linkDemo: "#",
    linkGithub: "https://github.com/gabespinola/Sistema-de-Cadastro-CRUD-"
  },
  {
    titulo: "Tela de Login — React",
    tag: "React",
    descricao: "Projeto simples de uma tela de login utilizando React",
    techs: ["React"],
    imgStyle: "background-image: url('imagens/react.png');",
    linkDemo: "#",
    linkGithub: "https://github.com/gabespinola/pagina-de-login-"
  },
  {
    titulo: "Conversor Java",
    tag: "Java",
    descricao: "Aplicação desktop em Java para conversão de unidades e moedas, desenvolvida para aprimorar conceitos de orientação a objetos.",
    techs: ["Java", "Swing", "OOP"],
    imgStyle: "background-image: url('imagens/Captura de tela 2026-06-15 104224.png');",
    linkDemo: "#",
    linkGithub: "https://github.com/gabespinola/Conversor-de-Temperatura--java"
  },
  {
    titulo: "Biblioteca Java API",
    tag: "Java · API",
    descricao: "Sistema de gerenciamento de biblioteca que integra com API externa para buscar informações sobre livros, cadastrar e gerenciar o acervo.",
    techs: ["Java", "Spring Boot", "REST API", "MySQL"],
    imgStyle: "background-image: url('imagens/Captura de tela 2026-06-15 150606.png');",
    linkDemo: "#",
    linkGithub: "https://github.com/gabespinola/Biblioteca-API-Projeto-em-Java-com-Spring-Boot"
  },
  {
    titulo: "Sistema Financeiro",
    tag: "Fullstack",
    descricao: "Controle de finanças pessoais com registro de receitas e despesas, dashboard com resumo financeiro e gráficos de acompanhamento.",
    techs: ["HTML", "CSS", "JavaScript", "Node.js", "Chart.js"],
    imgStyle: "background-image: url('imagens/financeiro-port.png');",
    linkDemo: "#",
    linkGithub: "https://github.com/gabespinola/Sistema-de-controle-financeiro-Fullstack"
  }
];

/* ── ABRIR MODAL ─────────────────────────────── */
function abrirModal(index) {
  const p = projetos[index];
  const overlay = document.getElementById('modalOverlay');

  document.getElementById('modalImg').style.cssText = p.imgStyle;
  document.getElementById('modalTag').textContent = p.tag;
  document.getElementById('modalTitulo').textContent = p.titulo;
  document.getElementById('modalDesc').textContent = p.descricao;

  // Tecnologias
  const techsEl = document.getElementById('modalTechs');
  techsEl.innerHTML = p.techs.map(t => `<span>${t}</span>`).join('');

  // Links
  const linksEl = document.getElementById('modalLinks');
  linksEl.innerHTML = `
    <a href="${p.linkDemo}" class="btn-primary" target="_blank">
      <i class="bi bi-eye"></i> Ver Demo
    </a>
    <a href="${p.linkGithub}" class="btn-outline" target="_blank">
      <i class="bi bi-github"></i> GitHub
    </a>
  `;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/* ── FECHAR MODAL ────────────────────────────── */
function fecharModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// Fechar com ESC
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') fecharModal();
});

/* ── ANIMAÇÃO DE ENTRADA (Intersection Observer) ─ */
const tlItems = document.querySelectorAll('.tl-item');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

tlItems.forEach(item => observer.observe(item));