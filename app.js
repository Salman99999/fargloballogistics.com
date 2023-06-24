$(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
      items: 4, // Number of items shown on large devices
      responsive: {
        0: {
          items: 1 // Number of items shown on phones
        },
        768: {
          items: 3 // Number of items shown on medium devices
        },
        992: {
          items: 4 // Number of items shown on large devices
        }
      },
      loop: true,
      nav: true,
      navContainer: '.owl-nav', // Specify the navigation container
      navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'], // Custom navigation buttons with Font Awesome icons
      autoplay: true, // Enable autoplay
      autoplayTimeout: 3000, // Autoplay speed in milliseconds (3 seconds)
    });

    $('.owl-next').click(function() {
      owl.trigger('next.owl.carousel');
    });

    $('.owl-prev').click(function() {
      owl.trigger('prev.owl.carousel');
    });
  });

    // Animate the text on page load
    $('.animated-text').addClass('animated-text');

    
    function redirectToWhatsApp() {
      window.open("https://api.whatsapp.com/send?phone=994557343422")
    }