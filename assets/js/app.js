$('#scroll').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    responsive:{
        0:{
          items:1,
          loop:true,
          nav:true
        },
        550:{
            items:2,
            loop:true,
            nav:true
        },
        992:{
            items:3,
            loop:true,
            nav:true
        },
        1200:{
            items:4
        }
    }
})

/*===========SCROLL REVEAL ANIMATION===============*/
const sr = ScrollReveal({
    origin:'top',
    destance:'60px',
    duration:2500,
    delay:400,
    // reset:true
  });
sr.reveal(`#head h1`)
