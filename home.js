//HOME PAGE FADE-IN
var tl = new TimelineMax();

const hello = document.querySelector('.hello'),
helloSingleWords = document.querySelectorAll('.hello span')
    mynameis = document.querySelectorAll('.mynameis-inner p'),
    tim = document.querySelector('.tim'),
    wilkins = document.querySelector('.wilkins'),
    links = document.querySelectorAll('.nav-item')

tl
    .from(hello, .4, {
        rotation: -90,
        transformOrigin: "-120% top",
        ease: Power4.easeOut
    })
    .staggerFrom(mynameis, 1, {
        autoAlpha: 0
    }, .3)
    .from(tim, 1, {
        autoAlpha: 0
    })
    .add("links")
    .from(wilkins, 3, {
        autoAlpha: 0
    })
    .staggerFrom(helloSingleWords,1,{color:"red"},.3,"links")
    .staggerFrom(links, 1, {
        autoAlpha: 0
    }, .1,"links-=.5");
