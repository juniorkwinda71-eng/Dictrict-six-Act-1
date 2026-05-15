const titleText = "Happy Birthday Mom ❤️";

const subtitleText = "By your son Junior ❤️";

const messageText = `Happy Birthday Mom 🎉❤️🌹

Today is not just the celebration of your birth, but the celebration of the strongest woman I know 💪❤️ You carried pain with strength, faced struggles with courage, and still managed to give love with the purest heart 🤍 Everything good in me comes from you. Your sacrifices, your prayers 🙏, your sleepless nights, and your endless support built the person I am becoming today 🌟

No words can truly explain how much you mean to me 🥺❤️ You are my protector 🛡️, my teacher 📚, my safe place 🏡, and my biggest blessing ✨ Even when life becomes hard, your love gives me strength to keep going 💯 I thank God every day for giving me a mother like you 🙏❤️

I promise to make you proud one day 🌍🏆 and give you the life you deserve after everything you have done for me 💐 You deserve happiness 😊, peace 🕊️, love ❤️, and every beautiful thing this world can offer 🌸✨

May this birthday bring you joy 🎂, long life 🌹, good health 💖, and endless blessings 🙏✨ I love you more than words can ever explain ❤️

From your son, Junior ❤️`;



/* IMAGES */

const images = [

    "images/mom1.png",
    "images/mom2.png",
    "images/mom3.png",
    "images/mom4.png",
    "images/mom5.png",
    "images/mom6.png"

];



/* VARIABLES */

let current = 0;

let paused = false;

const music = document.getElementById("bg-music");



/* TYPING EFFECT */

function typeText(elementId, text, speed){

    let i = 0;

    function typing(){

        if(i < text.length){

            document.getElementById(elementId).innerHTML +=
            text.charAt(i);

            i++;

            setTimeout(typing, speed);
        }
    }

    typing();
}



/* START WEBSITE */

window.onload = () => {

    /* MUSIC */

    music.volume = 0.4;

    document.body.addEventListener("click", () => {

        music.play();

    }, { once:true });



    /* TITLE */

    typeText("title", titleText, 90);



    /* SUBTITLE */

    setTimeout(() => {

        typeText("subtitle", subtitleText, 60);

    }, 2000);



    /* REMOVE COVER PAGE */

    setTimeout(() => {

        document.getElementById("cover-page")
        .style.opacity = "0";



        setTimeout(() => {

            document.getElementById("cover-page")
            .style.display = "none";



            /* START MESSAGE */

            typeText("message", messageText, 18);

        }, 1500);

    }, 5000);



    /* START SLIDESHOW */

    startSlideshow();
};



/* PHOTO SLIDESHOW */

function startSlideshow(){

    const slider =
    document.getElementById("background-slider");



    slider.style.backgroundImage =
    `url('${images[current]}')`;



    setInterval(() => {

        if(!paused){

            current++;



            if(current >= images.length){

                current = 0;
            }



            slider.style.backgroundImage =
            `url('${images[current]}')`;
        }

    }, 6000);
}



/* HOLD SCREEN TO PAUSE */

document.addEventListener("touchstart", () => {

    paused = true;

});



document.addEventListener("touchend", () => {

    paused = false;

});