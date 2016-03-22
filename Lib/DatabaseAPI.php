<?php
namespace Lib;

class DatabaseAPI extends Base {

	private $db;

	public function __construct(){
		$connect = new \mysqli(DBHOST, DBUSER, DBPASS, DBNAME);
		$this->db = $connect;
	}

	public function insertCurio($result){
		$sql = "INSERT INTO `curio_result` SET `result` = ?";
		$res = $this->db->prepare($sql); 
		$res->bind_param("s", $result);
		if ($res->execute()) {
			return TRUE;
		} else {
			return FALSE;
		}
	}


}
