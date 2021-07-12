import React from 'react';

const Home = ({ showMenu }) => {
    return (
        <div>
            <main className={`${showMenu === true ? 'hide' : 'show'}`} id="home">
                <h1 id="title" class="lg-heading">
                    <span class="firstname">Basan</span> <span class="lnKu">Ku</span><span class="lnBerlin">berlin</span><span
                        class="lnOV">ov</span>
                </h1>
                <h2 class="sm-heading">
                    Full Stack Web Developer
                </h2>
                <div class="icons">
                    <a target='_blank' href='https://github.com/KuBerlinOV'><i class="fab fa-2x fa-github-square icon"></i></a>
                    <a target='_blank' href='https://www.linkedin.com/in/basan-kuberlinov-637170166/'><i class="fab fa-2x fa-linkedin icon"></i></a>
                    <a target='_blank' href='https://www.facebook.com/basan.kuberlinov'><i class="fab fa-2x fa-facebook-square icon"></i></a>
                </div>
            </main>
        </div>
    )
}

export default Home;