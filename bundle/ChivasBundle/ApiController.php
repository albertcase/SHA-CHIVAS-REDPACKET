<?php
namespace ChivasBundle;

use Core\Controller;


class ApiController extends Controller {

	public function testAction() {
		$redpacket = new \Lib\RedpacketAPI();
		$redpacket->sendredpack(123);
		exit;
	}

	public function checkAction() {
		$UserAPI = new \Lib\UserAPI();
		$user = $UserAPI->userLoad(true);
		if (!$user) {
			return $this->statusPrint(0, '未登录');
		}

		if (isset($_SESSION['msg_time']) && NOWTIME - $_SESSION['msg_time'] <= 60) {
			return $this->statusPrint(3, '短信已经发出');
		}
		$request = $this->Request();
		$fields = array(
			'mobile' => array('mobile', '2'),
		);
		$request->validation($fields);
		$mobile = $request->request->get('mobile');
		$sms = new \Lib\SmsAPI();
		$code = $sms->sendMessage($user->uid, $mobile);
		$_SESSION['msg_time'] = NOWTIME;
		$_SESSION['msg_code'] = $code;
		return $this->statusPrint(1, '提交成功');
	}


	public function submitAction() {
		$UserAPI = new \Lib\UserAPI();
		$user = $UserAPI->userLoad(true);
		if (!$user) {
			return $this->statusPrint(0, '未登录');
		}

		if (!isset($_SESSION['msg_code'])) {
			return $this->statusPrint(3, '请先请求验证码');
		}
		$request = $this->Request();
		$fields = array(
			'mobile' => array('mobile', '3'),
			'code' => array('notnull', '3'),
		);
		$request->validation($fields);
		$mobile = $request->request->get('mobile');
		$code = $request->request->get('code');
		if ($code != $_SESSION['msg_code']) {
			return $this->statusPrint(4, '验证码不正确');
		}

		if (($user->money !=0) && ($user->timeint!=0) && (NOWTIME - $user->timeint <1800)) {
			echo "<pre>";
			print_r($user);exit;
			return $this->statusPrint(6, $user->money);
		}

		$DatabaseAPI = new \Lib\DatabaseAPI();

		if ($DatabaseAPI->loadStatusByUid($user->uid) == 1) {
			return $this->statusPrint(5, '您已经领过红包了');
		}
		$nowMoney = $DatabaseAPI->loadMoney(); 
		if ($nowMoney >= TOTALMONEY) {
			return $this->statusPrint(2, '红包已经发完了');
		}

		//可以领取
		$rand = rand(1,2);
		if ($rand == 1) {
			//发1.88
			$money = 188;		
		} else {
			//发2.12
			$money = 212;
		}
		if ($DatabaseAPI->saveMoney($user->uid, $mobile, $money, NOWTIME)) {
			$user->money = $money;
			$user->timeint = NOWTIME;
			return $this->statusPrint(1, $money);
		}
		return $this->statusPrint(999, '服务器繁忙，请稍候再试');
		
	}
}
