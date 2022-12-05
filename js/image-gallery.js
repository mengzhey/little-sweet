const swiper1 = new Swiper('.mySwiper1', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  
  const swiper2 = new Swiper('.mySwiper2', {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  }
  );
  

