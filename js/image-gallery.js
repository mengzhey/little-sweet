const swiper1 = new Swiper('.mySwiper1', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  
  const swiper2 = new Swiper('.mySwiper2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    mousewheel: true,
  
    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
  
    // // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },


    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  

  const swiper3 = new Swiper('.mySwiper3', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    mousewheel: true,
  
    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },


    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });