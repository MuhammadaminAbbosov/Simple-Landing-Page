import "./style/header.css"
import Logo from "../icons/Logo.svg"
import Path from "../icons/Path.svg"

function Header() {
    return (
        <header>
            <img src={Logo} alt="" />
            <nav>
                <a href="#">Sign in</a>
                <a href="#" className="btn">
                    <p>Sign up</p>
                    <img src={Path} alt="" />
                </a>
            </nav>
        </header>
    )
}

export default Header;