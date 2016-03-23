<?php

$routers = array();
$routers['/'] = array('ChivasBundle\Site', 'index');
$routers['/test'] = array('ChivasBundle\Site', 'test');
$routers['/api/test'] = array('ChivasBundle\Api', 'test');
$routers['/api/check'] = array('ChivasBundle\Api', 'check');
$routers['/curio/app'] = array('ChivasBundle\Curio', 'index');
$routers['/curio/oauth'] = array('ChivasBundle\Curio', 'oauth');
$routers['/curio/regoauth'] = array('ChivasBundle\Curio', 'regoauth');
$routers['/curio/regjs'] = array('ChivasBundle\Curio', 'regjs');
$routers['/curio/callback'] = array('ChivasBundle\Curio', 'callback');
$routers['/curio/redirect'] = array('ChivasBundle\Curio', 'redirect');
