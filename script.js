const circularProgress = document.querySelectorAll(".circular-progress");
var heading = document.querySelector(".heading")

Array.from(circularProgress).forEach((progressBar) => {
  const progressValue = progressBar.querySelector(".percentage");
  const innerCircle = progressBar.querySelector(".inner-circle");
  let startValue = 0,
    endValue = Number(progressBar.getAttribute("data-percentage")),
    speed = 50,
    progressColor = progressBar.getAttribute("data-progress-color");

  const progress = setInterval(() => {
    startValue++;
    progressValue.textContent = `${startValue}%`;
    progressValue.style.color = `${progressColor}`;

    innerCircle.style.backgroundColor = `${progressBar.getAttribute(
      "data-inner-circle-color"
    )}`;

    progressBar.style.background = `conic-gradient(${progressColor} ${
      startValue * 3.6
    }deg,${progressBar.getAttribute("data-bg-color")} 0deg)`;
    if (startValue === endValue) {
      clearInterval(progress);
    }
  }, speed);
});



function float(){
  var heading = document.querySelector(".heading")
  var headingText = heading.textContent
  var splitHeading = headingText.split("")
  var halfValue = splitHeading.length/2
  
  var clut = ""

  splitHeading.forEach(function(elem,idx){
    if(idx<halfValue){
      clut += `<span class="a">${elem}</span>`
      console.log(elem);
      
    }else{
      clut += `<span class="b">${elem}</span>`
      console.log(elem)
    }
  })
  

  heading.innerHTML= clut
}

function floatAnimation(){
  var tl = gsap.timeline()
  
  
  gsap.from(".heading .a",{
    y:80,
    delay:0.5,
    duration:0.5,
    stagger:0.2,
    opacity:0
  })
  
  tl.from(".heading .b",{
    y:80,
    delay:0.5,
    duration:0.5,
    stagger:-0.2,
    opacity:0
  })

  tl.to(".page1 .float",{
    y:-1200,
    duration:1
  })

  tl.from(".nav-heading",{
    y:-35,
    opacity:0,
    duration:0.3
  })
  tl.from(".nav-h3",{
    y:-35,
    opacity:0,
    duration:0.3,
    stagger:0.1
  })
  // tl.from(".common",{
  //   y:35,
  //   opacity:0,
  //   duration:0.4,
  //   stagger:0.2
  // })
}
float()
floatAnimation()


gsap.to(".aero",{
  y:-500,
  scrollTrigger:{
    trigger:".aero",
    // markers:true,
    top:"top 0%",
    end:"top 0%",
    scrub:true,
    toggleActions: "play reverse play reverse"
  }
})

gsap.from(".aaa",{
  y:-35,
  opacity:0,
  duration:0.5,
  stagger:0.2,
  scrollTrigger:{
    trigger:".abt",
    start:"top 55%",
    end:"top 0%",
  }
})

gsap.from(".eee",{
  y:-35,
  opacity:0,
  duration:0.5,
  stagger:0.2,
  scrollTrigger:{
    trigger:".eee",
    start:"top 55%",
    end:"top 0%",
  }
})

gsap.from(".single-chart",{
  y:-35,
  opacity:0,
  duration:0.5,
  stagger:0.2,
  scrollTrigger:{
    trigger:".single-chart",
    start:"top 55%",
    end:"top 0%",
  }
})

gsap.from(".exx",{
  y:-35,
  opacity:0,
  duration:0.5,
  stagger:0.2,
  scrollTrigger:{
    trigger:".exx",
    start:"top 30%",
    end:"top 0%",
  }
})