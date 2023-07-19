var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");
        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classlist.remove("active-link");
            }
            for(tabcontent of tabcontents){
                tabcontent.classlist.remove("active-tab");
            }
            event.currentTarget.classlist.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }

//typing animation script
const filterButtons = document.querySelector("#filter-btns").children;
const items = document.querySelector(".portfolio-gallery").children;


for (let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener("click", function (){
        for (let j = 0; j < filterButtons.length; j++) {
            filterButtons[j].classList.remove("active")
        }
        this.classList.add("active");
        const target = this.getAttribute("data-target")

        for (let k = 0; k < items.length; k++) {
            items[k].style.display = "none";
            if (target == items[k].getAttribute("data-id")) {
                items[k].style.display = "block";

            }
            if (target == "all"){
                items[k].style.display = "block";
                
            }
        }
    })
}


var typed = new Typed(".auto-input", {
    strings: ["Web Developer", "UI/UX Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})



var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}