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
                    //i++;
                    //var progress = parseInt(i/imagesArray.length*100);
                    //$('.loading-progress').html('Loading...'+progress+'%');
                },
                onComplete: function(){
                    //remove the loading and show the age tips
                    $('.preloading').remove(1000);
                    //$('.tips-pop').removeClass('hide').addClass('fade animate');
                    gotoPin(2);
                    self.toMoneyPage();
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
                if(Common.formMobile()){
                    //    start to get keycode
                    console.log('validate phone number');
                };
            });
            $('.pin-2 .btn-submit').on('click',function(){
                gotoPin(2);
                //if(Common.formKeycode()){
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