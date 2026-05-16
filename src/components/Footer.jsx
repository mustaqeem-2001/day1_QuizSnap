export default function Header() {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer>
            <div className="contact-info">
                <p>Contact me on: </p>
                <a href="https://www.linkedin.com/in/mustaqeem-c-3a3875208/" className="contact-ln">LinkedIn</a>
                <a href="mailto:mustaqeem.a.chowdhury@gmail.com" className="contact-gmail">Gmail</a>
                <a href="https://wa.me/447534249940" className="contact-whatsapp">WhatsApp</a>
            </div>
            <p className="github-repo">You can find my code on <a href="https://github.com/mustaqeem-2001/day1_QuizSnap" className="github-repo-link">GitHub</a></p>
            <p className="copyright">@copy; {currentYear} QuizSnap. All rights reserved.</p>
        </footer>
    )
}