import React from 'react';
import Header from './Header'

const MyContacts = ({ showMenu }) => {
    return (
        <div>
            <main className={`${showMenu === true ? 'hide' : 'show'}`} id="contact">
                <h2>How to Reach Me</h2>
            </main>
        </div>
    )
}

export default MyContacts;