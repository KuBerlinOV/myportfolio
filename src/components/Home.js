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
                    Frontend Developer
                </h2>
            </main>
        </div>
    )
}

export default Home;