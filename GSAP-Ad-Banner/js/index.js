// BANNER AD ANIMATION //

// declare the timeline
const adTimeline = gsap.timeline({ 
    repeat: -1, 
    repeatDelay: 5, 
})

// create the tweens here
adTimeline
// make the ad visible when all the JS has loaded
// .set('#banner', { visibility: 'visible' }) 
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

// SPACE SUGAR AD //

const spaceTimeline = gsap.timeline({ 
    repeat: -1, 
    repeatDelay: 5 
})

spaceTimeline
.set('#space-panel1', {top: 0})
.from('#space-panel1', {
    duration: 1,
    opacity: 0
})
.set('#space-panel2', {top: 0}, '+=1')
.from('#space-panel2', {
    duration: 1,
    opacity: 0,
    scale: 0,
    ease: 'back.out'
})
.set('#space-panel3', {top: 0}, '+=3')
.from('#space-panel3', {
    duration: 0.5,
    opacity: 0
})
.from('#space-panel3 > p', { duration: 1, opacity: 0 })
.from('#space-panel3 > h2', { duration: 1, top: '341px' }, '+=1')