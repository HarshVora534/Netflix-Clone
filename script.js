// let currentIndex = 0;

// function showSlide(index, sliderClass) {
//     const slider = document.querySelector(`.${sliderClass}`);
//     const cardWidth = document.querySelector(`.${sliderClass} .card`).offsetWidth;
//     slider.style.transform = `translateX(${-cardWidth * index}px)`;
// }

// function nextSlide() {
//     const totalCards = document.querySelectorAll('.slider .card').length;
//     currentIndex = (currentIndex + 1) % totalCards;
//     if((currentIndex+3)==totalCards)
//     {
//         currentIndex=0;
//     }
//     showSlide(currentIndex, 'slider');
// }

// function prevSlide() {
//     const totalCards = document.querySelectorAll('.slider .card').length;
//     currentIndex = (currentIndex - 1 + totalCards) % totalCards;
//     if((currentIndex-4)==totalCards)
//     {
//         currentIndex=totalCards;
//     }
//     showSlide(currentIndex, 'slider');
// }

// Slider 2
let currentIndex1 = 0;

function showSlide1(index) {
    const slider1 = document.querySelector('.slider1');
    const cardWidth1 = document.querySelector('.slider1 .card1').offsetWidth;
    slider1.style.transform = `translateX(${-cardWidth1 * index}px)`;
}

function nextSlide1() {
    const totalCards1 = document.querySelectorAll('.slider1 .card1').length;
    currentIndex1 = (currentIndex1 + 1) % totalCards1;
    if((currentIndex1+3)==totalCards1)
    {
        currentIndex1=0;
    }
    showSlide1(currentIndex1);
}

function prevSlide1() {
    const totalCards1 = document.querySelectorAll('.slider1 .card1').length;
    currentIndex1 = (currentIndex1 - 1 + totalCards1) % totalCards1;
    showSlide1(currentIndex1);
}

// Slider 3
let currentIndex2 = 0;

function showSlide2(index) {
    const slider2 = document.querySelector('.slider2');
    const cardWidth2 = document.querySelector('.slider2 .card2').offsetWidth;
    slider2.style.transform = `translateX(${-cardWidth2 * index}px)`;
}

function nextSlide2() {
    const totalCards2 = document.querySelectorAll('.slider2 .card2').length;
    currentIndex2 = (currentIndex2 + 1) % totalCards2;
    if((currentIndex2+3)==totalCards2)
    {
        currentIndex2=0;
    }
    showSlide2(currentIndex2);
}

function prevSlide2() {
    const totalCards2 = document.querySelectorAll('.slider2 .card2').length;
    currentIndex2 = (currentIndex2 - 1 + totalCards2) % totalCards2;
    showSlide2(currentIndex2);
}

// Slider 4
let currentIndex3 = 0;

function showSlide3(index) {
    const slider3 = document.querySelector('.slider3');
    const cardWidth3 = document.querySelector('.slider3 .card3').offsetWidth;
    slider3.style.transform = `translateX(${-cardWidth3 * index}px)`;
}

function nextSlide3() {
    const totalCards3 = document.querySelectorAll('.slider3 .card3').length;
    currentIndex3 = (currentIndex3 + 1) % totalCards3;
    if((currentIndex3+3)==totalCards3)
    {
        currentIndex3=0;
    }
    showSlide3(currentIndex3);
}

function prevSlide3() {
    const totalCards3 = document.querySelectorAll('.slider3 .card3').length;
    currentIndex3 = (currentIndex3 - 1 + totalCards3) % totalCards3;
    showSlide3(currentIndex3);
}

// Initially show the first slide for all sliders
showSlide(currentIndex, 'slider');
showSlide1(currentIndex1);
showSlide2(currentIndex2);
showSlide3(currentIndex3);
