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
	//Pass the variables off as json strings
    res.json({
		top: _.sample(tops),
		jeans: _.sample(jeans),
		shoes: _.sample(shoes)
	});
    res.send("This is working as a server");
})

app.get("/comments/:id", async (req, res) => {
	const id = req.params.id;
	let content;

	try {
		content = await fs.readFile(`data/comments/${id}.txt`, "utf-8");
	} catch (err) {
		return res.sendStatus(404);
	}

	res.json({
		content: content
	});
});

app.listen(3000,()=>console.log("Server is currently running"));

// console.log("Hello world");