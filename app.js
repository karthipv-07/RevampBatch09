const express = require('express');
const dotenv = require('dotenv');

const env_value = process.argv[2] || "development";
dotenv.config({ path: `.env.${env_value}` });

const app = express();

function log(message) {
	const time = new Date().toISOString();
	console.log(`[${time} [${env_value.toUpperCase()}] ${message}`);
}
const PORT = process.env.PORT;
const APP = process.env.APP;

app.get('/', (req,res) => {
	res.send("Hello from " + APP);
});

app.get('/health', (req,res) => {
	log("Health check called");
	res.status(200).json({
		status:"UP"
	});
});

app.listen(PORT , () => {
log("Server is running on PORT " + PORT);
});
