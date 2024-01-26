import Swiper from "swiper";
import { Navigation, Autoplay } from "swiper/modules";

const swiper = new Swiper(".js-swiper-manufacturer", {
  modules: [Navigation, Autoplay],
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".js-manufacturer-prev",
    prevEl: ".js-manufacturer-next",
  },
  breakpoints: {
    1200: {
      slidesPerView: 5,
      spaceBetween: 18,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 18,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 18,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
  },
});
