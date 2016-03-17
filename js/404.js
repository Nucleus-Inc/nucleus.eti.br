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
    }else{
        $('#logo').attr('src','img/nucleus.png');
        $('.icon-color-dark').each(function(item){
            if(item==0){
                $('.scroll').eq(item).children('span').css('color','lightgray');
            }else{
                $('.scroll').eq(item).children('span').css('color','white');
            }
        });
        $('#divider').css('float','none');
    }
    
    $(window).scroll(function(){
        var height = $(window).scrollTop();
        if(!isMobile){
            if(height >= 50){
                $('.bg-color').css('background-color', 'rgb(35,35,35)');
                $('.topnav').css('margin-top','0');
                $('#logo').attr('src','img/nucleus.png');
                $('.icon-color-dark').each(function(item){
                    if(item==0){
                        $('.scroll').eq(item).children('span').css('color','lightgray');
                    }else{
                        $('.scroll').eq(item).children('span').css('color','white');
                    }
                });
            }else{
                $('#logo').attr('src','img/nucleus-dark.png');
                $('.scroll').eq(0).children('span').css('color','lightgray');
                $('.bg-color').css('background-color', 'transparent');
                $('.topnav').css('margin-top','3px');
                $('.icon-color-dark').each(function(item){
                    if(item==0){
                        $('.scroll').eq(item).children('span').css('color','lightgray');
                    }else{
                        $('.scroll').eq(item).children('span').css('color','rgb(35,35,35)');
                    }
                });
            }
        }
    });
    
    $('.btn-backHome').click(function (event) {
        window.location.assign("http://nucleus.eti.br");
    });
    
    $(document).ready(function(){
        if(!isMobile)
            $('.parallax').scrolly({bgParallax: true});
    });
    
})(jQuery);