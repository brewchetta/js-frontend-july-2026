// BANNER AD ANIMATION //

// declare the timeline
const adTimeline = gsap.timeline({ 
    repeat: -1, 
    repeatDelay: 5, 
})

// create the tweens here
adTimeline
.from('#panel1-text', { // hungry pops in
    duration: 0.5,
    scale: 0.5,
    opacity: 0,
    ease: 'back.out'
})
.set('#panel2', {top: 0}, '+=2') // move the panel into view
.from('#panel2', {
    opacity: 0,
    duration: 0.2,
    scale: 1.5
})
.from('#panel2-text', { 
    duration: 0.5, 
    yPercent: 100 
}, '+=0.5')
.set('#panel3', {top: 125}, '+=2')
.to('#panel3', {duration: 0.5, top: 0})
.to('#panel2', { duration: 0.5, top: -60 }, '<')
.from('#order-now', {
    duration: 0.5,
    scale: 1.5,
    opacity: 0,
    ease: 'back.out'
})