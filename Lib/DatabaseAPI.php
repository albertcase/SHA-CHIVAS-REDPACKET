<?php
namespace Lib;

class DatabaseAPI extends Base {

	private $db;

	public function __construct() {
		$connect = new \mysqli(DBHOST, DBUSER, DBPASS, DBNAME);
		$this->db = $connect;
	}

	public function insertCurio($result) {
		$sql = "INSERT INTO `curio_result` SET `result` = ?";
		$res = $this->db->prepare($sql); 
		$res->bind_param("s", $result);
		if ($res->execute()) {
			return TRUE;
		} else {
			return FALSE;
		}
	}

	public function insertUser($openid) {
		$user = $this->findUserByOpenid($openid);
		if ($user) {
			return $user;
		}
		$sql = "INSERT INTO `chivas_info` SET `openid` = ?";
		$res = $this->db->prepare($sql); 
		$res->bind_param("s", $openid);
		if ($res->execute()) {
			return $this->findUserByOpenid($openid);
		} else {
			return FALSE;
		}
	}

	public function regUser($openid, $nickname, $headimgurl) {
		if ($this->findUserByOauth($openid)) {
			return TRUE;
		}
		$sql = "INSERT INTO `chivas_oauth` SET `openid` = ?, nickname = ?, headimgurl = ?";
		$res = $this->db->prepare($sql); 
		$res->bind_param("sss", $openid, $nickname, $headimgurl);
		if ($res->execute()) {
			return TRUE;
		} else {
			return FALSE;
		}
	}

	public function findUserByOauth($openid) {
		$sql = "SELECT id  FROM `chivas_oauth` WHERE `openid` = ?"; 
		$res = $this->db->prepare($sql);
		$res->bind_param("s", $openid);
		$res->execute();
		$res->bind_result($uid);
		if($res->fetch()) {
			return TRUE;
		}
		return FALSE;
	}

	public function findUserByOpenid($openid) {
		if (isset($_SESSION['user'])) {
			return $_SESSION['user'];
		}
		$sql = "SELECT id, openid, mobile FROM `chivas_info` WHERE `openid` = ?"; 
		$res = $this->db->prepare($sql);
		$res->bind_param("s", $openid);
		$res->execute();
		$res->bind_result($uid, $openid, $mobile);
		if($res->fetch()) {
			$user = new \stdClass();
			$user->uid = $uid;
			$user->openid = $openid;
			$user->lottery = $mobile;
			$user->status = 1;
			$_SESSION['user'] = $user;
			return $user;
		}
		return NULL;
	}

	public function saveSmsLog($uid, $mobile, $code, $lindid, $msg, $send_rs) {
		$sql = "INSERT INTO `chivas_mobile` SET `uid` = ?, `mobile` = ?, code = ?, lindid = ?, msg = ?, send_rs = ?";
		$res = $this->db->prepare($sql); 
		$res->bind_param("ssssss", $uid, $mobile, $code, $lindid, $msg, $send_rs);
		if ($res->execute()) {
			return TRUE;
		} else {
			return FALSE;
		}
	}


}
