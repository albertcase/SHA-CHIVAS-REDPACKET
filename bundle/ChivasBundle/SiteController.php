<?php
namespace ChivasBundle;

use Core\Controller;


class SiteController extends Controller {

	public function indexAction() {		
		$this->render('site/index', array());
		exit;
	}

	public function callbackAction() {		
		$this->render('site/index', array());
		exit;
	}
	

}
