const nav_menu= document.getElementById("nav_menu")
const menu_content= document.getElementById("menu_content")
const nav_menu_cancel= document.getElementById("nav_menu_cancel")

nav_menu.addEventListener("click", function(){
    menu_content.classList.remove("hide")
    nav_menu.classList.add("visi")
    nav_menu_cancel.classList.remove("hide")
})

// nav_menu.addEventListener("blur", function(){
//     menu_content.classList.add("hide")
// })

nav_menu_cancel.addEventListener("click", function(){
    menu_content.classList.add("hide")
    nav_menu.classList.remove("visi")
    nav_menu_cancel.classList.add("hide")
})