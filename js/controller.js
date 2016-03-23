//redpacket
;(function(){
    'use strict';
    var controller = function(){
        this.curPage = 0;
        this.selectedColor = '';
    };
    controller.prototype = {
        init:function(){
            //loading all the resourse, such as css,js,image
            var self = this;
            //    loading first
            $('.loading-wrap').addClass('show');
            var baseurl = '..';
            var imagesArray = [
                baseurl + '/images/logo.png'
            ];
            var i = 0;
            new preLoader(imagesArray, {
                onProgress: function(){

                },
                onComplete: function(){
                    //remove the loading and show the age tips
                    $('.preloading').remove(1000);
                    $('.tips-pop').removeClass('hide').addClass('fade animate');
                    //gotoPin(2);
                    self.formValidate();
                    //	if your age is above 18
                    $('.btn-tips').on('click',function(e){
                        if($(this).hasClass('btn-tips-yes')){
                            //	yes, go to page1
                            $('.tips-pop').addClass('hide');
                            gotoPin(0);
                        }else{
                            //no,refresh the page
                            window.location.reload();
                        }
                    });

                    //	open the redpacket
                    $('.btn-open').on('click',function(){
                        gotoPin(1);
                        self.formValidate();
                    });


                }
            })
        },
        formValidate:function(){
            var self = this;

            $('.btn-getkeycode').on('click',function(e){
                e.preventDefault();
                if($('.countdown').length>0) return;
                if(self.formMobile()){
                    //    start to get keycode
                    console.log('validate phone number');
                    self.countDown();
                };
            });
            $('.pin-2 .btn-submit').on('click',function(){
                gotoPin(2);
                //if(self.formKeycode()){
                //    //    start to get keycode
                //    var phonenumber = $('.input-phone').val();
                //    var keycode = $('.input-keycode').val();
                //    console.log(phonenumber+'phonenumber'+keycode);
                //    gotoPin(2);
                //};
            });
            //show the privacy pop
            $('.privacy-term').on('click',function(){
                $('.term-pop').removeClass('hide').addClass('animate fade');
            });

        //    close the pop
            self.closePop();
            self.toMoneyPage();
        },
        countDown:function(){
            var countdownTime = 9;
            var countdownline = setInterval(function(){
                countdownTime--;
                $('.btn-getkeycode').addClass('countdown').html(countdownTime);
                if(countdownTime<=0){
                    clearInterval(countdownline);
                    $('.btn-getkeycode').removeClass('countdown').html('');
                }
            },1000);


        },
        closePop:function(){
            $('.btn-close').on('click', function(){
                $(this).parent().addClass('hide');
            })
        },
        toMoneyPage:function(){
            var self = this;
            //    close the pop
            self.closePop();
            $('.btn-get').on('click', function(){
               $('.qrcode-pop').removeClass('hide').addClass('animate fade');
            });
            $('.btn-share').on('click',function(){
                $('.share-pop').removeClass('hide').addClass('animate fade');
            });
        },
        formMobile:function(){
            var validate = true;
            if(!$('.input-phone').val()){
                Common.errorMsg.add($('.input-phone').parent(),'手机号码不能为空');
                validate = false;
            }else{
                var reg=/^1\d{10}$/;
                if(!(reg.test($('.input-phone').val()))){
                    validate = false;
                    Common.errorMsg.add($('.input-phone').parent(),'手机号格式错误，请重新输入');
                }else{
                    Common.errorMsg.remove($('.input-phone').parent());
                }

            }

            if(validate){
                return true;
            }else{
                return false;
            }
        },
        formKeycode:function(){
            var validate = true;
            if(!$('.input-phone').val()){
                Common.errorMsg.add($('.input-phone').parent(),'手机号码不能为空');
                validate = false;
            }else{
                var reg=/^1\d{10}$/;
                if(!(reg.test($('.input-phone').val()))){
                    validate = false;
                    Common.errorMsg.add($('.input-phone').parent(),'手机号格式错误，请重新输入');
                }else{
                    Common.errorMsg.remove($('.input-phone').parent());
                }
            }
            //for keycode
            if(!$('.input-keycode').val()){
                Common.errorMsg.add($('.input-keycode').parent(),'验证码不能为空');
                validate = false;
            }else{
                Common.errorMsg.remove($('.input-keycode').parent());
            }

            if(validate){
                return true;
            }else{
                return false;
            }
        }


    };

    if (typeof define === 'function' && define.amd){
        // we have an AMD loader.
        define(function(){
            return controller;
        });
    }
    else {
        this.controller = controller;
    }


}).call(this);

$(document).ready(function($){
    //load for home page
    var redpacket = new controller();
    redpacket.init();
});