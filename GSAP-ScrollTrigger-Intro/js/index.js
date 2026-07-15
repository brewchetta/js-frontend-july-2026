// OUR SCROLL TRIGGER CODE //

gsap.from('h2', {
    // scrollTrigger determines when the animation plays depending on whether we've scrolled to it
    scrollTrigger: { 
        // the trigger is the element that needs to be on the screen for the animation to start playing
        trigger: 'h2',
        // toggle actions - onEnter onLeave onEnterBack onLeaveBack
        toggleActions: 'restart pause restart pause',
        // onEnter is when we start at the top and then trigger the animation by scrolling to it
        // onLeave is when we scroll past the element and it goes off screen above us
        // onEnterBack is what happens when we scroll back up to the element
        // onLeaveBack is what happens when scroll back up PAST the element

        // markers is a debugging to see where the start and end scroll positions are for an animation
        // markers: true,

        // start position relative to the screen and the element
        start: 'top 80%',
        // end position relative to the screen and the element
        end: 'bottom 20%',
        // the first value is where on the element the start/end is
        // the second value is where on the screen the scroller-start/end is
    },
    duration: 5,
    opacity: 0,
    scale: 4.5,
    // repeat: -1
})



// SECTION ANIMATIONS //
// const firstSection = document.querySelector('section')

// gsap.from(firstSection, {
//     scrollTrigger: {
//         trigger: firstSection,
//         markers: true,
//         start: 'top 80%',
//         end: 'bottom 20%'
//     },
//     duration: 1,
//     opacity: 0,
//     x: -100,
// })

// get all sections
const sections = document.querySelectorAll('section')

// loop through all sections
for (let index = 0; index < sections.length; index++) {

    let x

    if (index % 2 === 1) {
        x = 100
    } else {
        x = -100
    }

    const currentSection = sections[index]

    // apply individual animation to the current section
    gsap.from(currentSection, {
        duration: 1,
        opacity: 0,
        x: x,
        scrollTrigger: {
            trigger: currentSection,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: true
        }
    })

}