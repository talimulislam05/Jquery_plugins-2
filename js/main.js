// JavaScript

// Jquery
$(document).ready(function () {

    // Plugin-1 Counter Up

    // $(selector).countMe(delay,speed)
    $(".count").countMe(5,10);
    $(".counter").countMe(5,15);
    $(".count2").countMe(5,20);

     // Plugin-1 Counter Up

    //  wow js
    new WOW().init();
    //  wow js


    // slick slider
    $('.wrapper').slick({
        dots: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
    //   slick slider

    // aos animation
    AOS.init();
    // aos animation

    // mixitup plugin
    var mixer = mixitup('#mixme', {
      animation: {
          duration: 300
      }
  });


  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  $('.particles').particleground({
    
  minSpeedX: 0.1,
    
  maxSpeedX: 0.7,
    
  minSpeedY: 0.1,
    
  maxSpeedY: 0.7,
    
  directionX:'center',// 'center', 'left' or 'right'. 'center' = dots bounce off edges
    
  directionY:'center',// 'center', 'up' or 'down'. 'center' = dots bounce off edges
    
  density: 10000,// How many particles will be generated: one particle every n pixels
    
  dotColor:'#666666',
    
  lineColor:'#666666',
    
  particleRadius: 7,// Dot size
    
  lineWidth: 1,
    
  curvedLines:false,
    
  proximity: 100,// How close two dots need to be before they join
    
  parallax:true,
    
  parallaxMultiplier: 5,// The lower the number, the more extreme the parallax effect
    
  onInit:function() {},
    
  onDestroy:function() {}
    
    });
    




})
