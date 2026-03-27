import "./Projects.css";

const PROJECTS = [
    {
        title: "FedEx Logistics",
        subtitle: "Performance Analysis",
        date: "Dec 2025",
        desc: "Conducted end-to-end exploratory data analysis on shipment data, engineering features like transit time and delay metrics to evaluate logistics performance. Built visualizations (time-series, heatmaps) and performed segmentation by routes and service types to identify delivery bottlenecks and delay patterns. Derived actionable insights to identify key factors affecting on-time delivery and improve overall operational efficiency.",
        tech: ["Python", "Pandas", "Seaborn"],
        github: "https://github.com/Taranprabhjit/FedEx-logistics-Performance-Analysis.git",
        figma: null,
        live: null,
        image: "/fedex.png",               // ← put your screenshot filename here
    },
    {
        title: "Space Warship Combat",
        subtitle: "Game Development",
        date: "Nov 2024",
        desc: "Engineered a space-themed combat game with escalating difficulty across multiple levels, ramping up an immersive and captivating player experience. Integrated gameplay mechanics including enemy waves, power-ups, and responsive player controls with smooth level transitions. Delivered 5+ fully playable levels, received 90% positive user feedback, and increased average player session time by 30%.",
        tech: ["Python"],
        github: "https://github.com/Taranprabhjit/space-warship-game.git",
        figma: null,
        live: null,
        image: "/space.png",        // ← put your screenshot filename here
    },
    {
        title: "Panni Sahayak",
        subtitle: "Smart Irrigation System",
        date: "Jun 2025",
        desc: "Designed a mobile app prototype enabling remote pump control, smart irrigation scheduling, and real-time monitoring to enhance productivity and optimize farm management efficiency. Developed a prototype with real-time alerts and monthly usage analytics, empowering farmers to make data-driven water management decisions. Achieved 40% higher prototype usability, simulated a 35% improvement in irrigation scheduling efficiency, and indicated a 20% potential reduction in overall water usage.",
        tech: ["Figma", "Mobile App", "IoT", "GSM"],
        github: null,
        figma: "https://www.figma.com/proto/3xK3hSZc3DgP0R0VfKAb9g/Project?node-id=0-1&t=YHeokI81ny6I0yYr-1",
        live: null,
        image: "/panni.png",        // ← put your screenshot filename here
    },
];

function GitHubIcon() {
    return (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
    );
}

function FigmaIcon() {
    return (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" fill="#0ACF83" />
            <path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" fill="#A259FF" />
            <path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z" fill="#F24E1E" />
            <path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z" fill="#FF7262" />
            <path d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z" fill="#1ABCFE" />
        </svg>
    );
}

function LiveIcon() {
    return (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
    );
}

const placeholderIcons = {
    "FedEx Logistics": (
        <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1">
            <rect x="2" y="3" width="20" height="4" rx="1" fill="rgba(56,189,248,0.06)" />
            <rect x="2" y="10" width="20" height="4" rx="1" fill="rgba(56,189,248,0.06)" />
            <rect x="2" y="17" width="20" height="4" rx="1" fill="rgba(56,189,248,0.06)" />
            <circle cx="6" cy="5" r="0.6" fill="#38bdf8" />
            <circle cx="6" cy="12" r="0.6" fill="#38bdf8" />
            <circle cx="6" cy="19" r="0.6" fill="#38bdf8" />
            <line x1="10" y1="5" x2="20" y2="5" stroke="#38bdf8" strokeWidth="0.8" />
            <line x1="10" y1="12" x2="16" y2="12" stroke="#38bdf8" strokeWidth="0.8" />
            <line x1="10" y1="19" x2="18" y2="19" stroke="#38bdf8" strokeWidth="0.8" />
        </svg>
    ),
    "Space Warship Combat": (
        <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1">
            <polygon points="12,2 15,18 12,15 9,18" fill="rgba(56,189,248,0.1)" stroke="#38bdf8" strokeWidth="1" />
            <circle cx="5" cy="7" r="1.5" fill="rgba(56,189,248,0.2)" stroke="#38bdf8" strokeWidth="0.8" />
            <circle cx="19" cy="7" r="1.5" fill="rgba(56,189,248,0.2)" stroke="#38bdf8" strokeWidth="0.8" />
            <circle cx="3" cy="21" r="0.8" fill="#38bdf8" />
            <circle cx="12" cy="23" r="0.8" fill="#38bdf8" />
            <circle cx="21" cy="21" r="0.8" fill="#38bdf8" />
        </svg>
    ),
    "Panni Sahayak": (
        <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1">
            <rect x="6" y="3" width="12" height="18" rx="2" fill="rgba(56,189,248,0.06)" stroke="#38bdf8" strokeWidth="1" />
            <line x1="9" y1="7" x2="15" y2="7" stroke="#38bdf8" strokeWidth="0.8" />
            <line x1="9" y1="10" x2="15" y2="10" stroke="#38bdf8" strokeWidth="0.8" />
            <circle cx="12" cy="15" r="2" fill="rgba(56,189,248,0.2)" stroke="#38bdf8" strokeWidth="0.8" />
            <path d="M12 1v2M4 12H2M22 12h-2" stroke="#38bdf8" strokeWidth="0.6" />
        </svg>
    ),
};

function ProjectCard({ project, index }) {
    return (
        <div className="project-card" style={{ animationDelay: `${index * 0.08 + 0.05}s` }}>

            <div className="card-img">
                {project.image ? (
                    <img
                        src={project.image}
                        alt={project.title}
                        onError={e => {
                            e.target.style.display = 'none';
                            e.target.parentElement.querySelector('.img-placeholder').style.display = 'flex';
                        }}
                    />
                ) : null}
                <div className="img-placeholder" style={{ display: project.image ? 'none' : 'flex' }}>
                    {placeholderIcons[project.title]}
                    <span className="img-placeholder-text">{project.subtitle}</span>
                </div>
                {project.date && <span className="card-date">{project.date}</span>}
            </div>

            <div className="card-body">
                <div>
                    <div className="card-title">{project.title}</div>
                    <div className="card-subtitle">{project.subtitle}</div>
                </div>
                <div className="card-desc">{project.desc}</div>
                <div className="tech-tags">
                    {project.tech.map(t => (
                        <span className="tech-tag" key={t}>{t}</span>
                    ))}
                </div>
                <div className="card-links">
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="card-link github">
                            <GitHubIcon /> GitHub
                        </a>
                    )}
                    {project.figma && (
                        <a href={project.figma} target="_blank" rel="noopener noreferrer" className="card-link figma">
                            <FigmaIcon /> Figma
                        </a>
                    )}
                    {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="card-link live">
                            <LiveIcon /> Live
                        </a>
                    )}
                </div>
            </div>

        </div>
    );
}

export default function Projects() {
    return (
        <section className="projects">
            <div className="grid-bg" />
            <div className="projects-inner">
                <div className="header">
                    <div className="eyebrow">What I've built</div>
                    <h1 className="page-title">
                        <span className="solid">Pro</span>
                        <span className="outline">jects</span>
                    </h1>
                </div>
                <div className="projects-grid">
                    {PROJECTS.map((p, i) => (
                        <ProjectCard key={p.title} project={p} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}