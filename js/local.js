jQuery(document).ready(function($){

    const windowResize = function(){
        var wr = document.body.clientWidth;
        if(wr <= 768){
            $('.nav').addClass('mobile');
        }
        else if(wr >= 768){
            $('.nav').removeClass('mobile');
        };
    };
    $(window).resize(function(){
        windowResize();
    });
    
    windowResize();
        
    
    $('.mobileNav__controls').click(function() {
        $(this).toggleClass('active');
        $('.nav.mobile').toggleClass('active');
        $('body').toggleClass('frozen');
    });


    $('.modal_open').click(function(){
        $('#contact_modal').addClass('open');
        // $('body').addClass('frozen');
    });

    
    $('.icon_xClose').click(function(){
        $('#contact_modal').removeClass('open');
        // $('body').removeClass('frozen');
    });

});



