//just for coupon page
$(document).ready(function(){

    //load
    gotoPin(0);

    //go to copy taobaokey page
    $('.tmall').on('click',function(){
        gotoPin(1);
    });

    $('.tao-code').on('touchstart touchend', function(e){
        this.setSelectionRange(0,$(this).text().length);
    });
});