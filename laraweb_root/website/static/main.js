/*readmore button*/
let rdmr = document.querySelector('.onc');
rdmr.addEventListener('click', function(){
  location.href = '/about';
})

  /* only execute this script when the document is ready */


$(document).ready(function(){
  /* function called when you click of the button */
  $(".navbutton").click(function(){

      /* this if else to change the text in the button */
      if($(".navbutton").text() == "☰"){
       $(".navbutton").text("🞬");
      }else{
        $(".navbutton").text("☰");
      }

    /* this function toggle the visibility of our "li" elements */
    $("li").toggle("slow");
  });
});
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

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 500,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 3000
  });

let bgpattern = document.querySelector("#services");
window.addEventListener("scroll", function(){
  bgpattern.style.backgroundPosition = + window.pageYOffset + 'px';
})

window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let image = document.getElementById("Layer_1");
    image.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
}
// let slideIndex = 0;
// let profileImages = document.getElementsByClassName('cover1');
// console.log(profileImages.length);
// function crouselPrfoile(){
//   for(let i = 0; i < profileImages.length; i++){
//     profileImages[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > profileImages.length){
//     slideIndex = 1;
//   }
//   profileImages[slideIndex-1].style.display = "block";
// };
// crouselPrfoile();
// setInterval(crouselPrfoile, 5000);





