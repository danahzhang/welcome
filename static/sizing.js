$(window).on('resize', function() {
    if($(window).width() < 600) {
        $('#body').removeClass('the1200');
        $('#body').addClass('the600');
    }else{
        $('#body').addClass('the1200');
        $('#body').removeClass('the600');}  
    }
)