import '../components/bottom-nav'

const footer = () => {
  // bottom navigation
  const menuIcon = document.querySelector(".menu")
  const sidebar = document.querySelector(".sidebar");
  const closeSidebar = document.querySelector(".closebtn");

  menuIcon.addEventListener("click", event => { //mengklik sidebar-icon
    sidebar.classList.toggle("open"); //membuka sidebar-content 
    event.stopPropagation();
  });

  closeSidebar.addEventListener("click", event =>  {
    sidebar.classList.remove("open"); //menutup sidebar-content
    event.stopPropagation();
  });
}

export default footer