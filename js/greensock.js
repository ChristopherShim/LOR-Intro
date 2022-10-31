gsap.registerPlugin(ScrollTrigger);

function intro() {
    var turnOn = gsap.timeline();
    turnOn.to(".gsap1", {
       opacity:1,
       duration:0.00001,
       ease: "none"
     })
     turnOn.to(".gsap2", {
        opacity:1,
        duration:0.00001,
        ease: "none",
        delay:.4
      })
      turnOn.to(".gsap4", {
        opacity:1,
        duration:0.00001,
        ease: "none",
        delay:.6
      })
      turnOn.to(".gsap5", {
        opacity:1,
        duration:0.00001,
        ease: "none",
        delay:.5
      })
      turnOn.to(".gsap6", {
        opacity:1,
        duration:0.00001,
        ease: "none",
        delay:.4
      })
      turnOn.to(".gsap7", {
        opacity:1,
        duration:0.00001,
        ease: "none",
        delay:.6
      })
      turnOn.to(".gsap1", {
        opacity:1,
        duration:0.00001,
        ease: "none",
        delay:.6
      })
      turnOn.to(".gsap8", {
        opacity:1,
        duration:0.00001,
        ease: "none",
        delay:.6
      })
      turnOn.to(".gsap9", {
        opacity:1,
        duration:0.00001,
        ease: "none",
      })
      turnOn.to(".gsap10", {
        opacity:1,
        duration:0.00001,
        ease: "none",
        delay:.6
      })
      turnOn.to(".gsap11", {
        opacity:1,
        duration:0.00001,
        ease: "none",
        delay:.4
      })
      turnOn.to(".gsap12", {
        opacity:1,
        duration:0.00001,
        ease: "none",
        delay:.6
      })
      turnOn.to(".gsap13", {
        opacity:1,
        duration:0.00001,
        ease: "none",
        delay:.6
      })
      turnOn.to(".gsap14", {
        opacity:1,
        duration:0.00001,
        ease: "none",
        delay:1
      })
      turnOn.to(".gsap15", {
        opacity:1,
        duration:0.00001,
        ease: "none",
        delay:.6
      })
  

      var turnOn2 = gsap.timeline();
      turnOn2.to(".gsap3", {
        opacity:1,
        duration:0.00001,
        ease: "none",
        delay:.4
      })

      var turnOff = gsap.timeline();
      turnOff.to(".gsap1", {
        opacity:0,
        duration:0.00001,
        ease: "none",
        delay:.5
      })
      turnOff.to(".gsap2", {
        opacity:0,
        duration:0.00001,
        ease: "none",
        delay:1
      })
      turnOff.to(".gsap5", {
        opacity:0,
        duration:0.00001,
        ease: "none",
        delay:.4
      })
      turnOff.to(".gsap6", {
        opacity:0,
        duration:0.00001,
        ease: "none",
        delay:.6
      })
      turnOff.to(".gsap7", {
        opacity:0,
        duration:0.00001,
        ease: "none",
        delay:.6
      })
      turnOff.to(".gsap3", {
        opacity:0,
        duration:0.00001,
        ease: "none",
      })
      turnOff.to(".gsap4", {
        opacity:0,
        duration:0.00001,
        ease: "none",
      })
      turnOff.to(".gsap1", {
        opacity:0,
        duration:0.00001,
        ease: "none",
        delay:.6
      })
      turnOff.to(".gsap8", {
        opacity:0,
        duration:0.00001,
        ease: "none",
        delay:1
      })
      turnOff.to(".gsap11", {
        opacity:0,
        duration:0.00001,
        ease: "none",
        delay:.6
      })
      turnOff.to(".gsap12", {
        opacity:0,
        duration:0.00001,
        ease: "none",
        delay:.6
      })
      turnOff.to(".gsap13", {
        opacity:0,
        duration:0.00001,
        ease: "none",
        delay:.6
      })
      turnOff.to(".gsap9", {
        opacity:0,
        duration:0.00001,
        ease: "none",
      })
      turnOff.to(".gsap10", {
        opacity:0,
        duration:0.00001,
        ease: "none",
      })

}


intro();