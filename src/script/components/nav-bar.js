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
            margin-top: 20px;
        }
        
        .navbar-brand {
            flex-basis: 30%;
            line-height: 100px;
            margin: 0;
        }
        
        .navbar-brand img {
          width: 190px;
        }

        .navbar-menu {
            flex-basis: 70%;
        }
        
        .navbar-list {
            display: flex;
            line-height: 50px;
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
        
        <div class="navbar-brand center">
          <a href="index.html">
            <img src="./public/images/nfathan-logo.png" alt="nfathan-logo"> 
          </a>
          </div>
        <div class="navbar-menu">
            <ul class="navbar-list">
                
                <li><a class="navbar-item" onclick="openTab('experience', this, '#f6faff')" href="#">Experience</a></li>
                <li><a class="navbar-item" onclick="openTab('education', this, '#f6faff')" href="#">Education</a></li>
                <li><a class="navbar-item" onclick="openTab('contact', this, '#f6faff')" href="#">Contact</a></li>
                <li><a class="navbar-item" onclick="openTab('PiaCianni', this, '#f6faff')" href="#">PiaCianni</a></li>
            </ul>
        </div>
        `;
    }
}

customElements.define("nav-bar", NavBar);