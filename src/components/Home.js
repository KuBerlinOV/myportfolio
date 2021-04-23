import React from 'react';
import Header from './Header'

const Home = ({ showMenu }) => {
    return (
        <div>
            <main className={`${showMenu === true ? 'hide' : 'show'}`} id="home">
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