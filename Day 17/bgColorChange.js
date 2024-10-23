const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function(button) {
    button.addEventListener("mouseover", function(e) {
        body.style.backgroundColor = e.target.id
    })
    button.addEventListener("mouseout", function(e) {
        body.style.backgroundColor = "red"  
    })
});