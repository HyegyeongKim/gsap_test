//sec3: timeline
let tl = gsap.timeline();

tl.to(".box1", {
    duration: 3,
    x: 200,
    ease: 'steps(10)'
});
tl.to(".box1", {
    duration: 3,
    y: 200,
    opacity: 1
})
tl.to(".box1", {
    duration: 3,
    x: 0,
    width: 200,
    backgroundColor: 'red'
})
tl.to(".box1", {
    duration: 3,
    y: 0,
    height: 200
})