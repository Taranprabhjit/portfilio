import "./Skills.css";

const SKILLS = {
    Languages: {
        icon: (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
            </svg>
        ),
        list: [
            { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
            { name: "Java", icon: "https://cdn.simpleicons.org/openjdk/ffffff" },
            { name: "C", icon: "https://cdn.simpleicons.org/c/A8B9CC" },
            { name: "SQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
        ],
    },
    "Libraries & Frameworks": {
        icon: (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
            </svg>
        ),
        list: [
            { name: "Pandas", icon: "https://cdn.simpleicons.org/pandas/150458" },
            { name: "NumPy", icon: "https://cdn.simpleicons.org/numpy/013243" },
            { name: "Seaborn", icon: null, fallback: "SB" },
            { name: "Tableau", icon: "https://img.icons8.com/color/48/tableau-software.png" },
            { name: "Excel", icon: "https://img.icons8.com/color/48/microsoft-excel-2019--v1.png" },
        ],
    },
    "Tools": {
        icon: (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
        ),
        list: [
            { name: "Jupyter", icon: "https://cdn.simpleicons.org/jupyter/F37626" },
            { name: "VS Code", icon: "https://img.icons8.com/color/48/visual-studio-code-2019.png" },
            { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
            { name: "GitHub", icon: "https://cdn.simpleicons.org/github/ffffff" },
        ],
    },
    "Core Concepts": {
        icon: (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
        ),
        list: [
            { name: "DSA", icon: null, fallback: "DSA" },
            { name: "DBMS", icon: null, fallback: "DB" },
        ],
    },
};

function FallbackIcon({ text }) {
    return (
        <svg width="36" height="36" viewBox="0 0 36 36">
            <rect width="36" height="36" rx="6" fill="rgba(56,189,248,0.08)" stroke="rgba(56,189,248,0.2)" strokeWidth="1" />
            <text
                x="18"
                y="23"
                textAnchor="middle"
                fontSize="10"
                fontFamily="DM Mono, monospace"
                fill="rgba(56,189,248,0.8)"
                letterSpacing="0.5"
            >
                {text}
            </text>
        </svg>
    );
}

export default function Skills() {
    return (
        <section className="skills">
            <div className="grid-bg" />

            {/* LEFT PANEL */}
            <div className="left-panel">
                <div className="section-eyebrow">My expertise</div>
                <h2 className="section-title">
                    <span className="solid">Tech</span>
                    <span className="outline">Stack</span>
                </h2>

                <nav className="cat-nav">
                    {Object.keys(SKILLS).map(cat => (
                        <div className="cat-nav-item" key={cat}>{cat}</div>
                    ))}
                </nav>
            </div>

            {/* RIGHT PANEL */}
            <div className="right-panel">
                {Object.entries(SKILLS).map(([cat, { icon, list }]) => (
                    <div className="category" key={cat}>
                        <div className="cat-header">
                            <div className="cat-icon-wrap">{icon}</div>
                            <span className="cat-title">{cat}</span>
                        </div>
                        <div className="cat-divider" />
                        <div style={{ height: 16 }} />
                        <div className="skills-grid">
                            {list.map(skill => (
                                <div className="skill-card" key={skill.name}>
                                    <div className="skill-icon">
                                        {skill.icon
                                            ? <img src={skill.icon} alt={skill.name} />
                                            : <FallbackIcon text={skill.fallback} />}
                                    </div>
                                    <span className="skill-name">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}