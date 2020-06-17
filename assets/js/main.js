let name = document.getElementById("name")
let email = document.getElementById("email")
let tel = document.getElementById("tel")

function sendInfo() {
    document.getElementById("info").innerHTML="<h2>Name: "+name.value+"</h2><h2>Email: "+email.value+"</h2><h2>Tel: "+tel.value+"</h2>"
}