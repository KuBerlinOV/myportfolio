import React from 'react';

const MyContacts = ({ showMenu }) => {
    return (
        <div>
            <main className={`contacts ${showMenu === true ? 'hide' : 'show'}`} id="contact">
                <h2 className='md-heading'>Contacts</h2>
                <div className='links'>
                    <a target='_blank' href='https://github.com/KuBerlinOV'><i class="fab fa-4x fa-github-square icon"></i></a>
                    <a target='_blank' href='https://www.linkedin.com/in/basan-kuberlinov-637170166/'><i class="fab fa-4x fa-linkedin icon"></i></a>
                    <a target='_blank' href='https://www.facebook.com/basan.kuberlinov'><i class="fab fa-4x fa-facebook-square icon"></i></a>
                </div>
            </main>
        </div>
    )
}

export default MyContacts;