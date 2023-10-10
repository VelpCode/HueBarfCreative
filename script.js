const container = document.querySelector('.container')

container.innerHTML = `
<nav class = "sidebar">
        <header>
            <img class = 'tdot' src = 'images/3dot.png'>
            <div class = "text header-text">
                <span class = "name">Hue Barf.</span>
            </div>
        </header>

        <div class = "menu-bar">
            <div class="menu">
                <ul class ="menu-links">
                    <li class = "nav-link">
                        <a href = "#">
                            <i class="fa-solid fa-house"></i>
                            <span class = "text nav-text">Dashboard</span>
                        </a>
                    </li>
                    <li class = "nav-link">
                        <a href = "#">
                            <i class="fa-brands fa-app-store-ios"></i>
                            <span class = "text nav-text">Other Apps</span>
                        </a>
                    </li>
                    <li class = "nav-link">
                        <a href = "#">
                            <i class="fa-solid fa-street-view"></i>
                            <span class = "text nav-text">Overview</span>
                        </a>
                    </li>
                    <li class = "nav-link">
                        <a href = "#">
                            <i class="fa-solid fa-address-card"></i>
                            <span class = "text nav-text">About</span>
                        </a>
                    </li>
                    <li class = "nav-link">
                        <a href = "#">
                            <i class="fa-solid fa-address-book"></i>
                            <span class = "text nav-text">Contact Us</span>
                        </a>
                    </li>
                    <li class = "nav-link">
                        <a href = "#">
                            <i class="fa-solid fa-hippo"></i>
                            <span class = "text nav-text">DivSplash</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    </nav>

    <div class="container">

        <div class="header">
            <h1 class = 'title'>Hue Barf.</h1>
            <h3 class = 'heading'>A gradient collection designed for you.</h3>
        </div>
        <div class = "hero">
            <img class = "barfie" src = "images/barfue.png">
        </div>
        <div class = "divbox">
            <div class ="boxcontainer">
                <div class = "box-one">
                        <p></p>
                </div>
                <div class = "box-two">
                    <p></p>
                </div>
                <div class = "box-three">
                    <p></p>
                </div>
            </div>
        </div>

    </div>
`