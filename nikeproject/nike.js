var x = gsap.timeline();

gsap.set(".a", { opacity: 0, y: 10 })
gsap.set("#jooteji", { opacity: 0, y: 10, scale: .8 })

x.from("#left", {
    width: 0,
    ease: Expo.easeInOut,
    duration: 2,
})
x.from("#right", {
    width: 0,
    ease: Expo.easeInOut,
    duration: 2,
    delay: -1
})

x.to(".a", {
    // width:0,
    opacity: 1,
    ease: Expo.easeInOut,
    stagger: 0.2,
    duration: 2,
    delay: -1
})
x.to("#jooteji", {
    // width:0,
    opacity: 1,
    ease: Expo.easeInOut,
    scale: 1,
    duration: 1,
        delay: -10
})
var btn = document.getElementById(btn);