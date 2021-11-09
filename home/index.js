(function(){
    const openWindow = document.querySelector(".header-nav__open");
    const closeWindow = document.querySelector(".header-nav__close");
    const window = document.querySelector(".header-nav__window");

    openWindow.addEventListener("click",() => {
        window.style.display = "inherit";

    });

    closeWindow.addEventListener("click", () => {
        window.style.display = "none";
    })

})()