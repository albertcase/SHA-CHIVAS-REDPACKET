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
		$request = $this->Request();
		$fields = array(
			'mobile' => array('mobile', '2'),
		);
		$request->validation($fields);
		$mobile = $request->query->get('mobile');
		$sms = new \Lib\SmsAPI();
		$sms->sendMessage($mobile);
		return $this->statusPrint(1, '提交成功');
	}


	public function subAction() {
		$request = $this->Request();
		$fields = array(
			'mobile' => array('mobile', '2'),
			'code' => array('notnull', '3'),
		);
		$request->validation($fields);
		$mobile = $request->query->get('mobile');
		
	}
}
