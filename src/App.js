import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

//importing components

import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import MyContacts from './components/Contact';
import NotFoundPage from './components/NotFoundPage';
import Header from './components/Header'

const App = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [widthSize, setWidthSize] = useState(0)

    useEffect(() => {
        setWidthSize(window.innerWidth)
        window.addEventListener('resize', () => {
            setWidthSize(window.innerWidth)
        })
    }, [])
    //handlers
    const handleShowMenu = () => {
        if (showMenu === false && widthSize < 768) {
            setShowMenu(true)
        } else {
            setShowMenu(false)
        }
    }
    return (
        <BrowserRouter>
            <Header handleShowMenu={handleShowMenu} showMenu={showMenu} innerWidth={widthSize} />
            <Switch>
                <Route path='/' exact={true} render={(props) => <Home {...props} showMenu={showMenu} />} />
                <Route path='/about' render={(props) => <About {...props} showMenu={showMenu} />} />
                <Route path='/projects' render={(props) => <Projects {...props} showMenu={showMenu} />} />
                <Route path='/contacts' render={(props) => <MyContacts {...props} showMenu={showMenu} />} />
                <Route component={NotFoundPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;