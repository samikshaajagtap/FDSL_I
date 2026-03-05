function validateForm(){

let username = document.getElementById("username").value.trim();
let email = document.getElementById("email").value.trim();
let phone = document.getElementById("phone").value.trim();
let password = document.getElementById("password").value;
let confirm = document.getElementById("confirm").value;

let msg = document.getElementById("message");

let phonePattern = /^[0-9]{10}$/;
let emailPattern = /^[a-zA-Z]+@[a-zA-Z]{3}\.[a-zA-Z]{2,3}$/;
let passPattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[&$#@]).{7,}$/;

if(username=="" || email=="" || phone=="" || password=="" || confirm==""){
msg.innerHTML="All fields are mandatory";
msg.style.color="red";
return;
}

if(!phonePattern.test(phone)){
msg.innerHTML="Phone number must be 10 digits";
return;
}

if(!emailPattern.test(email)){
msg.innerHTML="Invalid email format";
return;
}

if(!passPattern.test(password)){
msg.innerHTML="Password must contain 1 capital letter, 1 digit and special character";
return;
}

if(password!=confirm){
msg.innerHTML="Passwords do not match";
return;
}

msg.innerHTML="Registration Successful";
msg.style.color="green";

}

/* DOM Manipulation */

function changeImage(){
document.getElementById("image").src="https://via.placeholder.com/150/ff0000";
}

function addNode(){
let text=document.createTextNode("Welcome Student!");
let para=document.createElement("p");
para.appendChild(text);

document.getElementById("container").appendChild(para);
}

function deleteNode(){
let container=document.getElementById("container");
if(container.lastChild){
container.removeChild(container.lastChild);
}
}

/* jQuery Operations */

$(document).ready(function(){

$("#submitBtn").click(function(){
$(this).text("Submitted");
});

$("body").css("background-image","url('https://via.placeholder.com/800')");
$("body").css("background-size","cover");

let username=$("#username").val();

$("#title").attr("title","Student Form");

});