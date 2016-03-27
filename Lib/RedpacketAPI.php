<?php
namespace Lib;

class RedpacketAPI extends Base {

    public function sendredpack($openid) {
        $DatabaseAPI = new \Lib\DatabaseAPI();
        $user = $DatabaseAPI->findUserForWechat($openid);
        if (!$user) {
            return false;
        }
        if ($user->status == 1) {
            return false;
        }

        $api_url = "https://api.mch.weixin.qq.com/mmpaymkttransfers/sendredpack";
        $data = array(
            'nonce_str' => $this->randstr(6),
            'mch_billno' => WX_BUSID . date('Ymd') . rand(1000000000,9999999999),
            'mch_id' => WX_BUSID,
            'wxappid' => WX_APPID,
            'send_name' => '芝华士Chivas',
            're_openid' => $openid,
            //'re_openid' => 'o3vWouHPZ73bIf5jyIZ9xea9fEfg',
            //'re_openid' => 'o3vWouBrq-b73OV25cFXhZNboy_k',
            
            'total_amount' => $user->money,
            'total_num' => '1',
            'wishing' => '芝华士祝您大吉大利',
            'client_ip' => '123.59.150.53',
            'act_name' => '芝华士红包',
            'remark' => '恭喜发财大吉大利',
        );
        $data['sign'] = $this->sign($data);
        $postData = '<xml>
        <sign><![CDATA['.$data['sign'].']]></sign>
        <mch_billno><![CDATA['.$data['mch_billno'].']]></mch_billno>
        <mch_id><![CDATA['.$data['mch_id'].']]></mch_id>
        <wxappid><![CDATA['.$data['wxappid'].']]></wxappid>
        <send_name><![CDATA['.$data['send_name'].']]></send_name>
        <re_openid><![CDATA['.$data['re_openid'].']]></re_openid>
        <total_amount><![CDATA['.$data['total_amount'].']]></total_amount>
        <total_num><![CDATA['.$data['total_num'].']]></total_num>
        <wishing><![CDATA['.$data['wishing'].']]></wishing>
        <client_ip><![CDATA['.$data['client_ip'].']]></client_ip>
        <act_name><![CDATA['.$data['act_name'].']]></act_name>
        <remark><![CDATA['.$data['remark'].']]></remark>
        <nonce_str><![CDATA['.$data['nonce_str'].']]></nonce_str>
        </xml>';
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $api_url);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_SSLCERT,'/data/webown/cert/apiclient_cert.pem');
        curl_setopt($ch, CURLOPT_SSLKEY,'/data/webown/cert/apiclient_key.pem'); 
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);
        $return = curl_exec($ch);
        curl_close($ch);
        $DatabaseAPI->updateStatusByUid($user->uid);
        return $DatabaseAPI->redpacketLog($user->uid, $user->openid, $user->money, $data['mch_billno'], $return);
    }

    private function randstr($num = 6) {
        $str = '1234567890abcdefghijklmnopqrstuvwxyz';
        $noncestr = '';
        for ($i = 0; $i < $num; $i++ ) {
            $randval = mt_rand(0, 35);
            $noncestr .= $str[$randval];
        }
        return $noncestr;
    }

    private function sign($data, $key = 'Chivas2016RedPacketsForCampaigns') {
        ksort($data);
        $str = urldecode(http_build_query($data)) . '&key=' . $key;
        return strtoupper(md5($str)); 
    }

    private function curl_post_ssl($url, $vars, $second=30,$aHeader=array())
    {
        $ch = curl_init();
        curl_setopt($ch,CURLOPT_TIMEOUT,$second);
        curl_setopt($ch,CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch,CURLOPT_URL,$url);
        curl_setopt($ch,CURLOPT_SSL_VERIFYPEER,false);
        curl_setopt($ch,CURLOPT_SSL_VERIFYHOST,false);    
        curl_setopt($ch,CURLOPT_SSLCERT,$_SERVER['DOCUMENT_ROOT'].'../../cert/apiclient_cert.pem');
        curl_setopt($ch,CURLOPT_SSLKEY,$_SERVER['DOCUMENT_ROOT'].'../../cert/apiclient_key.pem');      
     
        if( count($aHeader) >= 1 ){
            curl_setopt($ch, CURLOPT_HTTPHEADER, $aHeader);
        }
     
        curl_setopt($ch,CURLOPT_POST, 1);
        curl_setopt($ch,CURLOPT_POSTFIELDS,$vars);
        $data = curl_exec($ch);
        if($data){
            curl_close($ch);
            return $data;
        }
        else { 
            $error = curl_errno($ch);
            echo "call faild, errorCode:$error\n"; 
            curl_close($ch);
            return false;
        }
    }




}
