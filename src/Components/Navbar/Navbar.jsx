import "./Navbar.css"
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import { useState } from "react"

const Menu = () => {
    return (
        <>
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What is GPT3</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Libraries</a></p>
        </>
    )
}

export default function Navbar() {

    const [toggleMenu, setToggleMenu] = useState(false);

    const handleMenu = () => {
        setToggleMenu(!toggleMenu)
    }

    return (
        <div className="gpt3-navbar">
            <div className="gpt3-navbar-links">
                <div className="gpt3-navbar-links-logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="gpt3-navbar-links-container">
                    <Menu />

                </div>
            </div>
            <div className="gpt3-navbar-sign">
                <p>Sign in</p>
                <button type="submit">Sign up</button>
            </div>

            <div className="gpt3-navbar-menu">
                {toggleMenu ? <RiCloseLine size={27} color="#fff" onClick={handleMenu} />
                    : <RiMenu3Line size={27} color="#fff" onClick={handleMenu} />}

                {toggleMenu && (
                    <div className="gpt3-navbar-menu-container scale-up-center">
                        <div className="gpt3-navbar-menu-container-links">
                            <Menu />
                            <div className="gpt3-navbar-menu-container-links-sign">
                                <p>Sign in</p>
                                <button type="submit">Sign up</button>
                            </div>

                        </div>
                    </div>

                )}

            </div>

        </div>
    )
}