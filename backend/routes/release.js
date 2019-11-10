const axios = require("axios");
const express = require("express");
const Promise = require('bluebird');

const key = "pLNKxhvSwrcvTZUReVkG";
const secret = "UuodxWguHyovLkXJsMeCbYVvLfeOihcP";

var router = express.Router();

router.get("/", async function(req, res) {
  let data = {status: "success"}
	res.json(data);
});

router.get("/:id", function(req, res){
	axios	
  .get(`https://api.discogs.com/releases/${req.params.id}`, {
  	headers: {
  		"key": key,
  		"secret": secret,
  	}
	})
  .then(response => {
  	let release = response.data;
  	let data = {
			status: "success",
			payload: release,
		} 
		res.json(data); 
	})
  .catch(error => console.log(error));	  
});

router.get("/search/", function(req, res){
	axios	
  .get(`https://api.discogs.com/database/search?q=${req.query.q}`)
  .then(response => {
  	let release = response.data;
  	let data = {
			status: "success",
			payload: release,
		} 
		res.json(data); 
	})
  .catch(error => console.log(error));	  
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