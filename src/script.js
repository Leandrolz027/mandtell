let index = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-slide img');
    index += step;

    if (index >= slides.length) {
        index = 0;
    } else if (index < 0) {
        index = slides.length - 1;
    }

    const offset = -index * 100; 
document.querySelector('.carousel-container').style.transform =`translateX(${offset}%)`;
}


setInterval(() => {
    moveSlide(1);
}, 5000); 

// menu mobile //

document.querySelector(".hamburger").addEventListener("click", function() {
    document.querySelector("#menu").classList.toggle("active");
});