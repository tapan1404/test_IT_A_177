document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    if (username=='Tapan' && password=='Tapan') {
        
        window.location.href = "dash.html";
    } else {
        alert("Invalid Login Details");
    }
});