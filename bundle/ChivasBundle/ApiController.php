<?php
namespace ChivasBundle;

use Core\Controller;


class ApiController extends Controller {

	public function testAction() {
		return $this->dataPrint(array('code'=>1, 'msg'=>'123'));
	}

	public function checkAction() {
		$request = $this->Request();
		$fields = array(
			'mobile' => array('mobile', '2'),
		);
		$request->validation($fields);
		$mobile = $request->query->get('mobile');

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
