
$(document).ready(function(){
  // $fn.scrollSpeed(step, speed, easing);
  jQuery.scrollSpeed(200, 800);
});
(function ($) {

  jQuery.scrollSpeed = function(step, speed, easing) {
  
  var $document = $(document),
      $window = $(window),
      $body = $('html, body'),
      option = easing || 'default',
      root = 0,
      scroll = false,
      scrollY,
      scrollX,
      view;
      
  if (window.navigator.msPointerEnabled)
  
      return false;
      
  $window.on('mousewheel DOMMouseScroll', function(e) {
      
      var deltaY = e.originalEvent.wheelDeltaY,
          detail = e.originalEvent.detail;
          scrollY = $document.height() > $window.height();
          scrollX = $document.width() > $window.width();
          scroll = true;
      
      if (scrollY) {
          
          view = $window.height();
              
          if (deltaY < 0 || detail > 0)
      
              root = (root + view) >= $document.height() ? root : root += step;
          
          if (deltaY > 0 || detail < 0)
      
              root = root <= 0 ? 0 : root -= step;
          
          $body.stop().animate({
      
              scrollTop: root
          
          }, speed, option, function() {
      
              scroll = false;
          
          });
      }
      
      if (scrollX) {
          
          view = $window.width();
              
          if (deltaY < 0 || detail > 0)
      
              root = (root + view) >= $document.width() ? root : root += step;
          
          if (deltaY > 0 || detail < 0)
      
              root = root <= 0 ? 0 : root -= step;
          
          $body.stop().animate({
      
              scrollLeft: root
          
          }, speed, option, function() {
      
              scroll = false;
          
          });
      }
      
      return false;
          
  }).on('scroll', function() {
              
              if (scrollY && !scroll) root = $window.scrollTop();
              if (scrollX && !scroll) root = $window.scrollLeft();
              
          }).on('resize', function() {
              
              if (scrollY && !scroll) view = $window.height();
              if (scrollX && !scroll) view = $window.width();
              
          });       
      };
  
      jQuery.easing.default = function (x,t,b,c,d) {
  
      return -c * ((t=t/d-1)*t*t*t - 1) + b;
      };
  
  })(jQuery);

$(document).ready(function () {
  // Active tooltip

  $("[data-toggle='tooltip']").tooltip()



    $(".hum-wrap").click(function(){
        $(this).toggleClass("active")
    });

    $(window).scroll(function(){
        if($(this).scrollTop()>100){
            $('#header').addClass("scrolledMenu");
        }else{
            $('#header').removeClass("scrolledMenu");
        }
    });

    $(window).scroll(function(){
        if($(this).scrollTop()>200){
            $('#scrollTop').fadeIn(500);
        }else{
            $('#scrollTop').fadeOut(500);
        }
    });

    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 1000
      });

    //   Smooth scrolling effect

    var scrolltoOffset = $('#header').outerHeight() - 25;
    if (window.matchMedia("(max-width: 991px)").matches) {
      scrolltoOffset += 25;
    }
    $(document).on('click', '.navbar a, .dropdown-item, #scrollTop', function(e) {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        e.preventDefault();
        var target = $(this.hash);
        if (target.length) {
  
          var scrollto = target.offset().top - scrolltoOffset;
  
          if ($(this).attr("href") == '#header') {
            scrollto = 0;
          }
  
          $('html, body').animate({
            scrollTop: scrollto
          }, 1500, 'easeInOutExpo');
  
          if ($(this).parents('.navbar').length) {
            $('.navbar .active').removeClass('active');
            $(this).closest('li').addClass('active');
          }
          return false;
        }
      }
    });

    // Add a specific style present section when someone scroll

    // Activate smooth scroll in all browsers

    $(document).ready(function() {
      if (window.location.hash) {
        var initial_nav = window.location.hash;
        if ($(initial_nav).length) {
          var scrollto = $(initial_nav).offset().top - scrolltoOffset;
          $('html, body').animate({
            scrollTop: scrollto
          }, 1500, 'easeInOutExpo');
        }
      }
    });


  var nav_sections = $('section');
  var main_nav = $('.navbar');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 100;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".navbar ul:first li:first").addClass('active');
      }
    });
  });

    //   carousel slider
  
    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        900: {
            items: 3
        }
        }
    });

    // Click to add a style width a

    $(document).on('click','.nav-item', function(){
        $('.nav-item').removeClass("active");
        $(this).addClass("active");
    });




    $(document).on('click', 'li',function(){
        $('.port-control li').removeClass('current');
        $(this).addClass('current');
    });

    // Venobox slider
    $(document).ready(function() {
      $('.venobox').venobox();
    });


    // Aos slider
    AOS.init({
      duration: 1000,
      once: true
    })

});

// Isotope jquery slider

$(window).on('load', function() {
  var portfolioIsotope = $('.wrapper-port').isotope({
    itemSelector: '.portfolio-item'
  });

  $('.port-control li').on('click', function() {
    portfolioIsotope.isotope({
      filter: $(this).data('filter')
    });
    aos_init();
  });

});

// Reload and scroll to top 

$('.navbar-brand').click(function(){
  location.reload(function(){
    window.scrollTop()>0;
  });
});

// Preloader


$(window).on('load', function () {
  $('#preloader').fadeOut(400)
})

