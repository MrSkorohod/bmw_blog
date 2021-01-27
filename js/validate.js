const form = document.querySelector(".form");
const btn= form.querySelector(".btn");
const names = form.querySelector(".names");
const surnames = form.querySelector(".surnames");
const articles = form.querySelector(".articles");
const mail = form.querySelector(".mail");
const formControls = form.querySelectorAll(".form-control");
form.addEventListener("submit",function(event){
    event.preventDefault();
    for (let i = 0; i < formControls.length; i++){
       if (!formControls[i].value){
           let error =  form.querySelectorAll(".invalid-feedback");
           for (let i = 0; i < error.length; i++){
               if (!formControls[i].value){
                   error[i].style.display = "block";
                   formControls[i].style.border = "2px solid red";
                   // formControls[i].style.borderColor = "red";
                   // formControls[i].style.borderWidth = "2px";
                   // formControls[i].style.borderStyle = "solid";
               }
               else{
                   error[i].style.display = "none";
                   formControls[i].style.border = "none";
               }
           }
       }
    }
} );