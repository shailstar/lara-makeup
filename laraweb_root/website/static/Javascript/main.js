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


/*readmore button*/

let rdmr = document.querySelector('.onc');
rdmr.addEventListener('click', function(){
  location.href = '/about';
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


let p = document.getElementsByClassName('Drag1');
let q = document.getElementsByClassName('Drag2');
let r = document.getElementsByClassName('Drag3');
let s = document.getElementsByClassName('Drag4');

p[0].addEventListener('click', me0); 
q[0].addEventListener('click', me1); 
r[0].addEventListener('click', me2); 
s[0].addEventListener('click', me3);


 
let o1click = 0;
function me0 (){
  if(o1click%2 == 0){
    console.log('I am Clicked')
    console.log(o1click%2);
    let slidy1 = document.getElementsByClassName('maketype112');
    let slidy2 = document.getElementsByClassName('maketype113');
    let slidy3 = document.getElementsByClassName('maketype114');
    let slidy4 = document.getElementsByClassName('maketype11');
    let slidy5 = document.getElementsByClassName('maketype115');
    console.log(slidy1);
    console.log(slidy2);
    console.log(slidy2);
    slidy1[0].style.display = 'none';
    slidy2[0].style.display = 'block';
    slidy3[0].style.display = 'block';
    slidy5[0].style.display = 'block';
    slidy4[0].style.backgroundColor = 'transparent';
    anime({
      targets: '.maketype113',
      left: '330px',
      easing: 'easeInOutQuad'
    }); 
    anime({
      targets: '.maketype114',
      left: '660px',
      easing: 'easeInOutQuad'
    }); 
    anime({
      targets: '.maketype115',
      left: '990px',
      easing: 'easeInOutQuad'
    });
    anime({
      targets: '.Drag1',
      scale: {
        value: 0.2,
        duration: 100,
        easing: 'easeInOutQuad'
      },
      rotate: {
        value: 180,
        duration: 100,
        easing: 'easeInOutQuad'
      },
      translateX: {
        value: -500,
        duration: 100,
        delay: 500,
        easing: 'linear'
      }
    }); 
    o1click++;
  }else if(o1click%2 == 1){
    console.log('I am Run');
    console.log(o1click%2);
    let slidy1 = document.getElementsByClassName('maketype112');
    let slidy2 = document.getElementsByClassName('maketype113');
    let slidy3 = document.getElementsByClassName('maketype114');
    let slidy5 = document.getElementsByClassName('maketype115');
    let slidy4 = document.getElementsByClassName('maketype11');
    console.log(slidy1);
    console.log(slidy2);
    console.log(slidy2);
    slidy1[0].style.display = 'block';
    slidy2[0].style.display = 'none';
    slidy3[0].style.display = 'none';
    slidy5[0].style.display = 'none';
    slidy4[0].style.backgroundColor = 'pink';
    anime({
      targets: '.maketype113',
      left: '-330px',
      easing: 'easeInOutQuad'
    }); 
    anime({
      targets: '.maketype114',
      left: '-660px',
      easing: 'easeInOutQuad'
    });
    anime({
      targets: '.maketype115',
      left: '-990px',
      easing: 'easeInOutQuad'
    });

    anime({
      targets: '.Drag1',
      scale: {
        value: 1,
        duration: 100,
        delay: 500,
        easing: 'easeInOutQuad'
      },
      rotate: {
        value: 0,
        duration: 100,
        delay: 500,
        easing: 'easeInOutQuad'
      },
      translateX: {
        value: 0,
        duration: 100,
        easing: 'easeInOutQuad'
      }
    });
    o1click++;    
  }
}

let o2click = 0;
function me1 (){
  if(o2click%2 == 0){
    console.log('I am Clicked')
    console.log(o2click%2);
    let slidy1 = document.getElementsByClassName('maketype212');
    let slidy2 = document.getElementsByClassName('maketype213');
    let slidy3 = document.getElementsByClassName('maketype214');
    let slidy5 = document.getElementsByClassName('maketype215');
    let slidy4 = document.getElementsByClassName('maketype11');
    console.log(slidy1);
    console.log(slidy2);
    console.log(slidy2);
    slidy1[0].style.display = 'none';
    slidy2[0].style.display = 'block';
    slidy3[0].style.display = 'block';
    slidy5[0].style.display = 'block';
    slidy4[1].style.backgroundColor = 'transparent';
    anime({
      targets: '.maketype213',
      left: '330px',
      easing: 'easeInOutQuad'
    }); 
    anime({
      targets: '.maketype214',
      left: '660px',
      easing: 'easeInOutQuad'
    }); 
    anime({
      targets: '.maketype215',
      left: '990px',
      easing: 'easeInOutQuad'
    });
    anime({
      targets: '.Drag2',
      scale: {
        value: 0.2,
        duration: 100,
        easing: 'easeInOutQuad'
      },
      rotate: {
        value: 180,
        duration: 100,
        easing: 'easeInOutQuad'
      },
      translateX: {
        value: -500,
        duration: 100,
        delay: 500,
        easing: 'linear'
      }
    });
    o2click++;
  }else if(o2click%2 == 1){
    console.log('I am Run');
    console.log(o2click%2);
    let slidy1 = document.getElementsByClassName('maketype212');
    let slidy2 = document.getElementsByClassName('maketype213');
    let slidy3 = document.getElementsByClassName('maketype214');
    let slidy5 = document.getElementsByClassName('maketype215');
    let slidy4 = document.getElementsByClassName('maketype11');
    console.log(slidy1);
    console.log(slidy2);
    console.log(slidy2);
    slidy1[0].style.display = 'block';
    slidy2[0].style.display = 'none';
    slidy3[0].style.display = 'none';
    slidy5[0].style.display = 'none';
    slidy4[1].style.backgroundColor = 'pink';
    anime({
      targets: '.maketype213',
      left: '-330px',
      easing: 'easeInOutQuad'
    }); 
    anime({
      targets: '.maketype214',
      left: '-660px',
      easing: 'easeInOutQuad'
    });
    anime({
      targets: '.maketype215',
      left: '-990px',
      easing: 'easeInOutQuad'
    });
    anime({
      targets: '.Drag2',
      scale: {
        value: 1,
        duration: 100,
        delay: 500,
        easing: 'easeInOutQuad'
      },
      rotate: {
        value: 0,
        duration: 100,
        delay: 500,
        easing: 'easeInOutQuad'
      },
      translateX: {
        value: 0,
        duration: 100,
        easing: 'easeInOutQuad'
      }
    });
    o2click++;    
  }
}


let o3click = 0;
function me2 (){
  if(o3click%2 == 0){
    console.log('I am Clicked')
    console.log(o3click%2);
    let slidy1 = document.getElementsByClassName('maketype312');
    let slidy2 = document.getElementsByClassName('maketype313');
    let slidy3 = document.getElementsByClassName('maketype314');
    let slidy5 = document.getElementsByClassName('maketype315');
    let slidy4 = document.getElementsByClassName('maketype11');
    console.log(slidy1);
    console.log(slidy2);
    console.log(slidy2);
    slidy1[0].style.display = 'none';
    slidy2[0].style.display = 'block';
    slidy3[0].style.display = 'block';
    slidy5[0].style.display = 'block';
    slidy4[2].style.backgroundColor = 'transparent';
    anime({
      targets: '.maketype313',
      left: '330px',
      easing: 'easeInOutQuad'
    }); 
    anime({
      targets: '.maketype314',
      left: '660px',
      easing: 'easeInOutQuad'
    }); 
    anime({
      targets: '.maketype315',
      left: '990px',
      easing: 'easeInOutQuad'
    });
    anime({
      targets: '.Drag3',
      scale: {
        value: 0.2,
        duration: 100,
        easing: 'easeInOutQuad'
      },
      rotate: {
        value: 180,
        duration: 100,
        easing: 'easeInOutQuad'
      },
      translateX: {
        value: -500,
        duration: 100,
        delay: 500,
        easing: 'linear'
      }
    });
    o3click++;
  }else if(o3click%2 == 1){
    console.log('I am Run');
    console.log(o3click%2);
    let slidy1 = document.getElementsByClassName('maketype312');
    let slidy2 = document.getElementsByClassName('maketype313');
    let slidy3 = document.getElementsByClassName('maketype314');
    let slidy5 = document.getElementsByClassName('maketype315');
    let slidy4 = document.getElementsByClassName('maketype11');
    console.log(slidy1);
    console.log(slidy2);
    console.log(slidy2);
    slidy1[0].style.display = 'block';
    slidy2[0].style.display = 'none';
    slidy3[0].style.display = 'none';
    slidy5[0].style.display = 'none';
    slidy4[2].style.backgroundColor = 'pink';
    anime({
      targets: '.maketype313',
      left: '-335px',
      easing: 'easeInOutQuad'
    }); 
    anime({
      targets: '.maketype314',
      left: '-660px',
      easing: 'easeInOutQuad'
    });
    anime({
      targets: '.maketype315',
      left: '-990px',
      easing: 'easeInOutQuad'
    });
    anime({
      targets: '.Drag3',
      scale: {
        value: 1,
        duration: 100,
        delay: 500,
        easing: 'easeInOutQuad'
      },
      rotate: {
        value: 0,
        duration: 100,
        delay: 500,
        easing: 'easeInOutQuad'
      },
      translateX: {
        value: 0,
        duration: 100,
        easing: 'easeInOutQuad'
      }
    });
    o3click++;    
  }
}


let o4click = 0;
function me3 (){
  if(o4click%2 == 0){
    console.log('I am Clicked')
    console.log(o4click%2);
    let slidy1 = document.getElementsByClassName('maketype412');
    let slidy2 = document.getElementsByClassName('maketype413');
    let slidy3 = document.getElementsByClassName('maketype414');
    let slidy5 = document.getElementsByClassName('maketype415');
    let slidy4 = document.getElementsByClassName('maketype11');
    console.log(slidy1);
    console.log(slidy2);
    console.log(slidy2);
    slidy1[0].style.display = 'none';
    slidy2[0].style.display = 'block';
    slidy3[0].style.display = 'block';
    slidy5[0].style.display = 'block';
    slidy4[3].style.backgroundColor = 'transparent';
    anime({
      targets: '.maketype413',
      left: '330px',
      easing: 'easeInOutQuad'
    });
    anime({
      targets: '.maketype414',
      left: '660px',
      easing: 'easeInOutQuad'
    }); 
    anime({
      targets: '.maketype415',
      left: '990px',
      easing: 'easeInOutQuad'
    }); 
    anime({
      targets: '.Drag4',
      scale: {
        value: 0.2,
        duration: 100,
        easing: 'easeInOutQuad'
      },
      rotate: {
        value: 180,
        duration: 100,
        easing: 'easeInOutQuad'
      },
      translateX: {
        value: -500,
        duration: 100,
        delay: 500,
        easing: 'linear'
      }
    });
    o4click++;
  }else if(o4click%2 == 1){
    console.log('I am Run');
    console.log(o4click%2);
    let slidy1 = document.getElementsByClassName('maketype412');
    let slidy2 = document.getElementsByClassName('maketype413');
    let slidy3 = document.getElementsByClassName('maketype414');
    let slidy5 = document.getElementsByClassName('maketype415');
    let slidy4 = document.getElementsByClassName('maketype11');
    console.log(slidy1);
    console.log(slidy2);
    console.log(slidy2);
    slidy1[0].style.display = 'block';
    slidy2[0].style.display = 'none';
    slidy3[0].style.display = 'none';
    slidy5[0].style.display = 'none';
    slidy4[3].style.backgroundColor = 'pink';
    anime({
      targets: '.maketype413',
      left: '-330px',
      easing: 'easeInOutQuad'
    }); 
    anime({
      targets: '.maketype414',
      left: '-660px',
      easing: 'easeInOutQuad'
    });
    anime({
      targets: '.maketype415',
      left: '-990px',
      easing: 'easeInOutQuad'
    });     
    anime({
      targets: '.Drag4',
      scale: {
        value: 1,
        duration: 100,
        delay: 500,
        easing: 'easeInOutQuad'
      },
      rotate: {
        value: 0,
        duration: 100,
        delay: 500,
        easing: 'easeInOutQuad'
      },
      translateX: {
        value: 0,
        duration: 100,
        easing: 'easeInOutQuad'
      }
    });
    o4click++;    
  }
}


VanillaTilt.init(document.querySelector(".Slide"),{
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 1
});

VanillaTilt.init(document.querySelector("#pricing211"),{
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.2
});
VanillaTilt.init(document.querySelector("#pricing212"),{
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 1
});
VanillaTilt.init(document.querySelector("#pricing213"),{
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


