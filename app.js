//jshint esversion :6


const tl =gsap.timeline({defaults: {ease: 'power1.out'}});

tl.to('.text',{y:'0%', duration: 2, stagger: 0.25});
tl.to('.slider',{y:'-100%', duration:1, delay:0.5 });
tl.to('.intro',{y:"-100%", duration:1}, "-=1");
tl.fromTo('nav',{opacity: 0}, {opacity:1, duration: 1 });
tl.fromTo('.port',{opacity: 0}, {opacity:1, duration: 1}, "-=1");
tl.fromTo('.folio',{opacity:0},{opacity:1, duration:1},"-=1");

tl.fromTo('.about',{y:'50', opacity:0, duration:1.5},{y:0, opacity:1})


