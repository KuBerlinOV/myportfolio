import React from 'react';
import Header from './Header'

const Home = () => {
    return (
        <div>
            <header>
                <div onClick={handleShowMenu} class={`menu-btn ${showMenu === true && 'close'}`}>
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
            <main class="show" id="home">
                <h1 id="title" class="lg-heading">
                    <span class="firstname">Basan</span> <span class="lnKu">Ku</span><span class="lnBerlin">berlin</span><span
                        class="lnOV">ov</span>
                </h1>

                <h2 class="sm-heading">
                    Web-Developer
        </h2>
                <div class="icons">
                    <a href="">
                        <i class="fab fa-linkedin fa-2x"></i>
                    </a>
                    <a href="">
                        <i class="fab fa-github fa-2x"></i>
                    </a>
                    <a href="">
                        <i class="fab fa-facebook fa-2x"></i>
                    </a>
                </div>
            </main>
        </div>
    )
}

export default Home;