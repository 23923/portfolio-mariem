import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Database,
  Download,
  Github,
  GraduationCap,
  Languages,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  UsersRound,
  Workflow,
} from "lucide-react";
import "./styles.css";

const experiences = [
  {
    role: "Stage professionnel",
    company: "NauticPro",
    period: "15 juillet - 15 septembre 2026",
    stack: "Angular 22.1.0, Spring Boot 4.0.0, Java 21, PostgreSQL, Scrum, Jira, GitHub, Docker",
    description:
      "Conception et développement de Marinova, un CRM métier destiné aux chefs d'armement pour organiser et centraliser leur travail. Le principal défi du projet a été l'intégration du paiement en ligne via un fournisseur comme Click to Pay, ainsi que la mise en place de la signature électronique, le tout dans une architecture pensée pour la sécurité des données.",
  },
  {
    role: "Stage de fin d'études",
    company: "Intellitech",
    period: "Février - Juin 2026",
    stack: "Django, Rasa, Ollama, Qwen, PostgreSQL",
    description:
      "Conception et développement d'un agent conversationnel vocal intelligent pour automatiser la saisie des rapports de visite client.",
  },
  {
    role: "Stage d'été 2e année",
    company: "SoftPro",
    period: "Juillet - Août 2025",
    stack: "Angular, .NET",
    description:
      "Conception d'une application de gestion comptable avec une interface orientée métier.",
  },
  {
    role: "Stage de fin d'année",
    company: "Yuma",
    period: "Avril - Juin 2025",
    stack: "Django, ReactJS",
    description:
      "Création de SatisTracker, une application web dédiée à l'évaluation des performances des stagiaires.",
  },
  {
    role: "Stage d'été 1ère année",
    company: "Polysoft & Co",
    period: "Juillet - Août 2024",
    stack: "Node.js, React",
    description:
      "Développement d'un site de commerce électronique avec une expérience utilisateur claire et responsive.",
  },
  {
    role: "Stage de fin d'études",
    company: "SMDI Développement",
    period: "Mars - Juin 2023",
    stack: "Laravel",
    description:
      "Développement d'une application web de caisse enregistreuse tactile.",
  },
];

const projects = [
  {
    title: "Marinova",
    tag: "CRM métier · NauticPro",
    text: "Projet réalisé dans le cadre d'un stage professionnel chez NauticPro : conception et développement de Marinova, un CRM destiné aux chefs d'armement pour organiser et centraliser leur travail au quotidien. Le principal défi du projet a été l'intégration du paiement en ligne, avec un fournisseur comme Click to Pay, ainsi que la mise en place de la signature électronique pour sécuriser et dématérialiser les échanges. Le projet met en avant des choix technologiques et une architecture modulaire adaptés aux besoins métier, ainsi que des principes de sécurité comme la gestion des accès, la protection des données et la traçabilité des actions. Le travail a été mené avec la méthodologie Scrum, en utilisant Jira pour organiser le backlog, planifier les sprints, suivre les tâches et améliorer la collaboration avec l'équipe.",
    tools: ["Angular 22.1.0", "Spring Boot 4.0.0", "Java 21", "PostgreSQL", "CRM", "Paiement en ligne", "Click to Pay", "Signature électronique", "Scrum", "Jira", "GitHub", "Docker"],
  },
  {
    title: "Assistant vocal intelligent",
    tag: "IA conversationnelle",
    text: "Développement d'un agent vocal intelligent permettant d'automatiser la saisie des rapports de visite client à partir d'un message vocal ou d'un texte. Le système transforme les échanges en données structurées : transcription, compréhension du contenu, extraction des informations pertinentes et validation métier côté backend, avant leur enregistrement dans PostgreSQL. Une couche d'intelligence basée sur un LLM permet d'interpréter les informations exprimées naturellement, tandis que Rasa est utilisée pour l'analyse des intentions et l'extraction des entités afin d'améliorer la compréhension des données collectées. Le défi technique du projet a été de concevoir une chaîne fiable capable de transformer un contenu libre et potentiellement ambigu en données structurées et exploitables, tout en garantissant leur cohérence grâce aux validations backend et en combinant plusieurs technologies d'IA dans un même workflow.",
    tools: ["Django", "Rasa", "Ollama", "Qwen", "PostgreSQL", "Analyse de données"],
  },
  {
    title: "SatisTracker",
    tag: "Application web",
    text: "Développement d'une plateforme web dédiée à la gestion et à l'analyse des enquêtes de satisfaction des stages PFE. La solution digitalise un processus auparavant basé sur des formulaires papier en centralisant la collecte des réponses, leur traitement et leur analyse. Elle permet aux directeurs d'études, responsables de stage, chefs de département et industriels de suivre les retours, exploiter les données collectées et visualiser les résultats afin de faciliter l'identification des tendances et l'aide à la prise de décision. Cette expérience m'a permis de renforcer mes compétences en développement full-stack, modélisation UML, gestion de projet Agile/Scrum et utilisation d'Azure DevOps. Le défi technique a consisté à concevoir une solution capable de centraliser des données provenant de différents acteurs, de les structurer pour faciliter leur analyse, et à transformer les résultats des enquêtes en indicateurs et visualisations facilement exploitables.",
    tools: ["Django", "ReactJS", "PostgreSQL", "ChartJS", "Azure DevOps", "UML", "Agile/Scrum"],
  },
  {
    title: "Gestion comptable",
    tag: "Solution métier",
    text: "Application de gestion commerciale conçue pour centraliser les données, gérer les comptes et assurer le suivi des opérations financières. La solution automatise les actions courantes comme la création de comptes, les versements et les retraits, tout en améliorant la traçabilité et la fiabilité des transactions. Le projet a renforcé la conception architecturale avec Domain Driven Design, la modélisation UML et les bonnes pratiques de développement logiciel.",
    tools: ["Angular", "ASP.NET", "DDD", "SQL Server", "UML"],
  },
  {
    title: "Site e-commerce",
    tag: "Commerce en ligne",
    text: "Développement d'un site de commerce électronique avec une interface responsive, une navigation claire, une présentation des produits et une expérience utilisateur pensée pour simplifier le parcours d'achat.",
    tools: ["Node.js", "React", "Responsive UI"],
  },
  {
    title: "Caisse enregistreuse tactile",
    tag: "Application métier",
    text: "Application web de caisse enregistreuse tactile dédiée aux points de vente : interface adaptée à l'utilisation rapide, gestion des opérations de caisse et organisation des fonctionnalités autour des besoins quotidiens des utilisateurs.",
    tools: ["Laravel", "Application web", "Interface tactile"],
  },
];

const skills = [
  {
    icon: Code2,
    title: "Langages",
    items: ["Java", "C++", "Python", "C#"],
  },
  {
    icon: Layers3,
    title: "Frameworks",
    items: ["Laravel", "Angular", "Django", "ReactJS", ".NET", "Spring Boot", "Flutter", "React Native"],
  },
  {
    icon: Database,
    title: "Bases de données",
    items: ["MySQL", "PostgreSQL", "SQL Server", "SQLite"],
  },
  {
    icon: BrainCircuit,
    title: "IA & analyse de données",
    items: ["Traitement du langage naturel", "Modèles de langage", "Rasa", "Pandas"],
  },
  {
    icon: Workflow,
    title: "Outils & DevOps",
    items: ["Azure DevOps", "Jira", "GitLab", "GitHub", "Docker", "Kubernetes", "CI/CD", "Scrum"],
  },
];

const education = [
  "Cycle d'ingénieur - Génie Logiciel et Informatique Décisionnelle, IIT Sfax, 2026",
  "Licence en Informatique de Gestion, École Supérieure de Commerce de Sfax, 2023",
  "Baccalauréat Sciences expérimentales, Lycée 15 Novembre 1955, 2020",
];

const associations = [
  "Geek Club & Iris Junior Entreprise - membre junior et senior, 2020-2022",
  "IEEE ENET'Com - membre junior, 2023-2024",
];

const emailLink =
  "https://mail.google.com/mail/?view=cm&fs=1&to=myriam12trabelsi@gmail.com";

function App() {
  return (
    <main>
      <nav className="topbar" aria-label="Navigation principale">
        <a className="brand" href="#accueil">MT</a>
        <div className="nav-links">
          <a href="#projets">Projets</a>
          <a href="#experience">Expérience</a>
          <a href="#competences">Compétences</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="accueil">
        <div className="hero-overlay" />
        <div className="hero-inner">
          <div className="hero-content">
            <p className="eyebrow">Génie logiciel </p>
            <h1>Mariem Trabelsi</h1>
            <p className="hero-text">
              Titulaire d'un diplôme en génie logiciel et en informatique décisionnelle,
              ma pratique professionnelle s'articule autour de la conception d'applications
              web et de solutions intelligentes. Ces dernières ont pour vocation de
              transformer les besoins métier en expériences simples, utiles et robustes.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projets">
                Voir mes projets <ArrowUpRight size={18} />
              </a>
              <a className="button ghost" href="/cv-mariem-trabelsi.pdf" download>
                Télécharger CV <Download size={18} />
              </a>
            </div>
          </div>
          <div className="hero-portrait" aria-label="Photo de Mariem Trabelsi">
            <div className="portrait-frame">
              <img src="/portrait-mariem.jpeg" alt="Mariem Trabelsi en tenue de diplômée" />
            </div>
            <div className="portrait-note">
              <span>Software Engineer</span>
            </div>
          </div>
        </div>
      </section>

      <section className="quick-info" aria-label="Informations de contact">
        <span><MapPin size={18} /> Sfax, Tunisie</span>
        <a href={emailLink} target="_blank" rel="noreferrer"><Mail size={18} /> Email</a>
        <a href="tel:+21654665601"><Phone size={18} /> +216 54 665 601</a>
        <a href="https://github.com/23923" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
        <a href="https://linkedin.com/in/trabelsi-mariem-694a4b304" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
      </section>

      <section className="section" id="projets">
        <div className="section-heading">
          <p className="eyebrow">Portfolio</p>
          <h2>Projets et réalisations</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <span className="tag">{project.tag}</span>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <div className="chip-row">
                {project.tools.map((tool) => (
                  <span className="chip" key={tool}>{tool}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section split" id="experience">
        <div className="section-heading sticky-heading">
          <p className="eyebrow">Parcours</p>
          <h2>Expériences professionnelles</h2>
          <p>
            Des stages orientés produit, data et IA, avec une progression du
            développement web vers l'intégration de solutions intelligentes.
          </p>
        </div>
        <div className="timeline">
          {experiences.map((item) => (
            <article className="timeline-item" key={`${item.company}-${item.period}`}>
              <div className="timeline-icon"><BriefcaseBusiness size={18} /></div>
              <div>
                <p className="period">{item.period}</p>
                <h3>{item.role} · {item.company}</h3>
                <p>{item.description}</p>
                <span className="stack">{item.stack}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="competences">
        <div className="section-heading">
          <p className="eyebrow">Expertise</p>
          <h2>Compétences techniques</h2>
        </div>
        <div className="skills-grid">
          {skills.map(({ icon: Icon, title, items }) => (
            <article className="skill-card" key={title}>
              <Icon size={24} />
              <h3>{title}</h3>
              <p>{items.join(" · ")}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section details">
        <article>
          <GraduationCap size={26} />
          <h2>Formation</h2>
          <ul>
            {education.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>
        <article>
          <Languages size={26} />
          <h2>Langues et qualités</h2>
          <p>Arabe · Français B2 · Anglais B1</p>
          <p>Collaboration, créativité, adaptabilité, esprit d'analyse, Scrum et Design Thinking.</p>
        </article>
        <article>
          <UsersRound size={26} />
          <h2>Vie associative</h2>
          <ul>
            {associations.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>
      </section>

      <footer id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Construisons quelque chose d'utile.</h2>
        </div>
        <div className="footer-actions">
          <a className="button primary" href={emailLink} target="_blank" rel="noreferrer">
            Me contacter <Mail size={18} />
          </a>
          <a className="button ghost" href="https://github.com/23923" target="_blank" rel="noreferrer">
            GitHub <Github size={18} />
          </a>
        </div>
      </footer>
    </main>
  );
}

export default App;

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
