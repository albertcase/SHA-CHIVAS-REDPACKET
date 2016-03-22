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
	var $pin = $('.wrap .pin');
	$pin.removeClass('current').eq(i).addClass('current');
}

$(document).ready(function($){

	//preload page0
	var baseurl = "";
	var imagesArray = [
		'../images/logo.png',
	];
	new preLoader(imagesArray, {
		onProgress: function(){

		},
		onComplete: function(){
			$('.preloading').remove();
		}
	})




});
