var modal = document.getElementById('id01');
var modal1 = document.getElementById('register');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}
function validateForm() {
    var x = document.getElementById("uname").value;
	var y = document.getElementById("psw").value;
    if (x == "imran" && y == "12345") 
		{
            alert('Correct');
        }
		else alert('Wrong Username or Password');	
}
function registerForm() {
    var x = document.getElementById("name").value;
    var y = document.getElementById("pass").value;
    var z = document.getElementById("phone").value;
    if (x == "imran" && y == "12345") 
		{
            alert('Succesffully registered');
        }
		else alert('Wrong Username or Password');	
}
