<?php
namespace Lib;

class SmsAPI extends Base {

    public function sendMessage($message){
        $code = rand(100000,999999);
        $ws = "http://webservice.smsadmin.cn/SGIP/SGIPService.php?wsdl";
        //接口地址 
        $client = new SoapClient($ws);
        //远程调用
        $uid = '众异市场';
        $pwd = 'samesame123';
        $msg = "验证码" . $code . "，请在30分钟内填写，且勿向任何人提供您收到的短信校验码。【芝华士】";
        $lindid = "Chivas".date("YmdHis");
        $dtime = '';
        $char = 'utf-8';
        $uid = urlencode($uid);
        $msg = urlencode($msg);
        $send_rs = $client->sendSms($uid, $pwd, $mobile, $msg, $lindid, $dtime, $char);
    }

}