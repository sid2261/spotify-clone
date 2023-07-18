import './style.css'

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("acessToken")){
    window.location.href = "dashboarmd/dashboard.html";
  }else{
    window.location.href = "login/login.html";
  }
})


