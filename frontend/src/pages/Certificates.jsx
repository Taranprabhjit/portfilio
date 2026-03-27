import "./Certificates.css";
import CertificateCard from "../components/CertificateCard";

const CERTS = [
    {
        name: "Design Thinking & Prototype in Figma",
        issuer: "LPU",
        date: "Aug 2025",
        domain: "Design",
        link: "https://drive.google.com/file/d/17Pnt38EouUJcrrrsftuQV54k0p1zuKBr/view?usp=drivesdk",
        image: "/design.jpeg",
        logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHJ4PSI2IiBmaWxsPSIjMWUzYTVmIi8+PHRleHQgeD0iNSIgeT0iMjEiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMzOGJkZjgiPkxQVTwvdGV4dD48L3N2Zz4=",
    },
    {
        name: "Python Programming",
        issuer: "IIT Roorkee",
        date: "Sep 2024",
        domain: "Programming",
        link: "https://drive.google.com/file/d/1tzok8xoX0LDAchvpB8VnnTu95ogBRJ2r/view?usp=drivesdk",
        image: "/python.jpeg",
        logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHJ4PSI2IiBmaWxsPSIjMWUzYTVmIi8+PHRleHQgeD0iMyIgeT0iMjEiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMzOGJkZjgiPklJVFI8L3RleHQ+PC9zdmc+",
    },
    {
        name: "C Language",
        issuer: "Neo Colab",
        date: "May 2024",
        domain: "Programming",
        link: "",
        image: "",
        logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHJ4PSI2IiBmaWxsPSIjMWUzYTVmIi8+PHRleHQgeD0iNSIgeT0iMjEiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMzOGJkZjgiPk5DPC90ZXh0Pjwvc3ZnPg==",
    },
    {
        name: "HTML, CSS and JavaScript",
        issuer: "FreeCodeCamp",
        date: "Dec 2023",
        domain: "Frontend",
        link: "https://www.freecodecamp.org/certification/taranprabhjit_singh/responsive-web-design",
        image: "/html.png",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAh1BMVEUKCiMAABgAAA0JCSMAAA9XV2Obm6IAAB0AABRGRlP///+wsLcXFyo7O00AAAAnJzampqwEBCHr6+5zc3wAABHCwsfa2t47O0f09PZRUV5cXGgAABaBgYrT09cAABO2trwAABqXl58AAAUAACAVFSphYWlbW2E1NUKPj5cfHzLMzNBoaHQsLD//65ZnAAABT0lEQVR4AcRQBYKDQAwMTtM2FN/i7v9/32XZcvKCGyQycfgvaLrx12Ho2qWalq0pn3NF25apNPeGd/3kHk9SLv2ON1cqjocvOsv6jyCMVAl6oeew1OJE8+EMSwW+VQNfS2LNAC1DK/8UKxDLSs2WW5hpQHVCoGo1CaKwGmVRUhNUov2QXYGMQv+QrXDBE6ELEv0gEAMsSNV1Q+FBKsZGDXhHjAucCjjZZhQpzGLUzsiMG3qhuOOiS1sbxQyrKmvkG+JCC3dNwFdlVzBF28mOc8BespkM0l6O1woTKC5JkmmAe+SGkpwlSWVMEIU4y0MNiYDe0N57WfJpwJmRT+mvSd2xFS2Ja/AhqN5zju3iZPXZu+NO8pr1w2Dh2RELYmcEDJ5id9ntHD7/n5Lj3ra6mx/VZSW3UZYUVVmbPii78Xr4g95r/Es3Lu2Cyv8arQAAQJwXtvIxXO8AAAAASUVORK5CYII=",
    },
];

export default function Certificates() {
    return (
        <section className="certificates">
            <div className="grid-bg" />
            <div className="page">
                <div className="header">
                    <div className="eyebrow">Certificates</div>
                </div>
                <div className="cert-grid">
                    {CERTS.map((cert, i) => (
                        <CertificateCard key={i} cert={cert} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}