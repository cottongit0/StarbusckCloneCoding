import { Swiper, SwiperOptions } from "swiper";

const swiperVertical: SwiperOptions = {
  loop: true,
  autoplay: true,
  direction: "vertical",
};

const swiperPromotion: SwiperOptions = {
  autoplay: {
    delay: 500,
  },
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".promotion .swiper-next",
    prevEl: ".promotion .swiper-prev",
  },
};

new Swiper(".notice-line .swiper-container", swiperVertical);

new Swiper(".promotion .swiper-container", swiperPromotion);
