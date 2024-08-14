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
      loop: false,
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

class MyObserver {
  constructor() {
    this.io = null;
    this.options = {
      root: null,
      rootMargin: "0px 0px 0px 0px",
      threshold: 0,
    };
    this.options["threshold"] = this._getResponsiveThreshold();
    this.DOM = {};
    this.DOM.els = document.querySelectorAll("section");
    this.DOM.nav_link = document.querySelectorAll(".header__navigation-text");

    this._initObserver();
  }

  _getResponsiveThreshold() {
    const width = window.innerWidth;

    if (width < 768) {
      return 0.3; // モバイル
    }else {
      return 0.5; // デスクトップ
    }
  }

  _initObserver() {
    this.io = new IntersectionObserver(this._cb.bind(this), this.options);
    this.DOM.els.forEach((el) => {
      this.io.observe(el);
    });
  }

  _cb(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = Array.from(this.DOM.els).indexOf(entry.target);
        // console.log(`inviwe: ${index}`);
        this.DOM.els[index].classList.add("appear");
        this.DOM.nav_link[index].classList.add("active");
      } else {
        const index = Array.from(this.DOM.els).indexOf(entry.target);
        // console.log(`outview: ${index}`);
        this.DOM.nav_link[index].classList.remove("active");
      }
    });
  }
}

new MobileMenu();
new TakuDetail();
new MyObserver();
