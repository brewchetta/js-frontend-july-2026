// INDEX JS //

// gsap --> this variable contains ALL THE FUNCTIONALITY we'll be using

// .from needs two arguments
// #1 - what element are we animating?
// #2 - how do we animate the element?

// gsap.from is an individual tween --> one single animation or part of a larger animation

// gsap.from('#logo', { 
//     duration: 1.5, // how many seconds the animation takes
//     opacity: 0, // what the different properties are (opacity, scale, y-axis)
//     scale: 0, 
//     y: 100, 
//     ease: "bounce.out" // the animation curve (it bounces)
// })
// gsap.to('#logo', { duration: 1, opacity: 0 })
// gsap.from('#logo', { duration: 1, y: -500, x: -500 })

// const logoTimeline = gsap.timeline()

// timeline allows us to chain multiple tweens together into one animation
// logoTimeline 
// .from('#logo', { 
//     duration: 1.5,
//     opacity: 0,
//     scale: 0, 
//     y: 100, 
//     ease: "bounce.out" 
// })
// .to('#logo', {
//     duration: 5,
//     opacity: 0
// })
// .from('p', {
//     duration: 1,
//     y: -1000
// }, '+=5') // wait 5 extra seconds before triggering
// .to('#logo', {
//     duration: 1,
//     opacity: 1,
//     rotation: 360
// })
// .to('#logo',{
//     duration: 1,
//     x: 1000,
//     repeat: -1, // repeat -1 stands for repeat infinitely
//     yoyo: true // yoyo --> the animation goes forwards and then backwards
// })

const logoTimeline = gsap.timeline()

logoTimeline
.from('#space-rift', {
    duration: 2,
    opacity: 0,
    rotation: -360,
    scale: 0
})
.to('#logo', {
    duration: 2,
    scale: 0
})
.to('p', {
    duration: 2,
    scale: 0,
    y: -70
}, '-=2')