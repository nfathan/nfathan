import '../components/nav-bar.js';
import '../components/bottom-nav'

const header = () => {
    /* navbar ================================ */
    /* tab ================================ */
    const openTab = (tabName, element, color) => {
        const tabContent = document.querySelectorAll(".tab-content"); 
        for (let tabContentItem of tabContent) {
            tabContentItem.style.display = "none"; //menutup tab-content setiap ada tabcontent yg tetbuka
        }
        
        document.querySelector(".sidebar").classList.remove("open"); // menutup sidebar..
    
        const navbarsidebarItems = document.querySelectorAll(".navbar-item, .sidebar-item");
        for (let navsidebarItem of navbarsidebarItems) {
            navsidebarItem.style.backgroundColor = ""; //mengosongkan warna background navbar-item dan sidebar-item
        }
        
        document.getElementById(tabName).style.display = "block"; //mengakses id(melalui tabName) dan membuka main-content 
        // element.style.backgroundColor = color; // memberi warna background navbar-item dan sidebar-item (melalui color)
    };
    
    document.openTab=openTab;
        
    /* sidebar ================================ */
    // const sidebarIcon = document.querySelector(".sidebar-icon"); //mengakses sidebar-icon
    // const sidebar = document.querySelector(".sidebar");
    // const closeSidebar = document.querySelector(".content-wrapper");

    // sidebarIcon.addEventListener("click", event => { //mengklik sidebar-icon
    //     sidebar.classList.toggle("open"); //membuka sidebar-content 
    //     event.stopPropagation();
    // });

    // closeSidebar.addEventListener("click", event =>  {
    //     sidebar.classList.remove("open"); //menutup sidebar-content
    //     event.stopPropagation();
    // });
}

export default header;