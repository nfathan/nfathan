class NavBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
        /* navbar ================================ */
        nav-bar {
            display: flex;
            z-index: 1;
            height: 80px;
            width: 100%;
            padding: 0 120px;
        }
        
        .navbar-brand {
            flex-basis: 30%;
            font-family: "Amsterdam One", fangsong;
            font-weight: 600;
            font-size: 52px;    
            color: #ffff;
            cursor: pointer;
            line-height: 100px;
            margin: 0;
        }
        
        .navbar-brand:hover {
            color: #ffff;
        }
        
        .navbar-menu {
            flex-basis: 70%;
        }
        
        .navbar-list {
            display: flex;
            line-height: 70px;
        }

        .navbar-list li {
          list-style-type: none;
        }

        .navbar-item {
            font-size: 14px; 
            font-weight: 600;
            padding: 15px;
            cursor: pointer;
            backdrop-filter: blur(16px) saturate(180%);
            -webkit-backdrop-filter: blur(16px) saturate(180%);
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.125);
            margin: 10px;
        }
        
        .navbar-item:hover {
            border-bottom: 2px solid #ffff;
        }
        
        .navbar-item:focus { 
            color: #ffff;
            border-bottom: 2px solid #ffff;
        }
        
        /* tablet ==================== */
        @media (max-width: 1000px) {
            nav-bar {
                padding: 0 30px;
            }
        
            .navbar-brand {
                flex: auto;
                font-size: 26px;  
            }
        
            .navbar-menu {
                display: none;
            }
        }
        
        /* smartphone ==================== */
        @media (max-width: 670px) {
            nav-bar {
                padding: 0 15px;
            }
        }
        </style>

        <div class="sidebar">
            <div class="sidebar-menu">
                <ul class="sidebar-list">
                    
                    <li><a class="sidebar-item" onclick="openTab('experience', this, '#58d2b2')" href="#experience">Experience</a></li>
                    <li><a class="sidebar-item" onclick="openTab('education', this, '#58d2b2')" href="#education">Education</a></li>
                    <li><a class="sidebar-item" onclick="openTab('PiaCianni', this, '#58d2b2')" href="#PiaCianni">Pia Cianni</a></li>
                </ul>
            </div>
        </div>
        
        <a href="index.html" class="navbar-brand center">F  /</a>
        <div class="navbar-menu">
            <ul class="navbar-list">
                
                <li><a class="navbar-item" onclick="openTab('experience', this, '#f6faff')" href="#">Experience</a></li>
                <li><a class="navbar-item" onclick="openTab('education', this, '#f6faff')" href="#">Education</a></li>
                <li><a class="navbar-item" onclick="openTab('PiaCianni', this, '#f6faff')" href="#">PiaCianni</a></li>
            </ul>
        </div>
        `;
    }
}

customElements.define("nav-bar", NavBar);