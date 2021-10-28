var tpj=jQuery;            
var bannerslide;
tpj(document).ready(function() {
    if(tpj("#banner-slide-2").revolution == undefined){
        revslider_showDoubleJqueryError("#banner-slide-2");
    }else{
        bannerslide = tpj("#banner-slide-2").show().revolution({
            sliderType:"standard",
            sliderLayout:"auto",
            dottedOverlay:"none",
            delay:9000,
            navigation: {
                keyboardNavigation:"off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation:"off",
                mouseScrollReverse:"default",
                onHoverStop:"off",
                touch:{
                    touchenabled:"on",
                    swipe_threshold: 75,
                    swipe_min_touches: 1,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                }
                ,
                arrows: {
                    enable: false,
                    style: 'erinyen',
                    tmp: '',
                    rtl: false,
                    hide_onleave: false,
                    hide_onmobile: true,
                    hide_under: 0,
                    hide_over: 9999,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
             
                    left: {
                        container: 'slider',
                        h_align: 'left',
                        v_align: 'center',
                        h_offset: 100,
                        v_offset: 0
                    },
             
                    right: {
                        container: 'slider',
                        h_align: 'right',
                        v_align: 'center',
                        h_offset: 100,
                        v_offset: 0
                    }
                },

                bullets: {
 
                    enable: false,
                    style: 'uranus',
                    tmp: '<span class="tp-bullet-inner"></span>',
                    direction: 'horizontal',
                    rtl: false,
             
                    container: 'slider',
                    h_align: 'center',
                    v_align: 'bottom',
                    h_offset: 0,
                    v_offset: 20,
                    space: 5,
             
                    hide_onleave: false,
                    hide_onmobile: false,
                    hide_under: 0,
                    hide_over: 9999,
                    hide_delay: 200,
                    hide_delay_mobile: 1200
             
                }                         
            },
            viewPort: {
                enable:true,
                outof:"pause",
                visible_area:"80%",
                presize:false
            },
            responsiveLevels:[1240,1024,778,480],
            visibilityLevels:[1240,1024,778,480],
            gridwidth:[1240,1024,778,480],
            gridheight:[1024,900,700,400],
            lazyType:"none",
            parallax: {
                type:"mouse",
                origo:"slidercenter",
                speed:2000,
                levels:[2,3,4,5,6,7,12,16,10,50,46,47,48,49,50,55],
                type:"mouse",
            },
            shadow:0,
            spinner:"off",
            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle:"off",
            autoHeight:"off",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
                simplifyAll:"off",
                nextSlideOnWindowFocus:"off",
                disableFocusListener:false,
            }
        });
    }
}); /*ready*/