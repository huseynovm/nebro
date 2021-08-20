/* Preload */
$("#preload").animate({left: 0},1500,function(){
    $("#loading-area").hide(100)
    $("#left-side").animate({left: '-50%'},1000)
    $("#right-side").animate({left: '100%'},1000,function(){
    $("#preload").hide()
    })
})
/* Navbar */
        let flag = true;
        $("#nav-icon").click(function(){
            $(document).show();
            if(flag){
                $("#nav-icon>span:last").css('width', '100%')
                $("#nav-icon>span:odd").animate({opacity: 0},50);
                $("#nav-icon>span:last").animate({deg: 45},{duration: 300,
                    step: function(now) {
                        $(this).css({ transform: 'rotate(' + now + 'deg)' });
                    }
                });
                $("#nav-icon>span:first").animate({deg: -45},{duration: 300,step: function(now) {
                        width:'100%',
                        $(this).css({ transform: 'rotate(' + now + 'deg)' });
                        $("#nav-icon>span:first").css({ top: 7});
                        $("#nav-icon>span:last").css({ top: 7});
                    }
                });
            }else{
                $("#nav-icon>span:last").animate({deg: 0},{duration: 100, step: function(now) {
                        $(this).css({ transform: 'rotate(' + now + 'deg)' });
                    }
                });
                $("#nav-icon>span:first").animate({deg: 0},{duration: 100,step: function(now) {
                        width:'100%',
                        $(this).css({ transform: 'rotate(' + now + 'deg)'});
                    }
                }
                );
                $("#nav-icon>span:last").animate({ top: 14},100);
                $("#nav-icon>span:first").animate({ top: 0},100);
                $("#nav-icon>span:odd").animate({ opacity: 1});

                }
                $("ul").slideToggle("slow")
            flag = !flag;
        })
        $("header li a").click(function(){
        $("header li a").removeClass('acctive')
        $(this).addClass('acctive')
    })
/* Slider */
    let path = 'https://thetav.online/html/nebro/main/img/slider-'
    let images = ['4.jpg', '3.jpg', '2.jpg', '1.jpg']
    let titleText3 = ["More than an agency in", "Don't give up", "Hurry up let's", "Don't make"]
    let titleText1 = ["Digital Age.", "To Fight.", "Stand Up.", "Them Think."]
    let x = 0;
    $("header").css({
        background: 'url(' + path + images[x] +')'
    })
    if($(document).width()>768) $("header").append('<div id="thumb"></div>');
    $("#thumb").css({
        position: 'absolute',
        display: 'flex',
        bottom: '30px',
        left: '30px',
        'z-index': 2
    })
    images.forEach(img => $("#thumb").append('<img src="' + path + img + '" />'))
    $("#thumb>img")
        .css({
            width: '35px',
            height: '35px',
            'box-sizing': 'content-box',
            'border-radius': '50%',
            margin: '0 10px',
            cursor: 'pointer',
            background: '#fff'
        })
        .click(function(){
            x = $(this).index()
            $("#thumb.div").eq(x).css('border', '3px solid #ff0e2a')
            change(1)
        })
        $("header")
        .css('backround', 'url(' + path + images[x] + ') center/cover')
        .prepend('<div id="slide"></div')
        .click(function(e){
                if(($(window).width() < 768) && flag && (e.pageY > 70 ) && (e.pageX > $(window).width() / 2 )) {
                    x++;
                    change(1);
                }
        })
    $("#slide").css({
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0, 
        left: $(window).width(),
    }) 
    $("#thumb>img").eq(x).css('border', '3px solid #ff0e2a')
    function change(d){
        if ( x > images.length - 1) x = 0;
        if ( x < 0 ) x = images.length - 1;
        $("#slider-content>h3,#slider-content>h1,#slider-content>button").animate({left: '-100px', opacity: 0},"fast",function(){
            $("#slider-content>h3,#slider-content>h1,#slider-content>button").css({left: '100px'})
        })
        $("#slide")
            .css({
                left: d * $("header").width(),
                background: 'url(' + path + images[x] + ') center/cover'
            })
            .animate({
                left: 0
            },500,function(){
                $("header").css('background', 'url(' + path + images[x] + ') center/cover')
                $("#thumb>img").css('border', 'none')
                $("#thumb>img").eq(x).css('border', '3px solid #ff0e2a')
                $("#slider-content>h3")
                    .text(titleText3[x])
                    .animate({left: 0, opacity: 1},"fast")
                $("#slider-content>h1")
                    .css({ 'white-space': 'nowrap'})
                    .text(titleText1[x])
                    .animate({left: 0, opacity: 1},"normal")
                $("#slider-content>button")
                    .animate({left: 0, opacity: 1},"slow")
            })
    }
    $(window).scroll(function() {				
        let scroll = $(window).scrollTop();
        let homeheight = $("header").height() -30;			
        if (scroll > homeheight ) {        
            $("nav").addClass('fixed')
            $("nav>ul").css('padding',' 0 60px')
        }else{
            $("nav").removeClass('fixed')
            $("nav>ul").css('padding','inherit')
        }
    })
/* Counter */
$(window).scroll(function() {				
    var scroll = $(window).scrollTop();
    var homeheight = $("#services").height();			
    if (scroll > homeheight + 600 ) {												
        $(".counter-value").each(function(){
            $(this)
                .prop("Counter", 0).animate(
            {   
                    Counter: $(this).attr("data-finish"),
            },
            {
                duration: Number($(this).attr("data-time")),
                easing: "linear",
                step: function(now){
                    $(this).text(Math.ceil(now));
                },                     
            })
        })        
    }
}); 
/* Carusel */
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1
        },
        767: {
            items: 1
        },
        1024: {
            items: 3
        }
    }
})
/* Newsletter */
$("#newsletter .one")
    .hover(function(){
        $(this).css('background', 'url(	https://thetav.online/html/nebro/main/img/news-1.jpg) center/cover')
        $(this).text('')
    })
    .mouseleave(function(){
        $(this).css('background', '#292B2C')
        $(this).html('<i>23</i><span>MARCH,19</span><h4>LIFESTYLE</h4><p>Curiosity continual belonging offending so explained it exquisite...</p>')
    })
$("#newsletter .two")
    .hover(function(){
        $(this).css('background', 'url(https://thetav.online/html/nebro/main/img/news-2.jpg) center/cover')
        $(this).text('')
    })
    .mouseleave(function(){
        $(this).css('background', '#292B2C')
        $(this).html('<i>26</i><span>MARCH,19</span><h4>DESIGN</h4><p>Friendly as stronger speedily by recurred. Son interest wandered...</p>')
    })
$("#newsletter .three")
    .hover(function(){
        $(this).css('background', 'url(https://thetav.online/html/nebro/main/img/news-3.jpg) center/cover')
        $(this).text('')
    })
    .mouseleave(function(){
        $(this).css('background', '#292B2C')
        $(this).html('<i>18</i><span>MARCH,19</span><h4>PHOTOGRAPHY</h4><p>Manners beloved affixed picture men ask. Explain few led parties...</p>')
    })
/* Smooth Slider */
$(function(){
    var $slidee = $('.slidee');
    var sizeImage = 200;
    var imglenth = $slidee.children().length;
    var imglenthwidth = (imglenth * sizeImage);
    $slidee.css('width',imglenthwidth);
    
    var rotating = true;
    var timer = setInterval(rotateSlider, 0);
    
    function rotateSlider() {
      if(rotating == true) {
        var $first = $('.slidee .itemm:first');
        $first.animate({ 'margin-left': '-'+sizeImage+'px' }, 3000, "linear", function() {
          $first.remove().css({ 'margin-left': '0px' });
          $('.slidee .itemm:last').after($first);
        });
      }else{
        $first.stop();
      }
    }
  });
