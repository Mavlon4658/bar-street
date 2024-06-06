// comment slider
let swiper = new Swiper(".commentSwiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".comment-button-next",
      prevEl: ".comment-button-prev",
    },
});
// comment slider