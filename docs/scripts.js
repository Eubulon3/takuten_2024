document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const navbox = document.getElementById("nav-box");
    const header = document.getElementById("header");

    menuIcon.addEventListener("click", function() {
        navbox.classList.toggle("show");
        header.classList.toggle("hide");
        if (navbox.classList.contains('show')) {
            document.body.style.overflow = 'hidden'; // スクロールを許可
        } else {
            document.body.style.overflow = 'auto'; // スクロールを禁止
        }
    });
});