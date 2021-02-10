document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);
});

//mobile or laptop checker;
let isMobile = false; 
if(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  isMobile = true;
}

//for mobile navigation
const hamburgerElement =  document.querySelector('#hamburger');
const mobileNavigation = document.querySelector('#navigation-mobile');
const toggleNav = () => {
    mobileNavigation.classList.toggle('u-toggle-display');
}
hamburgerElement.addEventListener('click', toggleNav);


//for modal
const modal = document.querySelector('.custom-modal');
const backdrop = document.querySelector('.custom-backdrop');

const openModal = (e) => {
  modal.querySelector('img').src = e.target.getAttribute('src');
  modal.classList.add('custom-open');
  backdrop.classList.add('custom-open');
}

const closeModal = () => {
  modal.classList.remove('custom-open');
  backdrop.classList.remove('custom-open');
}

backdrop.addEventListener('click', closeModal);
modal.querySelector('#close').addEventListener('click', closeModal);

document.body.addEventListener('click', (e) => {
  if (e.target.hasAttribute('data-modal')) {
    openModal(e);
  }
})


// for slider
const slides = document.getElementsByClassName("slide");
const dots = document.getElementsByClassName("dot");
const previous = document.querySelector('#previous');
const next = document.querySelector('#next');
const dotContainer = document.querySelector('#dot-container');
const slideContainer = document.getElementById('slide-container');

const dataForSlider = [
  {
    id: 1, dot: '1923', content: {
      heading: 'Block Gauge Research -1923',
      para: 'Research of block gauge was initiated at Honjo Ohira-cho in Tokyos'
    }
  },
  {
    id: 2, dot: '1933', content: {
      heading: 'Block Gauge Research -1933',
      para: 'Research of block gauge was initiated at Honjo Ohira-cho in Tokyos'
    }
  },
  {
    id: 3, dot: '1943', content: {
      heading: 'Block Gauge Research -1943',
      para: 'Research of block gauge was initiated at Honjo Ohira-cho in Tokyos'
    }
  },
  {
    id: 4, dot: '1953', content: {
      heading: 'Block Gauge Research -1953',
      para: 'Research of block gauge was initiated at Honjo Ohira-cho in Tokyos'
    }
  },
  {
    id: 5, dot: '1963', content: {
      heading: 'Block Gauge Research -1963',
      para: 'Research of block gauge was initiated at Honjo Ohira-cho in Tokyos'
    }
  },
  {
    id: 6, dot: '1973', content: {
      heading: 'Block Gauge Research -1973',
      para: 'Research of block gauge was initiated at Honjo Ohira-cho in Tokyos'
    }
  },
  {
    id: 7, dot: '2003', content: {
      heading: 'Block Gauge Research -2003',
      para: 'Research of block gauge was initiated at Honjo Ohira-cho in Tokyos'
    }
  },
  {
    id: 8, dot: '2013', content: {
      heading: 'Block Gauge Research -2013',
      para: 'Research of block gauge was initiated at Honjo Ohira-cho in Tokyos'
    }
  },
]

dataForSlider.forEach((d, i) => {
  const div = document.createElement('div');
  div.classList.add('slide');
  div.setAttribute('id', i + 1);
  div.innerHTML = `
                  <h3>${d.content.heading}</h3>
                  <p>${d.content.para}</p>
  `;
  slideContainer.append(div);
})

let dotGroupArray = [];
const dotsArray = [];

if(isMobile){
  for(let i=0; i < dataForSlider.length / 2; i++ ){
    const div = document.createElement('div');
    div.classList.add('dot-group');
    dotGroupArray.push(div);
  }
}
else {
  for(let i=0; i < dataForSlider.length / 4; i++ ){
    const div = document.createElement('div');
    div.classList.add('dot-group');
    dotGroupArray.push(div);
  }
}

for(const x of dataForSlider){
  const div = document.createElement('div');
  div.classList.add('dot-flex');
  div.innerHTML = `
      <span class="dot-text">${x.dot}</span>
      <span class="dot" id=${x.id}></span>
  `;
  dotsArray.push(div);
}

console.log(dotGroupArray, dotsArray);

// const itemsToBePushed = dotsArray.length / dotGroupArray.length;
// for(const x of dotGroupArray){
//     for(i=0; i< itemsToBePushed; i++){
//       x.append(dotsArray[i]);
//       //dotsArray.splice(i, 1);
//     };
//     dotContainer.append(x);
// }




let slideIndex = 1;

[...dots].forEach(x => x.addEventListener('click', (e) => currentSlide(+e.target.id)));
previous.addEventListener('click', () => moveSlides(-1));
next.addEventListener('click', () => moveSlides(1));

const moveSlides = (n) => {
  if (n === 1) {
    for (const x of document.getElementsByClassName('dot-group')) {
      x.style.transform = 'translateX(-100%)';
    }
  }
  else {
    for (const x of document.getElementsByClassName('dot-group')) {
      x.style.transform = 'translateX(0%)';
    }
  }
}

// const plusSlides = (n) =>  {
//   showSlides(slideIndex += n);
// }

const currentSlide = (id) => {
  showSlides(id);
}

const showSlides = (id) => {
  for (const x of slides) {
    if (x.id == id) {
      x.style.display = "block";
    }
    else {
      x.style.display = "none";
    }
  }
  for (const x of dots) {
    if (x.id == id) {
      x.classList.add('active');
    }
    else {
      x.classList.remove('active');
    }
  }
}

showSlides(slideIndex);



  //let i;
  //if (n > slides.length) {slideIndex = 1}    
  //if (n < 1) {slideIndex = slides.length}

  //dots[i].className = dots[i].className.replace(" active", "");
  //slides[slideIndex-1].style.display = "block";  
  //dots[slideIndex-1].className += " active";

