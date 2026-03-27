import { useState } from "react";
import "./Contact.css";

const PROFILES = [
    {
        name: "LinkedIn",
        handle: "linkedin.com/in/taranprabhjit",
        link: "https://www.linkedin.com/in/taranprabhjit",
        icon: <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAATlBMVEVHcEwAd7UAd7UAd7UAd7UAd7UAd7UAd7UAd7UAd7X///8CcLIAaa5Nj8Hn8/lypMyawNw6hby81+j0+/0ZeLXT5fBnnchdlcOLtNWxzePrILPNAAAACnRSTlMAUn3/Gpo9+Wne3pzmuwAAAMZJREFUKJHNk9sWgiAQRcfQjIZrIOr//2gzRK6K8b3z4JG1UeYGAFz03EtPwNLqRCPAdMaUBmBDg0agV4ZYXAoCvTHMd5JHEaJn+Og/rTAy3GSojE9pPztTGczMELGGbvATRlJWmc3EbQ++7mq/dXTmipbDWhMH4OI3tBUulZEbAR6yKEBXbKiZSXClMi/knNovdJmWoRWsg/j/MB21TV0qWLz31BV6Fl5aeuHyDXVssXXyZe/GKoCxn4CmgSZ+lG7DrPQV4AnbbBfzU77xIAAAAABJRU5ErkJggg==" alt="LinkedIn" />,
    },
    {
        name: "GitHub",
        handle: "github.com/Taranprabhjit",
        link: "https://github.com/Taranprabhjit",
        icon: <img src="https://cdn.simpleicons.org/github/ffffff" alt="GitHub" />,
    },
    {
        name: "Email",
        handle: "taran.prabhjit@gmail.com",
        link: "mailto:taran.prabhjit@gmail.com",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.8">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
        ),
    },
   
];

export default function Contact() {
    const [sent, setSent] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = e => {
        e.preventDefault();
        // Hook up to EmailJS / Formspree / your backend here
        setSent(true);
    };

    return (
        <section className="contact">
            <div className="grid-bg" />

            {/* LEFT */}
            <div className="left-panel">
                <div className="eyebrow">Get in touch</div>
                <h1 className="page-title">
                    <span className="solid">Let's</span>
                    <span className="outline">Talk</span>
                </h1>
                <p className="tagline">
                    Have a project in mind or just want to say hi?
                    Feel free to reach out — I'm always open to new opportunities and collaborations.
                </p>

                <div className="profiles-label">Find me on</div>
                <div className="profiles">
                    {PROFILES.map((p) => (
                        <a key={p.name} href={p.link} target="_blank" rel="noopener noreferrer" className="profile-link">
                            <div className="profile-icon">{p.icon}</div>
                            <div className="profile-info">
                                <span className="profile-name">{p.name}</span>
                                <span className="profile-handle">{p.handle}</span>
                            </div>
                            <span className="profile-arrow">→</span>
                        </a>
                    ))}
                </div>
            </div>

            {/* RIGHT: FORM */}
            <div className="right-panel">
                {!sent && (
                    <div className="form-title">Send me a message</div>
                )}
                {sent && (
                    <div className="success-msg">
                        ✓ Message sent! I'll get back to you soon.
                    </div>
                )}
                <form className="form" onSubmit={handleSubmit} style={sent ? { opacity: 0.4, pointerEvents: "none" } : {}}>
                    <div className="field">
                        <label>Your Name</label>
                        <input
                            type="text" name="name" required
                            placeholder="John Doe"
                            value={form.name} onChange={handleChange}
                        />
                    </div>
                    <div className="field">
                        <label>Your Email</label>
                        <input
                            type="email" name="email" required
                            placeholder="john@example.com"
                            value={form.email} onChange={handleChange}
                        />
                    </div>
                    <div className="field">
                        <label>Message</label>
                        <textarea
                            name="message" required
                            placeholder="Hey Taranprabhjit, I'd love to work with you on..."
                            value={form.message} onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="btn-send">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <line x1="22" y1="2" x2="11" y2="13" />
                            <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}