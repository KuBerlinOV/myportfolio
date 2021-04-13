import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    //states
    const [showMenu, setShowMenu] = useState(false)

    //handlers
    const handleShowMenu = () => {
        if (showMenu === false) {
            setShowMenu(true)
        } else {
            setShowMenu(false)
        }
    }

    return (
        <header>
            <div onClick={handleShowMenu} class="menu-btn">
                <div class="btn-line"></div>
                <div class="btn-line"></div>
                <div class="btn-line"></div>
            </div>
            <nav className={`menu ${showMenu === false ? 'hide' : 'show'}`} >
                <ul class="menu-nav">
                    <li class="nav-item">
                        <NavLink onClick={handleShowMenu} to="/">Home</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink onClick={handleShowMenu} to="/about">About</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink onClick={handleShowMenu} to="/projects">Projects</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink onClick={handleShowMenu} to="/contacts">How to Reach Me</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;