const swiper = new Swiper('.testimonials', {
    // Optional parameters
      slidesPerView: 2,
      spaceBetween: 20,
      loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    autoplay: {
      delay: 4000,
      pauseOnMouseEnter: true,
  }
  
  });