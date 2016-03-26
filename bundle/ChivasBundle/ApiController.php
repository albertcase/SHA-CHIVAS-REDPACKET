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

		if (isset($_SESSION['msg_code']) && time() - $_SESSION['msg_code'] <= 60) {
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
		$_SESSION['msg_code'] = time();
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
		return $this->statusPrint(1, '提交成功');
		
	}
}
