<?php
namespace ChivasBundle;

use Core\Controller;


class CurioController extends Controller {

	public function indexAction() {		
		$client_id = 'd8a62e3e6a33765ebc619af92315d396';
		$client_secret = 'b268f96a8b9bb28f79f8a158b7dae297';
		$oauth_url = 'http://extra.chivas.com.cn/curio/oauth';
		$redirectUrl= 'http://curio.im/oapi/authorize?redirect_uri='. $oauth_url. '&client_id='. $client_id.
			'&response_type=code';
		$this->redirect($redirectUrl);
		exit;
	}

	public function oauthAction() {		
		$client_id = 'd8a62e3e6a33765ebc619af92315d396';
		$client_secret = 'b268f96a8b9bb28f79f8a158b7dae297';
		$oauth_url = 'http://extra.chivas.com.cn/curio/oauth';

		$request = $this->Request();
		$fields = array(
			'code' => array('notnull', '110'),
		);
		$request->validation($fields);
		$code = $request->query->get('code');
		$requestUrl = 'http://curio.im/oapi/access_token?client_id='. $client_id. '&client_secret='. $client_secret.
			'&redirect_uri='. $oauth_url. '&grant_type=authorization_code&code='. $code;
		echo $result = file_get_contents($requestUrl);
		$databaseAPI = new \Lib\DatabaseAPI();
		var_dump($databaseAPI->insertCurio($result));
		exit;
	}
	

}
