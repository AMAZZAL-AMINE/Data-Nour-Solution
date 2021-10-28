/**
  * isMobile
  * responsiveMenu
  * headerFixed
  * flatIconboxCarousel
  * blogCarousel
  * ClientCarousel
  * flatTeam
  * googleMap
  * portfolioIsotope
  * goTop
  * parallax
*/

;(function($) {

   'use strict'

    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

	var responsiveMenu = function() {
        var menuType = 'desktop';

        $(window).on('load resize', function() {
            var currMenuType = 'desktop';

            if ( matchMedia( 'only screen and (max-width: 991px)' ).matches ) {
                currMenuType = 'mobile';
            }

            if ( currMenuType !== menuType ) {
                menuType = currMenuType;

                if ( currMenuType === 'mobile' ) {
                    var $mobileMenu = $('#mainnav').attr('id', 'mainnav-mobi').hide();
                    var hasChildMenu = $('#mainnav-mobi').find('li:has(ul)');

                    $('#header').after($mobileMenu);
                    hasChildMenu.children('ul').hide();
                    hasChildMenu.children('a').after('<span class="btn-submenu"></span>');
                    $('.btn-menu').removeClass('active');
                } else {
                    var $desktopMenu = $('#mainnav-mobi').attr('id', 'mainnav').removeAttr('style');
                    $('#mainnav').find('li:has(ul)').children('ul').show();
                    $desktopMenu.find('.submenu').removeAttr('style');
                    $('#header').find('.nav-wrap').append($desktopMenu);
                    $('.btn-submenu').remove();
                }
            }
        });

        $('.btn-menu').on('click', function() {         
            $('#mainnav-mobi').slideToggle(300);
            $(this).toggleClass('active');
        });

        $(document).on('click', '#mainnav-mobi li .btn-submenu', function(e) {
            $(this).toggleClass('active').next('ul').slideToggle(300);
            e.stopImmediatePropagation()
        });
    }

    var headerFixed_s1 = function() {
        var nav = $('.header.bg-color');
            // if ( nav.size() !== 0 ) {

            $(window).on('load', function(){
            var header = $('.header.bg-color');           
            var offsetTop = $('.header.bg-color').offset().top;
            var headerHeight = $('.header.bg-color').height();
            var buffer  = $('<div>', { height: headerHeight }).insertAfter(header);   
                buffer.hide();                 

                $(window).on('load scroll', function(){
                    if ( $(window).scrollTop() > offsetTop  ) {
                        $('.header.bg-color').addClass('fixed-header');
                        buffer.show();
                    } else {
                        $('.header.bg-color').removeClass('fixed-header');
                        buffer.hide();
                    }
                })
           
            }); // headerFixed style1
        // }
    };

    var relatedPost = function() {
        $(".owl-carousel-12").owlCarousel({
            autoplay:true,
            dots:false,
            nav: true,
            margin: 16,
            loop:true,
            items:3,
            responsive:{
                0:{
                    items: 1
                },

                479:{
                    items: 2
                },
                768:{
                    items: 2
                },
                991:{
                    items: 2
                },
                1200: {
                    items: 2
                },
                1366: {
                    items: 3
                }
            }
        });
    }

    var relatedPost_S2 = function() {
        $(".owl-carousel").owlCarousel({
            autoplay:true,
            dots:false,
            nav: true,
            margin: 28,
            loop:true,
            items:3,
            responsive:{
                0:{
                    items: 1
                },

                479:{
                    items: 2
                },
                768:{
                    items: 1
                },
                991:{
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        });
    }

    var slideAbout = function() {
        $(".owl-carousel-1").owlCarousel({
            autoplay:true,
            dots:false,
            nav: true,
            margin: 0,
            loop:true,
            items:1,
        });
    };

    var slideTeam = function() {
        $(".owl-carousel-2").owlCarousel({
            autoplay:true,
            dots:false,
            nav: true,
            margin: 30,
            loop:true,
            items:4,
            responsive:{
                0:{
                    items: 1
                },

                479:{
                    items: 2
                },
                768:{
                    items: 2
                },
                991:{
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });
    };

    var slidePartner = function() {
        $(".owl-carousel-3").owlCarousel({
            autoplay:true,
            dots:false,
            nav: false,
            margin: 0,
            loop:true,
            items:6,
            responsive:{
                0:{
                    items: 1
                },
                360:{
                    items: 2
                },

                479:{
                    items: 2
                },
                768:{
                    items: 3
                },
                991:{
                    items: 5
                },
                1200: {
                    items: 6
                }
            }
        });
    };

    var slideServices = function() {
        $(".owl-carousel-4").owlCarousel({
            autoplay:true,
            dots:false,
            nav: true,
            margin: 0,
            loop:true,
            items:1,
        });
    };

    var slideCase = function() {
        $(".owl-carousel-5").owlCarousel({
            autoplay:true,
            dots:false,
            nav: true,
            margin: 0,
            loop:true,
            items:1,
        });
    };

    var slideImagebox = function() {
        $(".owl-carousel-6").owlCarousel({
            autoplay:true,
            dots:false,
            nav: true,
            margin: 30,
            loop:true,
            items:4,
            responsive:{
                0:{
                    items: 1
                },

                479:{
                    items: 1
                },
                768:{
                    items: 2
                },
                991:{
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });
    };

    var filterImagebox = function(){
        var owl = $('.owl-carousel-7').owlCarousel({
            loop    :true,
            margin  :30,
            nav     :false,
            dots    :true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        })
        
        /* animate filter */
        var owlAnimateFilter = function(even) {
            $(this)
            .addClass('__loading')
            .delay(70 * $(this).parent().index())
            .queue(function() {
                $(this).dequeue().removeClass('__loading')
            })
        }

        $('.menu-tab.style1.v2').on('click', '.btn-filter', function(e) {
            var filter_data = $(this).data('filter');

            /* return if current */
            if($(this).hasClass('btn-active')) return;

            /* active current */
            $(this).addClass('btn-active').siblings().removeClass('btn-active');

            /* Filter */
            owl.owlFilter(filter_data, function(_owl) { 
                $(_owl).find('.imagebox.style3').each(owlAnimateFilter); 
            });
        })
    }

    var slideTestimonial = function() {
        $(".owl-carousel-8").owlCarousel({
            autoplay:true,
            dots:true,
            nav: false,
            margin: 30,
            loop:true,
            items:1,
        });
    };

    var filterImagebox_S2 = function(){
        var owl = $('.owl-carousel-9').owlCarousel({
            loop    :true,
            margin  :30,
            nav     :false,
            dots    :false,
            responsive:{
                0:{
                    items: 1
                },
                576:{
                    items: 2
                },
                768:{
                    items: 3
                },
                991:{
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });
        
        /* animate filter */
        var owlAnimateFilter = function(even) {
            $(this)
            .addClass('__loading')
            .delay(70 * $(this).parent().index())
            .queue(function() {
                $(this).dequeue().removeClass('__loading')
            })
        }

        $('.filter-wrap.style2').on('click', '.btn-filter', function(e) {
            var filter_data = $(this).data('filter');

            /* return if current */
            if($(this).hasClass('btn-active')) return;

            /* active current */
            $(this).addClass('btn-active').siblings().removeClass('btn-active');

            /* Filter */
            owl.owlFilter(filter_data, function(_owl) { 
                $(_owl).find('.portfolio-item').each(owlAnimateFilter); 
            });
        })
    };

    var slidePartner_S2 = function() {
        $(".owl-carousel-10").owlCarousel({
            autoplay:true,
            dots:false,
            nav: true,
            margin: 70,
            loop:true,
            items:5,
            responsive:{
                0:{
                    items: 1,
                    margin: 0,
                    nav: false
                },
                360:{
                    items: 2,
                    margin: 30,
                    nav: false
                },
                479:{
                    items: 2,
                    margin: 30,
                    nav: false
                },
                768:{
                    items: 3,
                    nav: false
                },
                991:{
                    items: 4
                },
                1200: {
                    items: 5
                }
            }
        });
    };

    var slideImagebox_S2 = function() {
        $(".owl-carousel-11").owlCarousel({
            autoplay:true,
            dots:false,
            nav: true,
            margin: 30,
            loop:true,
            items:3,
            responsive:{
                0:{
                    items: 1
                },

                479:{
                    items: 2
                },
                768:{
                    items: 2
                },
                991:{
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
        });
    };

    var slideImagebox_S3 = function() {
        $(".owl-carousel-13").owlCarousel({
            autoplay:true,
            dots:false,
            nav: true,
            margin: 30,
            loop:true,
            responsive: true,
            items:3,
            responsive:{
                0:{
                    items: 1
                },

                479:{
                    items: 2
                },
                768:{
                    items: 2
                },
                991:{
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
        });
    };

    var slideImagebox_S4 = function() {
        $(".owl-carousel-14").owlCarousel({
            autoplay:true,
            dots:false,
            nav: true,
            margin: 30,
            loop:true,
            items: 4,
            responsive:{
                0:{
                    items: 1
                },

                479:{
                    items: 2
                },
                768:{
                    items: 2
                },
                991:{
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });
    };

    var slideTestimonial_S2 = function() {
        $(".owl-carousel-15").owlCarousel({
            autoplay:true,
            dots:false,
            nav: false,
            margin: 30,
            loop:true,
            items: 3,
            responsive:{
                0:{
                    items: 1
                },

                479:{
                    items: 2
                },
                768:{
                    items: 2
                },
                991:{
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
        });
    };

    var slidePartner_S3 = function() {
        $(".owl-carousel-16").owlCarousel({
            autoplay:true,
            dots:false,
            nav: false,
            margin: 30,
            loop:true,
            items: 5,
            responsive:{
                0:{
                    items: 1
                },

                479:{
                    items: 2
                },
                768:{
                    items: 3
                },
                991:{
                    items: 4
                },
                1200: {
                    items: 5
                }
            }
        });
    };

    var slideClients = function(){
        if ( $().jCarousel ){
            $('.c').jCarousel({
                type:'slidey-down',
                carsize: {carwidth:600,carheight:400},
            });
        }
    };

    var slideChoose = function(){
        // $('#carousel').flexslider({
        //     animation: "slide",
        //     controlNav: false,
        //     animationLoop: false,
        //     slideshow: false,
        //     itemWidth: 210,
        //     itemMargin: 5,
        //     asNavFor: '#slider'
        // });
         
        $('#slider').flexslider({
            animation: "slide",
            animationLoop: false,
            itemWidth: 387,
            itemMargin: 0,
            minItems: 1,
            maxItems: 3,
            controlNav: false
        });
    }

    var tabAbout = function() {
        $('.wrap-about').each(function() {
        $(this).children('.about-content-tab').children().hide();
        $(this).children('.about-content-tab').children().first().show()
        $(this).find('.tab-about').children('li').on('click', function(){
            var liActive = $(this).index(),
            contentActive = $(this).siblings().removeClass('active').closest('.wrap-about').children('.about-content-tab').children().eq(liActive);
            contentActive.addClass('active').fadeIn("slow");
            contentActive.siblings().removeClass('active');
            $(this).addClass('active').closest('.wrap-about').children('.about-content-tab').children().eq(liActive).siblings().hide();
        });
        });
    }; // Tab About

    var tabListAbout = function() {
        $('.tab-list-about').each(function() {
        $(this).children('.content-tab').children().hide();
        $(this).children('.content-tab').children().first().show()
        $(this).find('.tab-menu').children('li').on('click', function(){
            var liActive = $(this).index(),
            contentActive = $(this).siblings().removeClass('active').closest('.tab-list-about').children('.content-tab').children().eq(liActive);
            contentActive.addClass('active').fadeIn("slow");
            contentActive.siblings().removeClass('active');
            $(this).addClass('active').closest('.tab-list-about').children('.content-tab').children().eq(liActive).siblings().hide();
        });
        });
    }; // Tab List About

    var tabServices = function() {
        $('.wrap-services-1').each(function() {
        $(this).children('.services-content-tab').children().hide();
        $(this).children('.services-content-tab').children().first().show()
        $(this).find('.tab-about').children('li').on('click', function(){
            var liActive = $(this).index(),
            contentActive = $(this).siblings().removeClass('active').closest('.wrap-services-1').children('.services-content-tab').children().eq(liActive);
            contentActive.addClass('active').fadeIn("slow");
            contentActive.siblings().removeClass('active');
            $(this).addClass('active').closest('.wrap-services-1').children('.services-content-tab').children().eq(liActive).siblings().hide();
        });
        });
    }; // Tab About

    var tabServices_s2 = function() {
        $('.tab-services').each(function() {
        $(this).children('.content-tab').children().hide();
        $(this).children('.content-tab').children().first().show()
        $(this).find('.tab-list-services').children('.tab-item').on('click', function(){
            var liActive = $(this).index(),
            contentActive = $(this).siblings().removeClass('active').parents('.tab-services').children('.content-tab').children().eq(liActive);
            contentActive.addClass('active').fadeIn("slow");
            contentActive.siblings().removeClass('active');
            $(this).addClass('active').parents('.tab-services').children('.content-tab').children().eq(liActive).siblings().hide();
        });
        });
    }; // Tab About

    var accordionToggle = function() {
        var speed = {duration: 400};
        $('.toggle-content').hide();
        $('.accordion-toggle .toggle-title.active').siblings('.toggle-content').show();
        $('.accordion').find('.toggle-title').on('click', function() {
            $(this).toggleClass('active');
            $(this).next().slideToggle(speed);
            $(".toggle-content").not($(this).next()).slideUp(speed);
            if ($(this).is('.active')) {
                $(this).closest('.accordion').find('.toggle-title.active').toggleClass('active')
                $(this).toggleClass('active');
            };
        });
    }; // Accordion Toggle

    var showServices = function(){
        var buttonShow = $('.show-services span');
        // $('.flat-services').find('.wrap-services').hide();
        buttonShow.on('click', function() {
            $(this).closest('.flat-services').find('.show-services').toggleClass('show');
            $(this).toggleClass('active');
            $(this).closest('.flat-services').find('.wrap-services').toggleClass('open');
        });
    };

    var portfolioIsotope = function() { 
        if ( $().isotope ) {           
            var $container = $('.wrap-portfolio');
            $container.imagesLoaded(function(){
                $container.isotope({
                    itemSelector: '.ipsotope',
                    transitionDuration: '1s',
                    layoutMode: 'fitRows',
                    masonry: {
                        columnWidth: '.wrap-portfolio'
                    }
                });
            });

            $('.menu-tab li').on('click',function() {                           
                var selector = $(this).attr('data-filter');
                $('.menu-tab li').removeClass('active');
                $(this).addClass('active');
                $container.isotope({ filter: selector });
                return false;
            });            
        };
    }; // Portfolio Isotope

    var ajaxContactForm = function() {  
        $('#contactform').each(function() {
            $(this).validate({
                submitHandler: function( form ) {
                    var $form = $(form),
                        str = $form.serialize(),
                        loading = $('<div />', { 'class': 'loading' });

                    $.ajax({
                        type: "POST",
                        url:  $form.attr('action'),
                        data: str,
                        beforeSend: function () {
                            $form.find('.form-submit').append(loading);
                        },
                        success: function( msg ) {
                            var result, cls;                            
                            if ( msg == 'Success' ) {                                
                                result == 'Message Sent Successfully To Email Administrator. ( You can change the email management a very easy way to get the message of customers in the user manual )';
                                cls == 'msg-success';
                            } else {
                                result == 'Error sending email.';
                                cls == 'msg-error';
                            }

                            $form.prepend(
                                $('<div />', {
                                    'class': 'flat-alert ' + cls,
                                    'text' : result
                                }).append(
                                    $('<a class="close" href="#"><i class="fa fa-close"></i></a>')
                                )
                            );

                            $form.find(':input').not('.submit').val('');
                        },
                        complete: function (xhr, status, error_thrown) {
                            $form.find('.loading').remove();
                        }
                    });
                }
            });
        }); // each contactform
    };  

    var ajaxSubscribe = {
        obj: {
            subscribeEmail    : $('#subscribe-email'),
            subscribeButton   : $('#subscribe-button'),
            subscribeMsg      : $('#subscribe-msg'),
            subscribeContent  : $("#subscribe-content"),
            dataMailchimp     : $('#subscribe-form').attr('data-mailchimp'),
            success_message   : '<div class="notification_ok">Thank you for joining our mailing list! Please check your email for a confirmation link.</div>',
            failure_message   : '<div class="notification_error">Error! <strong>There was a problem processing your submission.</strong></div>',
            noticeError       : '<div class="notification_error">{msg}</div>',
            noticeInfo        : '<div class="notification_error">{msg}</div>',
            basicAction       : 'mail/subscribe.php',
            mailChimpAction   : 'mail/subscribe-mailchimp.php'
        },

        eventLoad: function() {
            var objUse = ajaxSubscribe.obj;

            $(objUse.subscribeButton).on('click', function() {
                if ( window.ajaxCalling ) return;
                var isMailchimp = objUse.dataMailchimp === 'true';

                if ( isMailchimp ) {
                    ajaxSubscribe.ajaxCall(objUse.mailChimpAction);
                } else {
                    ajaxSubscribe.ajaxCall(objUse.basicAction);
                }
            });
        },

        ajaxCall: function (action) {
            window.ajaxCalling = true;
            var objUse = ajaxSubscribe.obj;
            var messageDiv = objUse.subscribeMsg.html('').hide();
            $.ajax({
                url: action,
                type: 'POST',
                dataType: 'json',
                data: {
                   subscribeEmail: objUse.subscribeEmail.val()
                },
                success: function (responseData, textStatus, jqXHR) {
                    if ( responseData.status ) {
                        objUse.subscribeContent.fadeOut(500, function () {
                            messageDiv.html(objUse.success_message).fadeIn(500);
                        });
                    } else {
                        switch (responseData.msg) {
                            case "email-required":
                                messageDiv.html(objUse.noticeError.replace('{msg}','Error! <strong>Email is required.</strong>'));
                                break;
                            case "email-err":
                                messageDiv.html(objUse.noticeError.replace('{msg}','Error! <strong>Email invalid.</strong>'));
                                break;
                            case "duplicate":
                                messageDiv.html(objUse.noticeError.replace('{msg}','Error! <strong>Email is duplicate.</strong>'));
                                break;
                            case "filewrite":
                                messageDiv.html(objUse.noticeInfo.replace('{msg}','Error! <strong>Mail list file is open.</strong>'));
                                break;
                            case "undefined":
                                messageDiv.html(objUse.noticeInfo.replace('{msg}','Error! <strong>undefined error.</strong>'));
                                break;
                            case "api-error":
                                objUse.subscribeContent.fadeOut(500, function () {
                                    messageDiv.html(objUse.failure_message);
                                });
                        }
                        messageDiv.fadeIn(500);
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert('Connection error');
                },
                complete: function (data) {
                    window.ajaxCalling = false;
                }
            });
        }
    };

    var parallax = function() {
        if ( $().parallax && isMobile.any() == null ) {
            $('.parallax1').parallax("50%", 0.5);
            $('.parallax2').parallax("50%", 0.8);
            $('.parallax3').parallax("50%", 0.8);
            $('.parallax4').parallax("50%", 0.5);
            $('.parallax5').parallax("80%", 0.5);
            // $('.parallax6').parallax("50%", 0.5);
            $('.parallax7').parallax("50%", 0.5);
            $('.parallax9').parallax("50%", 0.5);     
        }
    };

    var progressBar = function() {        
        $('.progres-bar').on('on-appear', function() {
            $(this).each(function() {
                $(this).css("overflow", "inherit");
                var percent = $(this).data('percent');                
                $(this).find('.progress-animate').animate({
                    "overflow":"inherit",
                    "width": percent + '%'
                }, $(this).find('.progress-animate').data('duration') );

                $(this).parent('.progress-item').find('.perc').addClass('show').animate({
                    "overflow":"inherit",
                    "width": percent + '%'
                }, $(this).find('.progress-animate').data('duration') );
            });
        });
    }; // Progress Bar

    var counterAbout = function() {      
        if ( $().countTo ) {
            $('.wrap-counter').on('on-appear', function() {
                $(this).find('.numb-count').each(function() {
                    var to = parseInt( $(this).data('to'), 10 ),
                        speed = parseInt( $(this).data('speed'), 10 );
                        
                    $(this).countTo({
                        to: to,
                        speen: speed
                    });
                });
            }); // wrap counter
        };
    }; // Counter About

    var detectViewport = function() {
        $('[data-waypoint-active="yes"]').waypoint(function() {
            $(this).trigger('on-appear');
            }, { offset: '90%', triggerOnce: true });

        $(window).on('load', function() {
            setTimeout(function() {
                $.waypoints('refresh');
            });
        });
    };  

    var googleMap = function() {            
        if ( $().gmap3 ) {  
            $(".map").gmap3({
                map:{
                    options:{
                        zoom: 10,
                        mapTypeId: 'Consulin_style',
                        mapTypeControlOptions: {
                            mapTypeIds: ['Consulin_style', google.maps.MapTypeId.SATELLITE, google.maps.MapTypeId.HYBRID]
                        },
                        scrollwheel: false
                    }
                },
                getlatlng:{
                    address:  $('.flat-maps').data('address'),
                    callback: function(results) {
                        if ( !results ) return;
                        $(this).gmap3('get').setCenter(new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng()));
                        $(this).gmap3({
                            marker:{
                                latLng:results[0].geometry.location,
                                options:{
                                    icon: $('.flat-maps').data('images')
                                }
                            }
                        });
                    }
                },
                styledmaptype:{
                    id: "Consulin_style",
                    options:{
                        name: "Consulin Map"
                    },
                    styles:[
                            {
                                "featureType": "water",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#e9e9e9"
                                    },
                                    {
                                        "lightness": 17
                                    }
                                ]
                            },
                            {
                                "featureType": "landscape",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#f5f5f5"
                                    },
                                    {
                                        "lightness": 20
                                    }
                                ]
                            },
                            {
                                "featureType": "road.highway",
                                "elementType": "geometry.fill",
                                "stylers": [
                                    {
                                        "color": "#ffffff"
                                    },
                                    {
                                        "lightness": 17
                                    }
                                ]
                            },
                            {
                                "featureType": "road.highway",
                                "elementType": "geometry.stroke",
                                "stylers": [
                                    {
                                        "color": "#ffffff"
                                    },
                                    {
                                        "lightness": 29
                                    },
                                    {
                                        "weight": 0.2
                                    }
                                ]
                            },
                            {
                                "featureType": "road.arterial",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#ffffff"
                                    },
                                    {
                                        "lightness": 18
                                    }
                                ]
                            },
                            {
                                "featureType": "road.local",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#ffffff"
                                    },
                                    {
                                        "lightness": 16
                                    }
                                ]
                            },
                            {
                                "featureType": "poi",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#f5f5f5"
                                    },
                                    {
                                        "lightness": 21
                                    }
                                ]
                            },
                            {
                                "featureType": "poi.park",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#dedede"
                                    },
                                    {
                                        "lightness": 21
                                    }
                                ]
                            },
                            {
                                "elementType": "labels.text.stroke",
                                "stylers": [
                                    {
                                        "visibility": "on"
                                    },
                                    {
                                        "color": "#ffffff"
                                    },
                                    {
                                        "lightness": 16
                                    }
                                ]
                            },
                            {
                                "elementType": "labels.text.fill",
                                "stylers": [
                                    {
                                        "saturation": 36
                                    },
                                    {
                                        "color": "#333333"
                                    },
                                    {
                                        "lightness": 40
                                    }
                                ]
                            },
                            {
                                "elementType": "labels.icon",
                                "stylers": [
                                    {
                                        "visibility": "off"
                                    }
                                ]
                            },
                            {
                                "featureType": "transit",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#f2f2f2"
                                    },
                                    {
                                        "lightness": 19
                                    }
                                ]
                            },
                            {
                                "featureType": "administrative",
                                "elementType": "geometry.fill",
                                "stylers": [
                                    {
                                        "color": "#fefefe"
                                    },
                                    {
                                        "lightness": 20
                                    }
                                ]
                            },
                            {
                                "featureType": "administrative",
                                "elementType": "geometry.stroke",
                                "stylers": [
                                    {
                                        "color": "#fefefe"
                                    },
                                    {
                                        "lightness": 17
                                    },
                                    {
                                        "weight": 1.2
                                    }
                                ]
                            }
                        ]
                },  
            });
        }
        $('.map').css( 'height', $('.flat-maps').data('height') );
    };

    var goTop = function() {
        // $(window).scroll(function() {
        //     if ( $(this).scrollTop() > 800 ) {
        //         $('.go-top').addClass('show');
        //     } else {
        //         $('.go-top').removeClass('show');
        //     }
        // }); 

        $('.go-top').on('click', function() {            
            $("html, body").animate({ scrollTop: 0 }, 1000 , 'easeInOutExpo');
            return false;
        });

         // $('.go-top').on('click', function() {
         //    // $(this).parent('body').find('section').hasClass('scroll').first();
         //    $('html, body').animate({
         //        scrollTop: $( $(this).attr('class') ).offset().top - 90
         //    }, 800, 'easeInOutExpo');
         //    return false;
         // });
        //  var i = 0;
        // $('.scroll').each(function(){
        //     var nm = $('.scroll').length;
        //     // $('.go-top').on('click', function(){
        //     //     i++;
        //     // })
        //     $('body').find('.scroll').eq(0).addClass('active');
        //         $('.go-top').on('click', function(){
        //             $(this).parent('.boxed').children('.scroll').eq(0).next('.scroll').addClass('active');
        //             $(this).parent('.boxed').children('.scroll').eq(0).next('.scroll').sibling().removeClass('active');
        //         })
        // });
    }; 
    
    var topSearch = function () {
        $('.show-search i').on('click', function (event) {
            event.stopPropagation();
            $(this).parent('.show-search').next('.top-search').addClass('show');
        });  
        $('body').on('click', function(){
            $('.top-search').removeClass('show');
        });
        $('#searchform-all').on('click', function(event){
            event.stopPropagation();
        });
    };

    var swClick = function () {
        function activeLayout () {
             
            $(".switcher-container" ).on( "click", "a.sw-light", function() {
                $(this).toggleClass( "active" );
                $('body').addClass('home-boxed');  
                $('body').css({'background': '#f6f6f6' });                
                $('.sw-pattern.pattern').css ({ "top": "100%", "opacity": 1, "display": "block",  "z-index": "10"});
            }).on( "click", "a.sw-dark", function() {
                $('.sw-pattern.pattern').css ({ "top": "98%", "opacity": 0, "display": "none", "z-index": "-1"});
                $(this).removeClass('active').addClass('active');
                $('body').removeClass('home-boxed');
                $('body').css({'background': '#fff' });
                return false;
            })       
        }        

        function activePattern () {
            $('.sw-pattern').on('click', function () {
                $('.sw-pattern.pattern a').removeClass('current');
                $(this).addClass('current');
                $('body').css({'background': 'url("' + $(this).data('image') + '")', 'background-size' : '30px 30px', 'background-repeat': 'repeat' });
                return false
            })
        }

        activeLayout(); 
        activePattern();
    }

    var videoPopup =  function() {
        $(".fancybox").on("click", function(){
            $.fancybox({
              href: this.href,
              type: $(this).data("type")
            }); // fancybox
            return false   
        }); // on
    }; // Video Popup

    var carousel_verticle = function() {
        $('.carousel').carousel({
            interval: 5000,
            pause: false
        });
    };

    var particles = function() {
        if ( $().particles ) {
            var count_particles, stats, update;
              stats = new Stats;
              stats.setMode(0);
              stats.domElement.style.position = 'absolute';
              stats.domElement.style.left = '0px';
              stats.domElement.style.top = '0px';
              document.body.appendChild(stats.domElement);
              count_particles = document.querySelector('.js-count-particles');
              update = function() {
                stats.begin();
                stats.end();
                if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
                  // count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
                }
                requestAnimationFrame(update);
              };
              requestAnimationFrame(update);
        }
    }

    var retinaLogos = function() {
      var retina = window.devicePixelRatio > 1 ? true : false;
        if(retina) {
            $('.logo').find('img').attr({src:'./images/logo@2x.png',width:'167',height:'100'}); 
        }

        if(retina) {
            $('#logo-ft').find('img').attr({src:'./images/logo-ft@2x.png',width:'161',height:'100'}); 
        }
    }; 

    var removePreloader = function() {        
        $(window).on("load", function () {
            $(".loader").fadeOut();
            $("#loading-overlay").delay(300).fadeOut('slow',function(){
            $(this).remove();
            }); 
      });
    };

   	// Dom Ready
	$(function() { 
        if ( matchMedia( 'only screen and (min-width: 991px)' ).matches ) {          
            
            headerFixed_s1();
        }
        responsiveMenu();
        portfolioIsotope();
        relatedPost();
        relatedPost_S2();
        slideAbout();
        slideTeam();
        slidePartner();
        slideServices();
        slideCase();
        slideImagebox();
        slideTestimonial();
        slideClients();
        slidePartner_S2();
        filterImagebox_S2();
        slideImagebox_S2();
        slideImagebox_S3();
        slideImagebox_S4();
        slideTestimonial_S2();
        slidePartner_S3();
        slideChoose();
        tabAbout();
        tabListAbout();
        tabServices();
        portfolioIsotope();
        tabServices_s2();
        accordionToggle();
        showServices();
        ajaxSubscribe.eventLoad();
        ajaxContactForm();
        swClick();
        parallax();
        progressBar();
        detectViewport();
        googleMap();       
        goTop();
        topSearch();
        videoPopup();
        counterAbout();
        filterImagebox();
        carousel_verticle();
        particles();
        retinaLogos();
        removePreloader();

   	});

})(jQuery);