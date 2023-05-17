import express from 'express'
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cardSchema from './model/cardSchema.js';
import bodyParser from 'body-parser';

// App configure
const app = express();
const port = process.env.DB_port || 8001;
 dotenv.config()
 app.use(bodyParser.json())


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})

// database configure
const db_connect = async () => {
	try {
		mongoose.set("strictQuery", false);
		await mongoose.connect(process.env.MONGO_URL);
		console.log("db connected");
	} catch (err) {
		throw err;
	}
};
mongoose.connection.on("disconnected", () => {
	console.log("mongdb disconnected");
});

db_connect()

app.get('/', (req,res)=>{
    res.status(200).send('dating app')
})

app.post('/datings/cards', async (req,res)=>{
    // console.log(req.body)
    const card = new cardSchema(req.body);
 try {
    card.save()
    res.status(200).send(card);
 } catch(err){ 
    res.status(500).send(err)
 }
});

app.get('/dating/cards', async (req, res) => {
     const findcard = await cardSchema.find( )
       try {
        res.status(200).send(findcard)
       } catch (err){
        res.status(500).send(err)
       }
     
    })
 
