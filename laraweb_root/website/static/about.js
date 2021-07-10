let navbut = document.querySelector(".navbutton");
let navmenu = document.querySelector("#left-m");
navbut.addEventListener('click', function(){
  if(navbut.textContent == "☰"){
    navbut.textContent = "🞬";
    navmenu.style.display = "block";
  }else{
    navbut.textContent = "☰";
    navmenu.style.display = "none";

  }
})

var carouselSlides = document.getElementsByClassName("Slide");
var dotNode = document.getElementsByClassName("fa fa-circle");
var currentIndex = 0;
for (let i = 0; i < carouselSlides.length; i++) {
    let newDot = document.createElement("li");

    newDot.className = "fa fa-circle";
    newDot.setAttribute("onclick", "dotClick(this.id)");
    newDot.setAttribute("id", parseInt(i));

    let dotContainer = document.querySelector(".dotList");
    dotContainer.appendChild(newDot);
 }

function displayImage() {
    for (let j = 0; j < carouselSlides.length; j++) {
      carouselSlides[j].style.display = "none";
    }
    carouselSlides[currentIndex].style.display = "block";
}
function displayDot() {
    for (let j = 0; j < dotNode.length; j++) {
      dotNode[j].style.color = "grey";
    }
    dotNode[currentIndex].style.color = "black";
}
function moveLeft() {
    if (currentIndex == 0) {
      currentIndex = carouselSlides.length - 1;
    } else {
      currentIndex--;
    }

    displayImage();
    displayDot();
}

function moveRight() {
    if (currentIndex == carouselSlides.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }

    displayImage();
    displayDot();
}
function dotClick(c) {
  currentIndex = c;
  displayImage();
  displayDot();
}

displayImage();
displayDot();

VanillaTilt.init(document.querySelector(".Slide"),{
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 1
});

VanillaTilt.init(document.querySelector("#item-a"),{
    max: 25,
    speed: 400
});

VanillaTilt.init(document.querySelector("#item-b"),{
    max: 25,
    speed: 400
});

VanillaTilt.init(document.querySelector("#item-c"),{
    max: 25,
    speed: 400
});

VanillaTilt.init(document.querySelector("#item-d"),{
    max: 25,
    speed: 400
});

VanillaTilt.init(document.querySelector("#item-e"),{
    max: 25,
    speed: 400
});

VanillaTilt.init(document.querySelector("#item-1"),{
    max: 25,
    speed: 400
});

VanillaTilt.init(document.querySelector("#item-2"),{
    max: 25,
    speed: 400
});

VanillaTilt.init(document.querySelector("#item-3"),{
    max: 25,
    speed: 400
});