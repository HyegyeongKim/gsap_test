gsap.from(".box1", {
    duration: 3,
    x: 200,
    width: 400,
    opacity: 0.2,
    ease: 'steps(10)'
})

gsap.fromTo(".box2", 
    {fontSize: 40},
    {duration: 3, x: 300, fontSize: 16}
)

gsap.set(".box3", {
    x: 100,
    width: 200,
    backgroundColor: 'skyblue'
})


//gsap으로 애니메이션 핸들링
let tween = gsap.to(".moveBox", {
    duration: 8,
    x: 400,
    width: 400,
    paused: true,
})

document.querySelector("#play").onclick = function(){
    return tween.play();
}
document.querySelector("#pause").onclick = function(){
    return tween.pause();
}
document.querySelector("#resume").onclick = function(){
    return tween.resume();
}
document.querySelector("#reverse").onClick = function(){
    return tween.reverse();
}
document.querySelector("#restart").onclick = function(){
    return tween.restart();
}


//timeline
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