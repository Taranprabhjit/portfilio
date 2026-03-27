import "./Resume.css";

export default function Resume() {
    const resumePath = "/CV.png"; // place your resume.pdf in /public

    return (
        <section className="resume">
            <div className="grid-bg" />

            {/* Top bar */}
            <div className="top-bar">
                <div className="top-left">
                    <div className="eyebrow">My resume</div>
                    <div className="page-title">
                        <span className="solid">Re</span>
                        <span className="outline">sume</span>
                    </div>
                </div>

                <div className="top-right">
                    <a href={resumePath} target="_blank" rel="noopener noreferrer" className="btn-open">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                        Open in tab
                    </a>

                    <a href={resumePath} download="Taranprabhjit_Singh_Resume.png" className="btn-download">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        Download PDF
                    </a>
                </div>
            </div>

            {/* PDF Viewer */}
            <div className="viewer-wrap">
                <div className="pdf-frame">
                    <iframe src={resumePath} title="Taranprabhjit Singh Resume" />
                </div>
            </div>
        </section>
    );
}