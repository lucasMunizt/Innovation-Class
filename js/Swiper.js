document.addEventListener("DOMContentLoaded", function () {
  const cardDesativado = document.querySelectorAll('#card-desativado');
  const containerPaiSlide = document.querySelector('.test');
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
        breakpoints: {
          560: {
            slidesPerView: 1, 
            spaceBetween: 200,
          },

          460:{
            slidesPerView: 1, 
            spaceBetween: 1200,
          }
        }
    });
 
  });