(function($) {
    
    $('.scroll').eq(0).children('span').css('color','lightgray');
    var isMobile = true;
    var display = $('.show-mobile').css('display');
    if(display == 'none')
        isMobile = false;
    
    var show = true;
    
    if(!isMobile){
        $('.topnav').css('margin-top','3px');
        $('#introHeader').css('opacity','1.0');
    }
    
    $(".scroll").click(function (event) {
        event.preventDefault();
        var idElemento = $(this).attr("href");
        $(this).children('span').css('color','lightgray');
        last = this;
        var deslocamento = $(idElemento).offset().top;
        $('html, body').animate({ scrollTop: deslocamento }, 'slow');
        $('.navbar-toggle').click();
    });
    
    var opacity = 1.0;
    var factor = 0.02;
    var scrollDown;
    var bkp = 0;
    var lastItem = -1;
    
    $(window).scroll(function(){
        
        var height = $(window).scrollTop();
        
        if(height > bkp)
            scrollDown = true;
        else
            scrollDown = false;
        bkp = height;
        
        if(!isMobile){
            
            if(height >= 50){
                
                $('.bg-color').css('background-color', 'rgb(35,35,35)');
                $('.topnav').css('margin-top','0');
                $('#introHeader').css('opacity','0.85');
                if(scrollDown){
                    if(height < 230)
                        opacity -= factor;
                    else
                        opacity = 0;
                }else{
                    if(opacity!=0)
                        opacity += factor;
                    else
                        opacity = 0.2;
                }
                $('.headerTxt').css('opacity',opacity);
                show = true;
            
                $('.anchor').each(function(item){
                    if ($(this).position().top <= height+340) {
                        if(lastItem!=-1){
                            $('.scroll').eq(lastItem).children('span').css('color','white');
                        }
                        lastItem = item;
                        $('.scroll').eq(item).children('span').css('color','lightgray');
                    }
                });
                
            }else{
                $('.scroll').eq(0).children('span').css('color','lightgray');
                $('.bg-color').css('background-color', 'transparent');
                $('.topnav').css('margin-top','3px');
                $('#introHeader').css('opacity','1.0');
                if(!scrollDown)
                    opacity = 1.0
                $('.headerTxt').css('opacity',opacity);
            }
        }
    });
    
    $(document).ready(function(){
        if(!isMobile)
            $('.parallax').scrolly({bgParallax: true});
    });
    
})(jQuery);