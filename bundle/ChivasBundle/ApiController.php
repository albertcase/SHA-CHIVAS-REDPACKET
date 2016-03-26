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

		if (isset($_SESSION['msg_time']) && time() - $_SESSION['msg_time'] <= 60) {
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
		$_SESSION['msg_time'] = time();
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

		if ($user->status == 1) {
			return $this->statusPrint(5, '您已经领过红包了');
		}

		if ($user->money !=0 && time() - $user->timeint <1800) {
			return $this->statusPrint(6, $user->money);
		}
		$DatabaseAPI = new \Lib\DatabaseAPI();
		$nowMoney = $DatabaseAPI->loadMoney(); 
		if ($nowMoney >= TOTALMONEY) {
			return $this->statusPrint(2, '红包已经发完了');
		}
		//可以领取
		return $this->statusPrint(1, '提交成功');
		
	}
}
