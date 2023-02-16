const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const _ = require("lodash");
const { v4: uuid } = require("uuid");

const app = express();

app.get("/outfit",(req,res)=>{
    const tops = ["Black", "White", "Orange", "Navy"];
	const jeans = ["Grey", "Dark Grey", "Black", "Navy"];
	const shoes = ["White", "Grey", "Black"];

	res.json({
		top: _.sample(tops),
		jeans: _.sample(jeans),
		shoes: _.sample(shoes)
	});   
    
    res.send("This is working as a server");
})

app.listen(3000,()=>console.log("Server is currently running"));

// console.log("Hello world");