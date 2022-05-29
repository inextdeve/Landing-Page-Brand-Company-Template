
//Set The Height of tyhe article childrens

const ARTICLE_CH = document.querySelectorAll("article .articles > div");


function setHeight() {
    Array.from(ARTICLE_CH).forEach(ELE => { 
        ELE.style.height = ELE.offsetWidth + "px";
        console.log(ELE.offsetWidth);
    });
}

window.onload = setHeight;
window.onresize = setHeight;

//______________________________________//
const MENU_BTN = document.querySelectorAll(".menu-btn, #close-btn");
const NAV = document.getElementsByTagName("nav")[0];

function toggleClass(button, target, className, event) {
    Array.from(button).forEach((ELE)=>{
        ELE.addEventListener(event, () => {
            target.classList.toggle(className);
        })
    });
}

toggleClass(MENU_BTN, NAV, "hidden", "click");
toggleClass(MENU_BTN, NAV, "show", "click");
(function(){
    const LI = NAV.querySelectorAll("li");
    NAV.style.height = `${LI[0].offsetHeight * LI.length}px`;
})();

