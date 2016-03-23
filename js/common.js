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

;(function(){
	var ua = navigator.userAgent.toLowerCase();
	var Common = {
		isWx:function(){
			return (/micromessenger/.test(ua)) ? true:false;
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


	};

	//alert(Common.isWx());

	this.Common = Common;

}).call(this);
