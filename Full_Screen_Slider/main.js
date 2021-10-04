const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev')
const play = true; 
const intervalTime = 4000;

const nextSlide = () => {
    //get current class
    const current = document.querySelector('.current');

    if (current.nextElementSibling) {
        //add current to next sibling
        current.nextElementSibling.classList.add('current')
    } else {
        //last page then add current to inital element 
        slides[0].classList.add('current');
    }
    //clear:  current
    setTimeout(() => {
        current.classList.remove('current')
    })
}


const prevSlide = () => {
    //get current class
    const current = document.querySelector('.current');

    if (current.previousElementSibling) {
        //add current to prev sibling
        current.previousElementSibling.classList.add('current')
    } else {
        //add current to last page 
        slides[slides.length-1].classList.add('current');
    }
    //clear: current
    setTimeout(() => {
        current.classList.remove('current')
    })
}

//button event
next.addEventListener('click', function () {
    nextSlide();
    if (play) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

prev.addEventListener('click', function () {
    prevSlide();
    if (play) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

// auto slide
if (play) {
    // Run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
}
