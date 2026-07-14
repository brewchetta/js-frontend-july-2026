// GSAP CODE //

const optionsObject = { 
    repeat: -1, 
    yoyo: true,
    repeatDelay: 0.5
}

const logoTimeline = gsap.timeline(optionsObject)
// repeat: -1 stands for repeat infinitely

// #noble-desktop > g > *
// select the noble-desktop id, then the g's inside, then each element inside the g's

logoTimeline
.from('#noble-desktop > g > *', { 
    duration: .4, 
    scale: 0, 
    x: -5,
    transformOrigin: 'left center',
    stagger: 0.06 // each element waits 0.06 seconds before animating compared to the previous element
})
.from('#n-background', {
    duration: .3,
    scale: 0,
    transformOrigin: 'right center'
})
.from('#n *', {
    duration: 0.2,
    scale: 0,
    transformOrigin: 'center center',
    stagger: 0.06
})