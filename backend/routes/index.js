const axios = require("axios");
const express = require("express");
const Promise = require('bluebird');

var router = express.Router();

router.get("/", async function(req, res) {
  let data = {status: "success"}
	res.json(data);
});

router.post("/", function(req, res){
	let data = {status: "success"}
	res.json(data);
});

router.put("/", function(req, res){
	let data = {status: "success"}
	res.json(data);
});

router.delete("/", function(req, res){
	let data = {status: "success"}
	res.json(data);
});

module.exports = router