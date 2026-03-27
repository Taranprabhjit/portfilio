export default function CertificateCard({ cert, index }) {
    return (
        <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flip-card"
            style={{ animationDelay: `${index * 0.05 + 0.05}s` }}
        >
            <div className="flip-inner">

                {/* FRONT */}
                <div className="flip-front">

                    {/* Row 1: Logo + Date */}
                    <div className="front-top">
                        <div className="issuer-logo">
                            {cert.logo
                                ? <img src={cert.logo} alt={cert.issuer} onError={e => e.target.style.display = 'none'} />
                                : <span className="issuer-initials">{cert.issuer.slice(0, 2).toUpperCase()}</span>
                            }
                        </div>
                        <span className="cert-date">{cert.date}</span>
                    </div>

                    {/* Row 2: Certificate Name */}
                    <div className="cert-name">{cert.name}</div>

                    {/* Row 3: Company + Domain */}
                    <div className="front-bottom">
                        <span className="cert-issuer">{cert.issuer}</span>
                        <span className="cert-domain">{cert.domain}</span>
                    </div>

                </div>

                {/* BACK */}
                <div className="flip-back">
                    <div className="back-img">
                        {cert.image ? (
                            <img src={cert.image} alt={cert.name} />
                        ) : (
                            <div className="back-placeholder">
                                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1">
                                    <rect x="3" y="3" width="18" height="18" rx="2" />
                                    <path d="M9 12l2 2 4-4" />
                                    <path d="M3 9h18" />
                                </svg>
                                <span className="back-placeholder-text">Certificate Preview</span>
                            </div>
                        )}
                    </div>
                    <div className="back-footer">
                        <span className="back-footer-name">{cert.name}</span>
                        <span className="back-footer-link">View →</span>
                    </div>
                </div>

            </div>
        </a>
    );
}