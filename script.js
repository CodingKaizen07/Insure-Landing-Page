var toggleBtn = document.querySelector("#toggleBtn");
let navBar = document.querySelector("#nav-bar");

toggleBtn.addEventListener("click", function(){

    if(navBar.style.display === "block")
    {
        return navBar.style.display = "none"
    }

    else
    {
        return navBar.style.display = "block"
    }
})
