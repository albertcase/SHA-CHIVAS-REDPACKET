<?php
namespace ChivasBundle;

use Core\Controller;


class SiteController extends Controller {

	public function indexAction() {		
		$UserAPI = new \Lib\UserAPI();
		$user = $UserAPI->userLoad();
		if ($user) {
			$this->render('site/home', array());
			exit;
		}
	}

	public function couponAction() {	
		$this->render('site/coupon', array());
		exit;
	}
	

}
