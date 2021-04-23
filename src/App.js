import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//importing components

import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import MyContacts from './components/Contact';
import NotFoundPage from './components/NotFoundPage'
import Header from './components/Header';

const App = (props) => {
    const [showPage, setShowPage] = useState(false)

    //getting the state from the header component, setting the logic of setShowPage depending on this data
    const handleShowPage = (showMenu) => {
        console.log(showMenu)
    }
    return (

        <BrowserRouter>
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
                <Switch>
                    <Route path='/' render={(props) => <Home {...props} />} exact={true} />
                    <Route path='/about' component={About} />
                    <Route path='/projects' component={Projects} />
                    <Route path='/contacts' component={MyContacts} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App;