new Swiper(".notice-line .swiper-container", {
  loop: true,
  autoplay: true,
  direction: "vertical",
});

new Swiper(".promotion .swiper-container", {
  autoplay: {
    delay: 5000,
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
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

new Swiper(".awards .swiper-container", {
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  autoplay: true,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});
