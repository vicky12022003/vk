let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

let cart = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cart.classList.toggle('active');
}

let  wrong= document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    wrong.classList.toggle('active');
}

// 

    
let id =(id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id ("username"),

email =id("email"),
password = id("password"),
form = id("form"),
errorMsg = classes("error"),
successIcon = classes("success-icon"),
failureIcon = classes("failure-icon");


form.addEventListener("submit",(e) => {
    // console.dir(e);
    // console.dir(e.target[1].value);
    e.preventDefault();                              /// intha line  refresh aga iruka default ahh refresh agum atha stop panna prevent default method
    // e.target[0].value = "";

    engine(username,0, "username cannot be blank");
    engine(email,1, "email cannot be blank");
    engine(password,2, "password cannot be blank");

    
});    

// console.log(email);

let engine = (id, serial, message) => {
    if (id.value.trim()=== ""){
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";

                                                   // icons
            failureIcon[serial].style.opacity="1";
            successIcon[serial].style.opacity="0";

}
else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";

                                                    // icons
            failureIcon[serial].style.opacity="0";
            successIcon[serial].style.opacity="1";
 }
}



