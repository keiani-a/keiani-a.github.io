let theButton = document.querySelector(".button");
let theBody = document.querySelector("body")
let theTxt = document.querySelector("h3")

theButton.addEventListener('click', buttonOne);

function buttonOne(){
   console.log(theBody.style)
   theBody.style.backgroundColor = "black"
    theTxt.textContent = ""
}

$(function(){ 
    $('.button').click(function(){ 
        $(this).toggleClass('clicked') 
    }) 
});