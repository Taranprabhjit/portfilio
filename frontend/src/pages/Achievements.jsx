import "./Achievements.css";

const ACHIEVEMENTS = [
    {
        title: "100+ Problems Solved",
        platform: "LeetCode",
        icon: "https://cdn.simpleicons.org/leetcode/FFA116",
        tag: "DSA",
        stars: null,
        maxStars: null,
        count: "100+",
        desc: "Solved over 100 problems on LeetCode, strengthening skills in data structures and algorithms.",
        link: null,
        date: "Feb 2025",
    },
    {
        title: "2nd Place — ONE INDIA",
        platform: "LPU",
        icon: "https://cdn.simpleicons.org/academia/4285F4",
        tag: "Cultural",
        stars: null,
        maxStars: null,
        count: "2nd",
        desc: "Represented the culture of Mizoram as part of a team in a cultural showcase, contributing to a second-place finish.",
        link: "",
        date: "Feb 2024",
    },
    {
        title: "Jhoomer Performance",
        platform: "Punjab State",
        icon: "https://cdn.simpleicons.org/academia/4285F4",
        tag: "Cultural",
        stars: null,
        maxStars: null,
        count: "🥁",
        desc: "Participated in a Jhoomer performance at the Punjab State Cultural Youth Festival, representing regional folk traditions.",
        link: "",
        date: "Nov 2023",
    },
];

function AchCard({ ach, index }) {
    return (
        <div className="ach-card" style={{ animationDelay: `${index * 0.08 + 0.05}s` }}>

            {/* Top: icon + tag */}
            <div className="card-top">
                <div className="platform-icon">
                    <img src={ach.icon} alt={ach.platform}
                        onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
                    <span className="platform-initials" style={{ display: 'none' }}>
                        {ach.platform.slice(0, 2)}
                    </span>
                </div>
                <span className="platform-tag">{ach.tag}</span>
            </div>

            {/* Count */}
            <div className="stars"><span className="ach-count">{ach.count}</span></div>

            {/* Title */}
            <div className="ach-title">{ach.title}</div>

            {/* Description */}
            <div className="ach-desc">{ach.desc}</div>

            {/* Bottom: platform + date + link */}
            <div className="card-bottom">
                <span className="ach-platform">{ach.platform} · {ach.date}</span>
                {ach.link ? (
                    <a href={ach.link} target="_blank" rel="noopener noreferrer" className="ach-link">
                        View Profile →
                    </a>
                ) : (
                    <span className="ach-link" style={{ opacity: 0.3 }}>—</span>
                )}
            </div>

        </div>
    );
}

export default function Achievements() {
    return (
        <section className="achievement">
            <div className="grid-bg" />
            <div className="page">
                <div className="header">
                    <div className="eyebrow">What I've earned</div>
                    <h1 className="page-title">
                        <span className="solid">Achieve</span>
                        <span className="outline">ments</span>
                    </h1>
                </div>
                <div className="ach-grid">
                    {ACHIEVEMENTS.map((a, i) => (
                        <AchCard key={i} ach={a} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}