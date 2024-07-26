document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const navbox = document.getElementById("nav-box");
    const header = document.getElementById("header");
    const links = navbox.getElementsByTagName("a");
    const buttons = document.querySelectorAll(".taku-button");

    const taku_info = [
        ["./images/logo_metalab.png", "めたらぼ (CG・ゲーム)", "めたらぼ説明文aaaaaあああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああaaaaaaaaaaaaaaaaaaaaaaaaw", "めたらぼ"],
        ["./images/logo_arca.png", "arca (プロダクトデザイン)", "arca説明文", "arca"],
        ["./images/logo_roxima.png", "proxima (モビリティデザイン)", "proxima説明文", "proxima"],
        ["./images/logo_reverb.png", "reverb (サウンドデザイン)", "reverb説明文", "reverb"],
        ["./images/logo_remodel.png", "remodel (アーバンデザイン)", "remodel説明文", "remodel"],
        ["./images/logo_strato.png", "strato (サービスデザイン)", "strato説明文", "strato"],
        ["./images/logo_rium.png", "+rium (グラフィックデザイン)", "+rium説明文", "+rium"],
        ["./images/logo_sin.png" , "sin (プロダクトデザイン)", "sin説明文", "sin"]
    ];
    const taku_detail = document.getElementById("overlay");
    const taku_img = document.getElementById("taku-img");
    const taku_name = document.getElementById("taku-name");
    const taku_disc = document.getElementById("taku-disc");
    const linkfor = document.getElementById("linkfor");
    const return_button = document.getElementById("return-button");


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

    for (let i = 0; i < buttons.length; i ++){
        buttons[i].addEventListener("click", function() {
            taku_detail.classList.toggle("show");
            taku_img.src = taku_info[i][0];
            taku_name.textContent = taku_info[i][1];
            taku_disc.textContent = taku_info[i][2];
            linkfor.textContent = taku_info[i][3];

            document.body.style.overflow = 'hidden';
        })
    }

    return_button.addEventListener("click", function() {
        taku_detail.classList.toggle("show");
        document.body.style.overflow = 'auto';
    })
});