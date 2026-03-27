import "./Home.css";
 //import profileImg from "C:\Users\taran\Desktop\PEV\Portfolio\Portfolio\frontend\public\photo.jpeg";
export default function Home() {
    return (
        <main className="home">
            <div className="grid-bg" />

            <div className="home-container">

                {/* Profile Image */}
                <div className="profile-wrapper">
                    <div className="profile-image">
                        <img src="/photo.jpeg" alt="Taranprabhjit Singh" />
                    </div>
                </div>

                {/* Badge */}
                <div className="badge">
                    <span className="badge-dot" />
                    Available for work
                </div>

                {/* Name */}
                <h1 className="name">Taranprabhjit Singh</h1>

                {/* Animated Title */}
                <div className="title-row">
                    <span className="title-prefix">~/</span>
                    <span className="title">Aspiring Data Scientist</span>
                    <span className="type-cursor" />
                </div>

                {/* Divider */}
                <div className="divider">
                    <div className="divider-line" />
                    <div className="divider-diamond" />
                    <div className="divider-line" />
                </div>

                {/* Summary */}
                <p className="summary">
                    Passionate about transforming raw data into actionable insights through
                    exploratory data analysis, visualization, and machine learning.
                    Skilled in Python, Pandas, and Seaborn — with hands-on experience
                    in logistics analytics and a strong foundation in DSA and DBMS.
                </p>
            </div>
        </main>
    );
}