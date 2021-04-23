import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

//importing components

import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import MyContacts from './components/Contact';
import NotFoundPage from './components/NotFoundPage';
import Header from './components/Header'

const App = (props) => {
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

        <BrowserRouter>
            <div>
                <Header handleShowMenu={handleShowMenu} showMenu={showMenu} />
                <Switch>
                    <Route path='/' exact={true} render={(props) => <Home {...props} showMenu={showMenu} />} />
                    <Route path='/about' render={(props) => <About {...props} showMenu={showMenu} />} />
                    <Route path='/projects' render={(props) => <Projects {...props} showMenu={showMenu} />} />
                    <Route path='/contacts' render={(props) => <MyContacts {...props} showMenu={showMenu} />} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App;