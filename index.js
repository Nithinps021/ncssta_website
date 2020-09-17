const navSlider = () => {
  const menuIcon = document.querySelector(".menu");
  const nav = document.querySelector(".nav-link ");

  menuIcon.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });

};
navSlider();

const popUp=document.querySelector(".box")
const close=document.querySelector('.close')
window.addEventListener('load',function(){
  showPopUp();
})

function showPopUp(){
  const time=1;
  let i=0;
  const timer=setInterval(() => {
    i++;
    if(i==time){
      clearInterval(timer);
      popUp.classList.add("show")
    }
    
  }, 1000);
}

close.addEventListener('click',function(){
  popUp.classList.remove("show")

})


// const menuButton(){
//   document.getElementById('menu').style.display='none';
//   document.getElementById()
// }
