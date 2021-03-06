import _ from "lodash";
import gsap, { Power1 } from "gsap/all";
import { CSSSelector } from "swiper/types/shared";
import * as ScrollMagic from "ScrollMagic";

// Search
const searchEl = document.querySelector(".search")! as HTMLElement;
const serchInputEl = searchEl.querySelector("input")! as HTMLInputElement;

searchEl.addEventListener("click", () => {
  serchInputEl.focus();
});
serchInputEl.addEventListener("focus", () => {
  searchEl.classList.add("focused");
  serchInputEl.setAttribute("placeholder", "통합검색");
});
serchInputEl.addEventListener("blur", () => {
  searchEl.classList.remove("focused");
  serchInputEl.setAttribute("placeholder", "");
});

// Badge and Top
const badgeEl = document.querySelector(".badges")! as HTMLElement;
const toTopEl = document.querySelector("#to-top")! as HTMLElement;

window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (window.scrollY > 500) {
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
      gsap.to(toTopEl, 0.2, {
        x: 0,
        display: "flex",
      });
    } else {
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
      gsap.to(toTopEl, 0.2, {
        x: 100,
        display: "flex",
      });
    }
  }, 300)
);

// 임시 scroll to plugin
toTopEl.addEventListener("click", () => {
  gsap.to(window, 0.7, {
    ScrollTop() {
      scroll({
        top: 0,
        behavior: "smooth",
      });
    },
  });
});

// Visual
const fadeEls = document.querySelectorAll<HTMLElement>(".visual .fade-in");
fadeEls.forEach((fadeEl, index: number) => {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

// Toggle
const promotionEl = document.querySelector(".promotion")! as HTMLDivElement;
const promotionToggleBtn = document.querySelector(
  ".toggle-promotion"
)! as HTMLDivElement;
let isHidePromotion: boolean = false;

promotionToggleBtn.addEventListener("click", () => {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    promotionEl.classList.add("hide");
  } else {
    promotionEl.classList.remove("hide");
  }
});

// youtube - icons

function random(min: number, max: number): number {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector: CSSSelector, delay: number, size: number) {
  gsap.to(selector, random(1, 2), {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay),
  });
}
floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

// Scroll spy

const spyEls = document.querySelectorAll<HTMLElement>("section.scroll-spy");
spyEls.forEach((spyEl) => {
  new ScrollMagic.Scene({
    triggerElement: spyEl,
    triggerHook: 0.8,
  })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});

// Copy right - year

const year = document.querySelector(".copyright .this-year")! as HTMLElement;
year.textContent = `${new Date().getFullYear()}`;

// Toggle
const toggleEl = document.querySelector(
  ".responsive-menu .material-icons.toggle"
)! as HTMLElement;

const toggleSlide = document.querySelector(
  ".toggle-menu-wrap"
)! as HTMLDivElement;

toggleEl.addEventListener("click", () => {
  gsap.to(toggleSlide, 0.3, {
    width: "70%",
  });
  console.log("클릭");
});

const closeEl = document.querySelector(
  ".toggle-menu-wrap .material-icons.close"
)! as HTMLAnchorElement;
closeEl.addEventListener("click", () => {
  gsap.to(toggleSlide, 0.3, {
    width: "0%",
  });
});
