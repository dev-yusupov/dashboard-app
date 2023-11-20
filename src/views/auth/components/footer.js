import "../auth.css";

const Footer = () => {
    return (
        <footer className="Auth-Footer">
            <p>&copy;2023 Made with React by <a href="https://github.com/dev-yusupov">Bobur Yusupov (dev-yusupov)</a></p>
            <ul className="Auth-Footer-Links">
                <li className="Auth-Footer-Link">
                    <a href="https://github.com/dev-yusupov/dashboard-app">Source Code</a>
                </li>
                <li className="Auth-Footer-Link">
                    <a href="https://github.com/dev-yusupov">Developer</a>
                </li>
                <li className="Auth-Footer-Link">
                    <a href="https://github.com/anur-ai">Company</a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer