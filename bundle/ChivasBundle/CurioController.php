<?php
namespace ChivasBundle;

use Core\Controller;


class CurioController extends Controller {

	public function indexAction() {		
		$client_id = 'de840778-be0a-47d2-a0a1-0334f7b85577';
		$client_secret = '49228f94-f293-4a0f-a3bb-a981e15885cf';
		$oauth_url = 'http://extra.chivas.com.cn/curio/oauth';
		$redirectUrl= 'http://curio.im/oapi/authorize?redirect_uri='. $oauth_url. '&client_id='. $client_id.
			'&response_type=code';
		$this->redirect($redirectUrl);
		exit;
	}

	public function oauthAction() {		
		$client_id = 'de840778-be0a-47d2-a0a1-0334f7b85577';
		$client_secret = '49228f94-f293-4a0f-a3bb-a981e15885cf';
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
