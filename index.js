let menu=document.querySelector("#menu-icon")
let navbar=document.querySelector(".link")
menu.onclick=()=>{
    menu.classList.toggle("fa-x")
    navbar.classList.toggle("open")
}