gsap.from(".logo", { 
    duration: 2, 
    x: 300, 
    scale: 1.5, 
    ease: "power2.out" 
  });
gsap.from(".box,.img", { 
    duration: 2.5, 
    y:-200,
    scale: 0.5,
    opacity:0,
    ease: "power2.out"
    
  });
  gsap.from("p,h2", { 
    duration: 2, 
    scale: 0, 
    ease: "power2.out" 
    
  });
  gsap.from(".btn1,.btn2", { 
    duration: 2, 
    y:100,
    scale: 0, 
    ease: "power2.out" 
    
  });
  gsap.from(".col,.next", { 
    duration: 2, 
    scale: 0, 
    ease: "power2.out" 
    
  });
  gsap.from("input", { 
    duration: 2, 
    y:-100,
    ease: "power2.out" 
    
  });
  gsap.from(".center", { 
    duration: 2, 
    scale:4
  });