class MobileMenu {
  constructor() {
    this.DOM = {};
    this.DOM.btn = document.querySelector(".header__button");
    this.DOM.container = document.querySelector(".header");
    this.DOM.links = document.querySelectorAll(
      ".header__mask-navigation-text > a"
    );

    for (let link of this.DOM.links) {
      link.addEventListener("click", this._toggle.bind(this));
    }
    this.DOM.btn.addEventListener("click", this._toggle.bind(this));
  }

  _toggle() {
    this.DOM.container.classList.toggle("open");

    if (document.body.style.overflow == "hidden") {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }
}

class TakuDetail {
  constructor() {
    this.DOM = {};
    this.DOM.container = document.querySelector(".list");
    this.DOM.btns = document.querySelectorAll(".list__summary-button");
    this.DOM.img = document.querySelector(".list__detail-each-image");
    this.DOM.name = document.querySelector(".list__detail-each-name");
    this.DOM.disc = document.querySelector(".list__detail-each-discription");
    this.DOM.return_btn = document.querySelector(".list__detail-each-return");
    this.swiper = null;

    this._init();
  }

  _init() {
    this.DOM.btns.forEach((btn, i) => {
      btn.addEventListener("click", this._toggle.bind(this, i));
    });

    this.DOM.return_btn.addEventListener("click", this._toggle.bind(this));

    this._initSwiper();
  }

  _initSwiper() {
    this.swiper = new Swiper(".swiper", {
      // direction: "vertical",
      loop: true,
      slidesPerView: 1,
      slidesPerGroup: 1,

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
  }

  _toggle(slideIndex) {
    this.DOM.container.classList.toggle("open");
    this.swiper.slideTo(slideIndex);
    // this.swiper.setTransition(0);

    // // トランジションを元に戻す
    // setTimeout(() => {
    //   this.swiper.setTransition(300);
    // }, 0);

    if (document.body.style.overflow == "hidden") {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  new MobileMenu();
  new TakuDetail();
});
