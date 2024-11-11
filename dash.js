async function fetchdata() {
    let response = await fetch("https://api.github.com/users");
    let data = await response.json();
    let userList = document.getElementById("userList");
    userList.innerHTML = "";
    data.slice(0, 10).forEach((element) => {
      let li = document.createElement("li");
      let a = document.createElement("a");
      a.textContent = element.login;
      a.setAttribute("href", element.html_url);
      a.setAttribute("lo", "login"); 
      li.appendChild(a);
      userList.appendChild(li);
    });
    document.getElementById("logoutButton").addEventListener("click", () => {
        window.location.href = "login.html";
    });
    
}
