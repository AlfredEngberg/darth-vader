import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <header>
                <nav>
                    <h1><a href="/">Puffes Weather</a></h1>
                    <div class="button-nav">
                        <ul class="nav-menu">
                            <li class="button nav-item"><a href="/about">about</a></li>
                            <li class="button nav-item"><a href="/contact">contact</a></li>
                        </ul>
                    </div>

                    <div class="hamburger">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar