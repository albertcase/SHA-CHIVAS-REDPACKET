<?php

$routers = array();
$routers['/'] = array('ChivasBundle\Site', 'index');
$routers['/test'] = array('ChivasBundle\Site', 'test');
$routers['/api/test'] = array('ChivasBundle\Api', 'test');
$routers['/curio/app'] = array('ChivasBundle\Curio', 'index');
$routers['/curio/oauth'] = array('ChivasBundle\Curio', 'oauth');
// $routers['/wechat/ws/api'] = array('WechatBundle\Api', 'reply');
// $routers['/wechat/ws/test/%/aa/%'] = array('WechatBundle\Api', 'test');
// $routers['/wechat/ws/oauth2'] = array('WechatBundle\WebService', 'oauth');
// $routers['/wechat/ws/callback'] = array('WechatBundle\WebService', 'callback');
// $routers['/wechat/ws/jssdk/config/webservice'] = array('WechatBundle\WebService', 'jssdkConfigWebService');
// $routers['/wechat/ws/jssdk/config/js'] = array('WechatBundle\WebService', 'jssdkConfigJs');

