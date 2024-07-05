document.addEventListener("DOMContentLoaded", function() {

    //? Select All the necessary things
//? Intro section
const intro = document.querySelector(".intro");
const video = intro.querySelector('video');

const h1 = intro.querySelector("h1");
//? End section
const section = document.querySelector('section');
const sectionH1 = section.querySelector("h1");

//? Scroll Magic
const controller = new ScrollMagic.Controller();

//? Add a scene. 
//* One scene takes a section or element of animation. 
let scene = new ScrollMagic.Scene({
    duration: 9000, //* For how long the animation will stay
    triggerElement: intro,
    triggerHook: 0 //* In Which position to start. There are 3 values {0 = at the top, 0.5 = at the middle, 1 = at the end}
})
.addIndicators()
.setPin(intro)
.addTo(controller)

//Text Animation 
const textAnim = TweenMax.fromTo(h1, 3, {opacity: 1}, {opacity: 0});

//? Scene 2
let scene2 = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: intro,
    triggerHook: 0 
})
//? Add the text animation to the scene2
.setTween(textAnim)
.addTo(controller);  //! All scene need to be added to the controller in order to work.

//? Video Animation
let accelAmount = 0.1; // For easing
let delay = 0; // Delay is for easing
let scrollPosition = 0; // How many duration we have scrolled

scene.on("update", e => {
    scrollPosition = e.scrollPos / 1000; // Converting milliseconds to seconds
})

setInterval(() => {
    delay += (scrollPosition - delay) * accelAmount; // Making a easing for better animation

    //? Now play the video
video.currentTime = delay;
}, 25); //* Interval = frameRate / seconds



})// Main functi0n ends here



