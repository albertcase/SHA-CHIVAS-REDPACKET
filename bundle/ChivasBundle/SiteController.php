<?php
namespace ChivasBundle;

use Core\Controller;


class SiteController extends Controller {

	public function indexAction() {		
		$UserAPI = new \Lib\UserAPI();
		$user = $UserAPI->userLoad(true);
		if (!$user) {
			$parameterAry = $_GET;
			if(count($parameterAry)>0)
				$url = "/?".http_build_query($parameterAry);
			else
				$url = "/";
			$_SESSION['redirect_url'] = $url;
			$WechatAPI = new \Lib\WechatAPI();
			$WechatAPI->wechatAuthorize();
		}
		$this->render('site/home', array());
		exit;
	}

	public function couponAction() {	
		$this->render('site/coupon', array());
		exit;
	}
	

}
