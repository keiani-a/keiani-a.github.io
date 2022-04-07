// This changes "Message" to "Massage" and vice versa
let title = document.getElementById("title");
title.addEventListener('click',message);
function message() {
    if (title.innerHTML === "The Medium is the Message") {
      title.innerHTML = "The Medium is the Massage";
    } else {
      title.innerHTML = "The Medium is the Message";
    }
  }

// wth did that take me so long to do - below is what i thought the code would look like if i knew what was going on
// const title = document.getElementById("title");
// title.addEventListener('click',message);
// function message (){;
//     document.getElementById("title").innerHTML =
//     "The Medium is the Massage"
//  }


let extension = document.getElementById("ext");
extension.addEventListener('click',tension);
function tension() {
    if (extension.innerHTML === "extension") {
      extension.innerHTML = "the book is an extension of the eye";
    } else if (extension.innerHTML === "the book is an extension of the eye"){
      extension.innerHTML = "clothing, an extension of the skin";
    } else {
        (extension.innerHTML = "extension");
    }
  }



  let learn = document.getElementById("learn");
  learn.addEventListener('click',student);
  function student() {
      if (learn.innerHTML === "learning") {
        learn.innerHTML = "humor";
      } else if (learn.innerHTML === "humor"){
        learn.innerHTML = "substance";
      } else {
          (learn.innerHTML = "learning");
      }
    }


let inform = document.getElementById("inform");
inform.addEventListener('click',info);
function info() {
    if (inform.innerHTML === "information") {
      inform.innerHTML = "now all the world's a sage";
    } else if (inform.innerHTML === "now all the world's a sage"){
        inform.innerHTML = "electric information environments";
    } else {
        (inform.innerHTML = "information");
    }
}


// ~ how can i make mouse over alternate (- enviro will be showing by default then when mouseover on enviro, nment will appear and vice versa)?

// let enviro = document.getElementById("enviro");
// let nment = document.getElementById("nment");
// document.getElementById('nment').style.display = 'none';
// enviro.addEventListener('mouseover',environment1);
// nment.addEventListener('mouseover',environment1);
// function environment1() {
//     if (enviro.style.display === "none") {
//         nment.style.display === "block";
//     } else if (nment.style.display === "none") {
//         enviro.style.display === "block";
//     }
// }




let otherness = document.getElementById("otherness");
otherness.addEventListener('click',other);
function other() {
    if (otherness.innerHTML === "otherness") {
      otherness.innerHTML = "can no longer be contained -- ignored";
    } else if (otherness.innerHTML === "can no longer be contained -- ignored"){
        otherness.innerHTML = "responsible for each other";
    } else {
        (otherness.innerHTML = "otherness");
    }
}