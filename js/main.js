/*class active for li*/

let allOfLi = document.querySelectorAll(".all-sections li");
allOfLi.forEach((ele) => {
    ele.addEventListener("click", function (e) {
        allOfLi.forEach((ele) => {
            ele.classList.remove("activeLi")
        })
        e.currentTarget.classList.add("activeLi");
    })
});

/*class active for Sections*/

let allSections = document.querySelectorAll("body > div:not(.the-header)");
console.log(allSections)

allOfLi.forEach((ele) => {
    ele.addEventListener("click", function (e) {
    allSections.forEach((element) => {
        element.style.display = "none";
    })
    
        document.querySelector(e.currentTarget.dataset.section).style.display = "block";
    })
});

/*class Active project section filtering*/

let allfilters = document.querySelectorAll(".projects-filter div")
allfilters.forEach((ele) => {
    ele.addEventListener("click", function (e) {
        allfilters.forEach((eles) => { 
        eles.classList.remove("active-filter");
        })
        
        e.currentTarget.classList.add("active-filter")
    })
})

/* Small trick in class = special-skill*/

let arraySkills = ["HTML5 />","CSS3 />","Command Line />","Git&Github />","SASS />","Boostrap />"]
let specialSkill = document.querySelector(".special-skill");
setInterval(() => {
    specialSkill.textContent = "";
    let randomSkill = Math.trunc(Math.random() * arraySkills.length)
    specialSkill.textContent = arraySkills[randomSkill]
}, 1500);


/*show menu in 767px max-width*/

let iconMenu = document.querySelector(".menu");
let theMenu = document.querySelector(".all-sections")
let mediaQuery = window.matchMedia('(max-width: 767px)')
let theBody = document.querySelector("body")
/*
if (window.matchMedia('(max-width: 1000px)')) {
    console.log("said")
    theMenu.style.display = "flex";
}

iconMenu.onclick = function () {
    if (window.matchMedia('(max-width: 767px)')){
        if (theMenu.computedStyleMap().get("display").toString() === "none") {

            
        } else {
            theMenu.style.display = "none"
        }
        
    
    }
}*/


/* filter of all project*/
let filters = document.querySelectorAll(".projects-filter  div:nth-child(n+2)")
let allProject = document.querySelectorAll(".all-projects a")
let theAllProj = document.querySelector(".projects-filter div")


theAllProj.onclick = function () {
    allProject.forEach((el) => {
        el.style.display = "block"
        
    })
}

filters.forEach((ele) => {
    ele.addEventListener("click", function (e) {
        allProject.forEach((el) => {
            el.style.display = "none"
            
        })
        document.querySelectorAll(e.currentTarget.dataset.proj).forEach((element) => {
            element.style.display = "block"
        })
    })
})