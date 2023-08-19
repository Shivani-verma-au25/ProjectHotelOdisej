// loco
function loco(){
    gsap.registerPlugin(ScrollTrigger);
  
  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  
  }
  loco()
  
  // gsap
  let tl = gsap.timeline({
      scrollTrigger:{
        trigger:'#page1',
        scroller:'#main',
        start:'top 40%',
        end:'top top',
        // markers:true,
        // pin:true
      }
    })
  tl.to('nav>#n-2',{
    y:100,
    opacity:1,
    duration:1.2
  })
  tl.from('#page1>img',{
    width:'50vw',
    height:'50vh',
    duration:1,
    delay:1,
    borderRadius:'1.2vw'
  })
  tl.to('nav>#n-1,nav>#n-3',{
    y:4,
    opacity:1,
    duration:1.2,
    stagger:.1
  })
  
  
// page2
  
  
  let tl1 = gsap.timeline({
    scrollTrigger:{
      trigger:'#page2',
      scroller:'#main',
      start:'top 95%',
      end:'0% top',
      // markers:true,
      // pin:true
      scrub:.15
    },
    stagger:.5
  })
  tl1.to('nav>#n-2',{
    // y:-100,
    duration:.5,
    scale:.5,
    // duration:1,
    // y:-100
  },'anm')
  tl1.to('nav',{
    y:-300,
  },'anm')
  
  // page2 letters
  
  function textChange(){
    let clutter = ''
    document.querySelector('#text-container>h1').textContent.split('').forEach(function(item){
      clutter += `<span>${item}</span>`
    })
    document.querySelector('#text-container>h1').innerHTML = clutter
  }
  textChange()
  
  gsap.to('#text-container>h1>span',{
    scrollTrigger:{
      trigger:'#text-container>h1>span',
      scroller:'#main',
      start:'top 70%',
      end:'100% 0%',
      scrub:1,
      // markers:true
    },
    stagger:.1,
    color:'#e3e3c4'
  })
  
  // ***************Page3*****************
  function textSplit(){
    let clutter = ''
    document.querySelector('#text-p-3>h1').textContent.split('').forEach(function(i){
      clutter +=  `<span>${i}</span>`
    })
    document.querySelector('#text-p-3>h1').innerHTML = clutter
  }
  textSplit()
  
  gsap.to('#text-p-3>h1>span',{
    scrollTrigger:{
      trigger:'#text-p-3>h1>span',
      scroller:'#main',
      start:'top 90%',
      end:'100% 50%',
      // markers:true,
      scrub:.15
    },
    stagger:.1,
    color:'#434b34'
  })
  

  // images
  let tl2 = gsap.timeline({
    scrollTrigger:{
      trigger:'#image-container',
      scroller:'#main',
      start:'0% 80%',
      end:'90% 0%',
      // markers:true,
      scrub:.15
    },
    stagger:.15,
    opacity:0
  })
  tl2.from('#left',{
    y:100,
    duration:.1
  })
  tl2.from('#right ',{
    y:100,
    // duration:1
    opacitya:0,
    stagger:2
  })
  
  // page 2 svg

  let tl3 = gsap.timeline({
    scrollTrigger:{
      trigger:'#page2',
      scroller:'#main',
      start:'top 50%',
      end:'100% -60%',
      // markers:true,
      scrub:.15
    }
  })
  tl3.to('#b-svg-1',{
    Transform: `translateX(-50%)`,
    duration:1
  })

  // ********** Page 4*************

  let tl4 = gsap.timeline({
    scrollTrigger:{
      trigger:'.wrap-container>.wrp',
      scroller:'#main',
      start:'top 50%',
      end:'100% 100%',
      // markers:true,
      scrub:2
    },
    stagger:.15,

  })
  tl4.to('.content>.text,.content>.text>button',{
    y:-20,
    duration:1,
    opacity:1
  })
  

//*************** nav ******************* */ 

// let navBar = document.querySelector('nav')
// console.log(navBar);

// gsap.to('nav ',{
//   scrollTrigger:{
//     trigger:'#page2',
//     scroller:'#main',
//     start:'top 0%',
//     end:'top 30%',
//     markers:true,
//     scrub:.15
//   },
//   y:0,
//   backgroundColor:'red',
//   duration:1
// })


// let ltl2 = gsap.timeline({
//   scrollTrigger:{
//         trigger:'#page2',
//         scroller:'#main',
//         start:'top 0%',
//         end:'10% 0%',
//         // markers:true,
//         scrub:.15
//       },
//       duration:1,
//       opacity:0
// })
// ltl2.to('nav',{
//   // y:-50,
//   backgroundColor:'white',
// },'an')
ltl2.to('nav',{
  y:-50,
  backgroundColor:'white',
  opacity:1
},'an')


  
// 

gsap.to('nav',{
  scrollTrigger:{
    trigger:'#page2',
    scroller:'#main',
    start:'10% 10%',
    end:'30% 20%',
    markers:true,
    scrub:1
  },
  y:-50,
  duration:1,
  // opacity:0
})