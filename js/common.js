//just for test
//var CANSHAKE = '1';
//var lotteryList = {
//	code:'1',
//	msg:[1,2,3]
//}

function addCard(i) {
	wx.addCard({
		cardList: [{
			cardId: cardListJSON[i-1].cardId,
			cardExt: '{"timestamp":"'+cardListJSON[i-1].cardExt.timestamp+'","signature":"'+cardListJSON[i-1].cardExt.signature+'"}'
		}],
		success: function(res) {
			var cardList = res.cardList;
			//alert(JSON.stringfiy(res));
		},
		fail: function(res) {
			//alert(JSON.stringfiy(res));
		},
		complete: function(res) {
			//alert(JSON.stringfiy(res));
		},
		cancel: function(res) {
			//alert(JSON.stringfiy(res));
		},
		trigger: function(res) {
			//alert(JSON.stringfiy(res));
		}
	});

};

function gotoPin(i) {
	var $pin = $('.wrapper .pin');
	$pin.removeClass('current').eq(i).addClass('current');
}


$(document).ready(function($){

	//preload page0
	//var baseurl = "";
	//var imagesArray = [
	//	'../images/logo.png',
	//];
	//new preLoader(imagesArray, {
	//	onProgress: function(){
    //
	//	},
	//	onComplete: function(){
	//		$('.preloading').remove();
	//		//RedPacket.init();
	//		//gotoPin(1);
	//		//$('.tips-pop').removeClass('hide').addClass('fade animate');
	//	}
	//});
	//var Common = {
	//	formMobile:function(){
	//		var validate = true;
	//		if(!$('.input-phone').val()){
	//			Common.errorMsg.add($('.input-phone').parent(),'手机号码不能为空');
	//			validate = false;
	//		}else{
	//			var reg=/^1\d{10}$/;
	//			if(!(reg.test($('.input-phone').val()))){
	//				validate = false;
	//				Common.errorMsg.add($('.input-phone').parent(),'手机号格式错误，请重新输入');
	//			}else{
	//				Common.errorMsg.remove($('.input-phone').parent());
	//			}
    //
	//		}
    //
	//		if(validate){
	//			return true;
	//		}else{
	//			return false;
	//		}
	//	}
	//}
	var redpacket = new controller();
	redpacket.init();



//	all bind event


});

;(function(){
	var ua = navigator.userAgent.toLowerCase();
	var Common = {
		isWx:function(){
			return (/micromessenger/.test(ua)) ? true:false;
		},
		isTecenVideo:function(){

		},
		islmbang:function(){
			return (/lmbang/.test(ua)) ? true:false;
		},
		errorMsg : {
			add:function(ele,msg){
				if(!ele.find('.error').length){
					ele.append('<div class="error">'+msg+'</div>');
				}else{
					ele.find('.error').html(msg);
				}
			},
			remove:function(ele){
				if(ele.find('.error').length){
					ele.find('.error').remove();
				}
			}
		},
		msgBox:function(msg,long){
			if(long){
				$('body').append('<div class="ajaxpop msgbox minwidthbox"><div class="loading">'+msg+'</div></div>');
			}else{
				$('body').append('<div class="ajaxpop msgbox"><div class="loading">'+msg+'</div></div>');
			}
		},
		formAddress:function(){
			var validate = true;
			if(!$('.input-name').val()){
				Common.errorMsg.add($('.input-name').parent(),'姓名不能为空');
				validate = false;
			}else{
				Common.errorMsg.remove($('.input-name').parent());
			}

			if(!$('.input-address').val()){
				Common.errorMsg.add($('.input-address').parent(),'地址不能为空');
				validate = false;
			}else{
				Common.errorMsg.remove($('.input-address').parent());
			}

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
		},
		selectPhase:function(){
			var userSelection;
			if (window.getSelection) { //现代浏览器
				userSelection = window.getSelection();
			} else if (document.selection) { //IE浏览器 考虑到Opera，应该放在后面
				userSelection = document.selection.createRange();
			}
			console.log(userSelection);
			//if (userSelection.getRangeAt) {
			//	alert(userSelection.getRangeAt(0));
			//} else {
			//	alert("当前浏览器不支持getRangeAt");
			//}
		}

	};

	//alert(Common.isWx());

	this.Common = Common;

}).call(this);
