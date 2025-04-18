// jaja lagaite hbe

// 1. smooth scrolling
// {locomotive js (loco.css)
// attach loco scroll css
// attach locomotive scroll min js
// some code from loco github for js
// }

// 2. gsap
{
    // attach gsap

}
// 3.scrolltrigger

// ********************Smooth scrolling*************
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

// ***********cercle flow the mouse***************

function circleMouseFollower(){
    window.addEventListener("mousemove", function(dets){

        document.querySelector(".cercle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px`

    })
}



// *************1st page animation*************
function firstpageAnimation(){
    var tl = gsap.timeline();
    tl.from(".nav",{
        y: '-10',
        opacity: 0,
        ease: Expo.easeInOut,
        duration: 1.5,
    })
    tl.to(".boundingelem",{
        y: '0',
        ease: Expo.easeInOut,
        duration: 2,
        stagger: .2,
        dilay : -1,  
    })
    tl.from(".herofotter",{
        y : -10,
        opacity: 0,
        duration : 1.5,
        ease : Expo.easeInOut,
        dilay : -1,        
        
    })
}

// **********mouse move korar somoy cepta hbe*************

function circleMouseFollower(){
    // define default scale value
    var xscale =  1;
    var yscale = 1;
    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function(dets){
        dets.clientX- xprev;
        xprev = dets.clientX ;
        
    })
}

// ********all function call here*********
firstpageAnimation()
circleMouseFollower()