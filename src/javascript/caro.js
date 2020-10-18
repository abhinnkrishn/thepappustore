var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
document.getElementsByClassName(currentSlide[0]).className = "showing"
var slideInterval = setInterval(nextSlide,2000);

function nextSlide() {
    document.getElementsByClassName(slides[currentSlide]).className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    document.getElementsByClassName(slides[currentSlide]).className = 'showing';
}