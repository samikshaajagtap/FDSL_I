const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");
const phoneInput = document.getElementById("phone");


// NAME VALIDATION
nameInput.addEventListener("input", function () {

let msg = document.getElementById("nameMsg");

if (this.value.length === 0) {
msg.style.display = "none";
return;
}

msg.style.display = "block";

if (this.value.length >= 3) {
msg.innerHTML = "✔ Valid name";
msg.className = "msg valid";
}
else {
msg.innerHTML = "✖ At least 3 characters required";
msg.className = "msg invalid";
}

});


// EMAIL VALIDATION
emailInput.addEventListener("input", function () {

let msg = document.getElementById("emailMsg");
let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if (this.value.length === 0) {
msg.style.display = "none";
return;
}

msg.style.display = "block";

if (pattern.test(this.value)) {
msg.innerHTML = "✔ Valid email";
msg.className = "msg valid";
}
else {
msg.innerHTML = "✖ Invalid email format";
msg.className = "msg invalid";
}

});


// PASSWORD VALIDATION (LIVE CONDITIONS)
passInput.addEventListener("input", function () {

let msg = document.getElementById("passMsg");

if (this.value.length === 0) {
msg.style.display = "none";
return;
}

msg.style.display = "block";

let value = this.value;

msg.innerHTML = `
<ul class="pass-list">
<li class="${value.length >= 8 ? 'valid' : 'invalid'}">At least 8 characters</li>
<li class="${/[A-Z]/.test(value) ? 'valid' : 'invalid'}">One uppercase letter</li>
<li class="${/[0-9]/.test(value) ? 'valid' : 'invalid'}">One number</li>
<li class="${/[!@#$%^&*]/.test(value) ? 'valid' : 'invalid'}">One special character</li>
</ul>
`;

});


// PHONE VALIDATION
phoneInput.addEventListener("input", function () {

let msg = document.getElementById("phoneMsg");
let pattern = /^[0-9]{10}$/;

if (this.value.length === 0) {
msg.style.display = "none";
return;
}

msg.style.display = "block";

if (pattern.test(this.value)) {
msg.innerHTML = "✔ Valid phone number";
msg.className = "msg valid";
}
else {
msg.innerHTML = "✖ Phone must be 10 digits";
msg.className = "msg invalid";
}

});