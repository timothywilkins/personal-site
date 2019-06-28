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
        transformOrigin: "-120% top 30",
        ease: Power4.easeOut
    })
    .staggerFrom(mynameis, 1, {
        opacity: 0
    }, .3)
    .from(tim, 1, {
        opacity: 0
    })
    .from(wilkins, 1, {
        opacity: 0
    }, "+=.3")
    .staggerFrom(helloSingleWords,1,{color:"red"},.3)
    .staggerFrom(links, 1, {
        opacity: 0
    }, .3);

    console.log(helloSingleWords)