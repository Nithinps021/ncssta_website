const navSlider = () => {
  const menuIcon = document.querySelector(".menu");
  const nav = document.querySelector(".nav-link ");

  menuIcon.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
};
navSlider();

// const menuButton(){
//   document.getElementById('menu').style.display='none';
//   document.getElementById()
// }
