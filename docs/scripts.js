document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const navbox = document.getElementById("nav-box");
    const header = document.getElementById("header");
    const links = navbox.getElementsByTagName("a");

    menuIcon.addEventListener("click", function() {
        navbox.classList.toggle("show");
        header.classList.toggle("hide");
        if (navbox.classList.contains('show')) {
            document.body.style.overflow = 'hidden'; // スクロールを許可
        } else {
            document.body.style.overflow = 'auto'; // スクロールを禁止
        }
    });

    for (let link of links){
        link.addEventListener("click", () => {
            navbox.classList.toggle("show");
            header.classList.toggle("hide");
            if (navbox.classList.contains('show')) {
                document.body.style.overflow = 'hidden'; // スクロールを許可
            } else {
                document.body.style.overflow = 'auto'; // スクロールを禁止
            }
        });
    }
});