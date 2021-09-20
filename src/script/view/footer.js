import '../components/bottom-nav'

const footer = () => {
  const menuIcon = document.querySelector(".menu")
  const sidebar = document.querySelector(".sidebar");
  const closeSidebar = document.querySelector(".content-wrapper");

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