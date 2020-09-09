$(window).on('resize', function() {
    if($(window).width() > 600) {
        $('#body').addClass('the600');
        $('#body').removeClass('the1200');
        console.log("aa");
    }else{
        $('#body').addClass('the1200');
        $('#body').removeClass('the600');}  
        console.log("bb");
    }
)
