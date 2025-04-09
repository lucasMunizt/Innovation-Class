document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.swiper', {
      slidesPerView: 1,
      spaceBetween: 1,   //100
      loop: true,
       
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
       
        
    });
  });