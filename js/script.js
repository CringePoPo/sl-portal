const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const images = document.querySelector('.carousel').children;
const totalImages = images.length;
let index = 0;


prev.addEventListener('click', () => {
  prevImage('prev');
})

next.addEventListener('click', () => {
  nextImage('next');
})

function nextImage(direction) {
  if(direction == 'next') {
    
    index++;
    if(index == totalImages) {
      index = 0;

    }
  } 
  
  
  for(let i = 0; i < images.length; i++) {
    images[i].classList.remove('main');
    images[i].classList.remove('carousel-slide-right');
    
  }
  images[index].classList.add('main');
  images[index].classList.add('carousel-slide-right');

}

function prevImage(direction) {
  if(direction == 'prev') {
    if(index == 0) {
      index = totalImages - 1;
    } else {
      index--;
    }
  }
  
  
  for(let i = 0; i < images.length; i++) {
    images[i].classList.remove('main');
    images[i].classList.remove('carousel-slide-left');
    
  }
  images[index].classList.add('main');
  images[index].classList.add('carousel-slide-left');

}