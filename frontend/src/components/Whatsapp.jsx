import "./Whatsapp.css"

export default function Whatsapp() {
    const phone = "919464733826";
    const message = "Hi Taranprabhjit, I saw your work and would like to discuss a potential opportunity with you.";

    return (
        <a
            href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
            className="whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
        >
            <svg viewBox="0 0 32 32" width="26" height="26" fill="white">
                <path d="M16 3C9.4 3 4 8.4 4 15c0 2.6.8 5 2.2 7L4 29l7-2.1c2 1.1 4.2 1.6 6.5 1.6 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 22c-2 0-4-.6-5.7-1.7l-.4-.2-4.1 1.2 1.1-4-.3-.4C5.4 18.3 5 16.7 5 15c0-6 5-11 11-11s11 5 11 11-5 11-11 11zm6.2-7.5c-.3-.2-1.7-.8-2-1-.3-.1-.5-.2-.7.2s-.8 1-.9 1.2c-.2.2-.3.2-.6.1s-1.3-.5-2.5-1.5c-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.6s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 2.8 1.2 3.2 1.4 3.4c.2.2 2.4 3.7 5.9 5 .8.3 1.4.5 1.9.6.8.2 1.5.2 2 .1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4 0-.2-.1-.2-.3-.3z" />
            </svg>
        </a>
    );
}