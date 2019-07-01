"use strict";

//HOME PAGE FADE-IN
var tl = new TimelineMax();

const hello = document.querySelector('.hello'),
    helloSingleWords = document.querySelectorAll('.hello span'),
mynameis = document.querySelectorAll('.mynameis-inner p'),
    tim = document.querySelector('.tim'),
    wilkins = document.querySelector('.wilkins'),
    links = document.querySelectorAll('.nav-item')

tl
    .from(hello, 1.75, {
        rotation: -90,
        transformOrigin: "-120% top",
        ease: Elastic.easeOut
    },
    .5
    )
    .staggerFrom(mynameis, 1, {
        autoAlpha: 0
    }, .5,"-=1")
    .from(tim, 1, {
        autoAlpha: 0
    })
    .add("links")
    .from(wilkins, 1, {
        autoAlpha: 0
    })
    .staggerFrom(helloSingleWords, 1, {
        // color: "red"
    }, .3, "links")
    .staggerFrom(links, 2, {
        autoAlpha: 0
    }, .25, "links-=.7");