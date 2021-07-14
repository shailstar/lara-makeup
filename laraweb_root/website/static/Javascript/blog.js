let navbut = document.querySelector(".navbutton");
let navmenu = document.querySelector("#left-m");
navbut.addEventListener('click', function(){
  if(navbut.textContent == "☰"){
      console.log("I am Clciked1");
      navbut.textContent = "🞬";
      navmenu.style.display = "block";
  }else{
      console.log("I am Clciked2");
      navbut.textContent = "☰";
      navmenu.style.display = "none";
  }
})