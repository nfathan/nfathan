class BottomNav extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
      this.innerHTML = `
      <style>
      bottom-nav {
        display: none;
      }
      
      /* tablet ==================== */
      @media (max-width: 1000px) {
        bottom-nav {
          display: block;
          position: fixed;
          bottom: 0;
          z-index: 1;
          width: 100%;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          background-color: rgba(17, 25, 40, 0.99);
        }

        .bottom-nav-list {
          display: flex;
          color : #9ca3af;
        }

        .bottom-nav-item {
          width: 100%;
          text-align: center;
          margin: 10px 0;
        }
      }
      
      /* smartphone ==================== */
      @media (max-width: 670px) {
        .bottom-nav-item {
          margin: 5px 0;
        }
      }

      /* sidebar ================================ */
        .sidebar-icon {
          display: none;
          font-size: 26px;
          background-color: transparent;
          color: #6c7686;
          margin-top: 20px;
          padding: 0 15px;
          border: 1px solid rgba(255, 255, 255, 0.125);
          border-radius: 10px
        }
        
        .sidebar {
          display: none;
          z-index: 1;
          width: 300px;
          height: calc(100% - 60px);
          top: 0;
          left: 0;
          position: fixed;
          font-size: 14px;
          font-weight: 600;
          border-right: 1px solid rgba(255, 255, 255, 0.125);
          box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.1);
          transform: translate(-310px, 0);
          transition: transform 0.3s ease-in-out;
          backdrop-filter: blur(16px) saturate(180%);
          -webkit-backdrop-filter: blur(16px) saturate(180%);
          background-color: rgba(255, 255, 255, 0.1);
        }
        
        .sidebar.open {
          transform: translate(0,0)
        }
        
        .sidebar-menu {
          padding: 20px;
        }
        
        .sidebar-list {
          text-align: left;
          margin-top: 40px;
          padding: 10px 0;
          border-radius: 10px;
          border-top: 1px solid rgba(255, 255, 255, 0.125);
        }
        
        .sidebar-list li {
          padding: 10px 0;
          list-style-type: none;
        }
        
        .sidebar-item {
          padding: 10px;
        }
        
        .sidebar-item:hover {
          border-bottom: 2px solid #6c7686;
        }
        
        .sidebar-item:focus {
          border-bottom: 2px solid #a1a6af;
        }
        
        /* tablet ==================== */
        @media (max-width: 1000px) {        
          .sidebar-icon {
            display: block;
          }
      
          .sidebar {
            display: block;
          }
        }
        
        /* smartphone ==================== */
        @media (max-width: 670px) {
          .sidebar-icon {
            display: block;
          } 
        }
      </style>

      <div class="bottom-nav-list">
        <div class="bottom-nav-item">
          <button class="menu icon" type="button"> &#9776 </button>
        </div>
        <div class="bottom-nav-item">
          <a class="home icon" href="/"> &#8962 </a>
        </div>
        <div class="bottom-nav-item">
          <button class="contact icon" type="button" onclick="openTab('contact', this, '#f6faff')"> &#128172 </button>
        </div>
      </div>

      <div class="sidebar">
        <div class="sidebar-menu">
          <button class="closebtn" type="button">&#120;</button>
          <ul class="sidebar-list">
            <li><a class="sidebar-item" onclick="openTab('experience', this, '#58d2b2')" href="#experience">Experience</a></li>
            <li><a class="sidebar-item" onclick="openTab('education', this, '#58d2b2')" href="#education">Education</a></li>
            <li><a class="sidebar-item" onclick="openTab('PiaCianni', this, '#58d2b2')" href="#PiaCianni">Pia Cianni</a></li>
          </ul>
        </div>
        </div>
      `;
  }
}

customElements.define("bottom-nav", BottomNav);