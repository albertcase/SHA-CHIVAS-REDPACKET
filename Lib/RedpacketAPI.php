<?php
namespace Lib;

class RedpacketAPI extends Base {

    public function sendredpack($openid) {
        $api_url = "https://api.mch.weixin.qq.com/mmpaymkttransfers/sendredpack";
        $data = array(
            'nonce_str' => $this->randstr(),
            'mch_billno' => '1275055201' . date('Ymd') . rand(1000000000,9999999999),
            'mch_id' => '1275055201',
            'wxappid' => 'wx35a6d476b0dda3ea',
            'send_name' => '芝华士Chivas',
            're_openid' => 'o3vWouHPZ73bIf5jyIZ9xea9fEfg',
            'total_amount' => '212',
            'total_num' => '1',
            'wishing' => '芝华士祝您大吉大利',
            'client_ip' => '123.59.150.53',
            'act_name' => '芝华士现金红包活动',
            'remark' => '快告诉你的小伙伴一起来抢红包吧',
        );
        echo $_SERVER['DOCUMENT_ROOT'];exit;
        $data['sign'] = $this->sign($data);
        $data = curl_post_ssl('https://api.mch.weixin.qq.com/secapi/pay/refund', 'merchantid=1001000');
        print_r($data);
        // $ch = curl_init();
        // // print_r($ch);
        // curl_setopt($ch, CURLOPT_URL, $api_url);
        // curl_setopt($ch, CURLOPT_POST, 1);
        // curl_setopt($ch, CURLOPT_HEADER, 0);
        // curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        // curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
        // $return = curl_exec($ch);
        // curl_close($ch);
        // echo $return;
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
        $str = http_build_query($data) . '&key=' . $key;
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
        curl_setopt($ch,CURLOPT_SSLCERT,getcwd().'/cert.pem');
        curl_setopt($ch,CURLOPT_SSLKEY,getcwd().'/private.pem');      
     
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