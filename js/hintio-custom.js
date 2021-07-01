// ------------------------------------------------
// Project Name: Hintio Coming Soon & Landing Page Template
// Project Description: Hintio - clean and bold coming soon & landing page template to kick-start your project
// Tags: mix_design, hintio, coming soon, under construction, template, coming soon page, landing page, one page, html5, css3
// Version: 1.0.0
// Build Date: July 2020
// Last Update: July 2020
// This product is available exclusively on Themeforest
// Author: mix_design
// Author URI: http://mixdesign.club
// File name: hintio-custom.js
// ------------------------------------------------

// ------------------------------------------------
// Table of Contents
// ------------------------------------------------
//
//  1. Loader & Main Section Loading Animation
//  2. Swiper Slider Settings
//  3. Skillbars Settings
//  4. YTPlayer Settings
//  5. Vegas Settings
//  6. KBW-Countdown Settings
//  7. Mailchimp Notify Form
//  8. Say Hello Form
//  9. ParticlesJS Backgrounds
//
// ------------------------------------------------
// Table of Contents End
// ------------------------------------------------

$(window).on("load", function() {

  "use strict";

  // --------------------------------------------- //
  // Loader & Main Section Loading Animation Start
  // --------------------------------------------- //
  $(".loader").addClass('is-animated');

  setTimeout(function(){
    $(".loader").addClass('loaded');
  },1300);

  setTimeout(function(){
    $("body").addClass('loaded');
  },1600);

  // --------------------------------------------- //
  // Loader & Main Section Loading Animation End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Swiper Slider Settings Start
  // --------------------------------------------- //
  var sliderSlide = $('.slider-slide'),
      sliderFade = $('.slider-fade');

  if (sliderSlide.length) {
    setTimeout(function(){
      var swiper = new Swiper('.swiper-container', {
          spaceBetween: 0,
          speed: 1000,
          centeredSlides: true,
          loop: true,
          autoplay: {
            delay: 2000,
            disableOnInteraction: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
    },3200);
  };

  if (sliderFade.length) {
    setTimeout(function(){
      var swiper = new Swiper('.swiper-container', {
          effect: 'fade',
          spaceBetween: 0,
          speed: 1000,
          centeredSlides: true,
          loop: true,
          autoplay: {
            delay: 2000,
            disableOnInteraction: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
    },3200);
  };
  // --------------------------------------------- //
  // Swiper Slider Settings End
  // --------------------------------------------- //

});

$(function() {

  "use strict";

  // --------------------------------------------- //
  // Skillbars Settings Start
  // --------------------------------------------- //
  $('.skillbar').skillBars({
    from: 0,
    speed: 4000,
    interval: 100,
  });
  // --------------------------------------------- //
  // Skillbars Settings End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // YTPlayer Settings Start
  // --------------------------------------------- //
  var bgndVideo = $("#bgndVideo");

  if(bgndVideo.length){
    bgndVideo.mb_YTPlayer({
      mute: true,
      containment: '#video-wrapper',
      showControls:false,
      autoPlay:true,
      loop:true,
      startAt:0,
      quality:'default'
    });
  };
  // --------------------------------------------- //
  // YTPlayer Settings End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Vegas Kenburns Start
  // --------------------------------------------- //
  var bgndKenburns = $('#bgndKenburns');
  if(bgndKenburns.length){
    bgndKenburns.vegas({
      timer: false,
      delay: 10000,
      transition: 'fade2',
      transitionDuration: 2000,
      slides: [
        { src: "img/backgrounds/1200x1200-bg-kenburns-1.jpg" },
        { src: "img/backgrounds/1200x1200-bg-kenburns-2.jpg" },
        { src: "img/backgrounds/1200x1200-bg-kenburns-3.jpg" }
      ],
      animation: [ 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight' ]
    });
  };

  var bgndKenburns2 = $('#bgndKenburns-2');
  if(bgndKenburns2.length){
    bgndKenburns2.vegas({
      timer: false,
      delay: 10000,
      transition: 'fade2',
      transitionDuration: 2000,
      slides: [
        { src: "img/backgrounds/1200x1200-bg-kenburns-4.jpg" },
        { src: "img/backgrounds/1200x1200-bg-kenburns-5.jpg" },
        { src: "img/backgrounds/1200x1200-bg-kenburns-6.jpg" }
      ],
      animation: [ 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight' ]
    });
  };

  var bgndKenburnsFull = $('#bgndKenburnsFull');
  if(bgndKenburnsFull.length){
    bgndKenburnsFull.vegas({
      timer: false,
      delay: 10000,
      transition: 'fade2',
      transitionDuration: 2000,
      slides: [
        { src: "img/backgrounds/1920x1280-bg-kenburns-1.jpg" },
        { src: "img/backgrounds/1920x1280-bg-kenburns-2.jpg" },
        { src: "img/backgrounds/1920x1280-bg-kenburns-3.jpg" }
      ],
      animation: [ 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight' ]
    });
  };
  // --------------------------------------------- //
  // Vegas Kenburns End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // KBW-Countdown Start
  // --------------------------------------------- //
  $('#countdown').countdown({until: $.countdown.UTCDate(+10, 2021, 12, 26), format: 'D'});
  $('#countdown-large').countdown({until: $.countdown.UTCDate(+10, 2021, 12, 26), format: 'DHMS'});
  // --------------------------------------------- //
  // KBW-Countdown End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Mailchimp Notify Form Start
  // --------------------------------------------- //
  $('.notify-form').ajaxChimp({
    callback: mailchimpCallback,
    url: 'https://besaba.us10.list-manage.com/subscribe/post?u=e8d650c0df90e716c22ae4778&amp;id=54a7906900'
  });

  function mailchimpCallback(resp) {
    if(resp.result === 'success') {
      $('.notify').find('.form').addClass('is-hidden');
      $('.notify').find('.subscription-ok').addClass('is-visible');
      setTimeout(function() {
        // Done Functions
        $('.notify').find('.subscription-ok').removeClass('is-visible');
        $('.notify').find('.form').delay(300).removeClass('is-hidden');
        $('.notify-form').trigger("reset");
      }, 5000);
    } else if(resp.result === 'error') {
      $('.notify').find('.form').addClass('is-hidden');
      $('.notify').find('.subscription-error').addClass('is-visible');
      setTimeout(function() {
        // Done Functions
        $('.notify').find('.subscription-error').removeClass('is-visible');
        $('.notify').find('.form').delay(300).removeClass('is-hidden');
        $('.notify-form').trigger("reset");
      }, 5000);
    }
  };
  // --------------------------------------------- //
  // Mailchimp Notify Form End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Say Hello Form Start
  // --------------------------------------------- //
  $("#sayhello-form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
      $('.sayhello').find('.form').addClass('is-hidden');
      $('.sayhello').find('.reply-group').addClass('is-visible');
			setTimeout(function() {
				// Done Functions
        $('.sayhello').find('.reply-group').removeClass('is-visible');
        $('.sayhello').find('.form').delay(300).removeClass('is-hidden');
				th.trigger("reset");
			}, 5000);
		});
		return false;
	});
  // --------------------------------------------- //
  // Say Hello Form End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // ParticlesJS Backgrounds Start
  // --------------------------------------------- //
  $(window).on("load", function() {

    // Night Sky BG - particlesJS
    var bgndSpace = $('#nightsky-js');
    if (bgndSpace.length) {
      particlesJS('nightsky-js', {
        "particles": {
          "number": {
            "value": 355,
            "density": {
              "enable": true,
              "value_area": 789.1476416322727
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.48927153781200905,
            "random": false,
            "anim": {
              "enable": true,
              "speed": 0.2,
              "opacity_min": 0,
              "sync": false
            }
          },
          "size": {
            "value": 2,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 2,
              "size_min": 0,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 0.3,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "bubble"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 83.91608391608392,
              "size": 1,
              "duration": 3,
              "opacity": 1,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      });
    };

    // Stars BG - particlesJS
    var bgndTriangles = $('#stars-js');
    if (bgndTriangles.length) {
      particlesJS('stars-js', {
        "particles": {
          "number": {
            "value": 100,
            "density": {
              "enable": false,
              "value_area": 2604.1872173865
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "star",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "http://wiki.lexisnexis.com/academic/images/f/fb/Itunes_podcast_icon_300.jpg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.6,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 4.5,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 9.620472365193136,
            "direction": "top",
            "random": true,
            "straight": true,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "bubble"
            },
            "onclick": {
              "enable": true,
              "mode": "repulse"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 200,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 170.53621458328246,
              "size": 8.120772123013452,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      });
    };

    // Particles BG - particlesJS
    var bgndParticles = $('#polygons-js');
    if (bgndParticles.length) {
      particlesJS('polygons-js', {
        "particles": {
          "number": {
            "value": 40,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "polygon",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.4,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 20,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 6,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      });
    };

  });
  // --------------------------------------------- //
  // ParticlesJS Backgrounds End
  // --------------------------------------------- //

});
