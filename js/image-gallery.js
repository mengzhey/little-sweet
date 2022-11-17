const swiper1 = new Swiper('.mySwiper1', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
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
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  
  const swiper2 = new Swiper('.mySwiper2', {
    direction: 'horizontal',
    loop: true,
    mousewheel: true,
  
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },


    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  

  const swiper3 = new Swiper('.mySwiper3', {
    direction: 'vertical',
    // direction: 'horizontal',

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

