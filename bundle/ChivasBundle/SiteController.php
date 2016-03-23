<?php
namespace ChivasBundle;

use Core\Controller;


class SiteController extends Controller {

	public function indexAction() {		
		$UserAPI = new \Lib\UserAPI();
		$user = $UserAPI->userLoad();
		if ($user) {
			echo $user->openid;
			exit;
		}
		echo 2;exit;
	}

	public function callbackAction() {		
		$this->render('site/index', array());
		exit;
	}
	

}
