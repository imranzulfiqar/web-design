var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function validateForm() {
    var x = document.getElementById("uname").value;
	var y = document.getElementById("psw").value;
    if (x == "imran" && y == "12345") 
		window.location.replace("http://stackoverflow.com");
		else alert('Wrong Username or Password');
		
	
}
