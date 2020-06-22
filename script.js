var toggleBtn = document.querySelector("#toggleBtn");
let navBar = document.querySelector("#nav-bar");

toggleBtn.addEventListener("click", function(){

    if(navBar.style.display === "none")
    {
        return navBar.style.display = "block"
    }

    else
    {
        return navBar.style.display = "none"
    }
})
