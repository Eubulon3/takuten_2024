document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.getElementById("navbar");
    const header = document.getElementById("header");

    menuIcon.addEventListener("click", function() {
        navbar.classList.toggle("show");
        header.classList.toggle("hide");
        if (navbar.classList.contains('show')) {
            document.body.style.overflow = 'hidden'; // スクロールを許可
        } else {
            document.body.style.overflow = 'auto'; // スクロールを禁止
        }
    });
});