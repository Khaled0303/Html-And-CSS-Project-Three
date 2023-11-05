// Header

let pagesLink = document.getElementById("pages")
let pageList = document.querySelector(".pagelist")

pagesLink.addEventListener("click" , function(){
    pageList.classList.toggle("show")
})

let bar = document.querySelector(".bar")
let links = document.querySelector(".links")

bar.addEventListener("click" , function(){
    links.classList.toggle("show")
})

"========================================================================================="
// Land

let landPage = document.querySelector(".land")
let landBg = ["blog-1.jpg" , "blog-3.jpg" , "carousel-1.jpg"]

function BackGroundInte(){
    let bgInterval = setInterval(function(){
        let randomBg = Math.floor(Math.random() * landBg.length)
        landPage.style.backgroundImage = "url('images/" + landBg[randomBg] + "')"
    } , 3000)
}
BackGroundInte()

let leftArrow = document.querySelector(".left")
let rightArrow = document.querySelector(".right")

leftArrow.addEventListener("click" , function(){
    landPage.style.backgroundImage = "url('images/blog-1.jpg')"
})
rightArrow.addEventListener("click" , function(){
    landPage.style.backgroundImage = "url('images/blog-3.jpg')"
})

// Go Up
let goUp = document.querySelector(".goUp")

window.onscroll = function(){
    if(window.pageYOffset > 300){
        goUp.classList.add("show")
    }else{
        goUp.classList.remove("show")
    }
}

goUp.addEventListener("click" , function(){
    window.scrollTo({
        top : 0,
        behavior : "smooth"
    })
})

"========================================================================================="
// About

let spanOne = document.querySelector(".one")
let spanTwo = document.querySelector(".two")
let para = document.getElementById("pa")
let paraContent = para.textContent

spanOne.addEventListener("click" , function(){
    spanTwo.classList.remove("bg-main")
    spanOne.classList.add("bg-main")
    para.innerHTML = `${paraContent}`
})
spanTwo.addEventListener("click" , function(){
    spanOne.classList.remove("bg-main")
    spanTwo.classList.add("bg-main")
    para.innerHTML = `Why Choose Us: ${paraContent}`
})

"========================================================================================="
// Classes

let days = document.querySelectorAll(".days li")
let titleText = document.querySelector(".title h1")

days.forEach(function(day){
    day.addEventListener("click" , function(){
        days.forEach(function(e){
            e.classList.remove("active")
        })
        this.classList.add("active")
        titleText.innerHTML = this.textContent
    })
})

"========================================================================================="
// Counter

let spanCount = document.querySelectorAll(".counter .box .count")
let counter = document.querySelector(".counter")
console.log(counter)
let start = false

window.onscroll = function(){
    let offsetTop = counter.offsetTop
    console.log(offsetTop)
    let offsetHeight = counter.offsetHeight
    // console.log(offsetHeight)
    let innerHeight = window.innerHeight
    // console.log(innerHeight)
    let pageYOffset = window.pageYOffset
    // console.log(pageYOffset)
    if(pageYOffset >= offsetTop + offsetHeight - innerHeight){
        // spanCount.forEach(function(span){
        //     counte(span)
        // })
        if(!start){
            spanCount.forEach(function(span){
                counte(span)
            })
        }
        start = true
    }
}

// Another Solution

// window.onscroll = function(){
//     if(window.scrollY >= counter.offsetTop){
//         if(!start){
//             spanCount.forEach(function(span){
//                 counte(span)
//             })
//         }
//         start = true
//         console.log("hello")
//     }
// }

function counte(el){
    let counteNumber = el.dataset.count
    let interval = setInterval(function(){
        el.textContent++
        if(el.textContent === counteNumber){
            clearInterval(interval)
        }
    }, 1000 / counteNumber)
}

"========================================================================================="
// Testimonial

let leftAr = document.getElementById("left")
let rightAr = document.getElementById("right")
let clintImg = document.getElementById("clint")
let imgArr = ["images/testimonial-2.jpg" , "images/user.jpg"]

leftAr.addEventListener("click" , function(){
    clintImg.src = "images/user.jpg"
})
rightAr.addEventListener("click" , function(){
    clintImg.src = "images/testimonial-2.jpg"
})