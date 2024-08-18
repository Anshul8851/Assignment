const express = require("express");
const dotenv = require("dotenv");
const {connectDb,initData} = require("./config/database");
const { getAllCardsInfo, addNewCard, getSpecificCard, searchCard } = require("./Controllers/cardController");
const cors = require("cors");

// const {cardRoutes} = require("./Routes/Cards");

const app = express();
dotenv.config();
connectDb();
initData();


//middleware
app.use(express.json());
app.use(
	cors({
		origin:"http://localhost:3000",
		credentials:true,
	})
)

//routes
// app.use("/api/v1",cardRoutes);
app.get("/api/v1/cards",getAllCardsInfo);
app.post("/api/v1/cards",addNewCard);
app.get("/api/v1/cards/:id",getSpecificCard);
app.get('/api/v1/search', searchCard);

//rest api
app.get('/',(req,res)=>{
    res.send("<h1>HOME PAGE</h1>")
})
app.get('/ping',(req,res)=>{
    res.send("<h1>Server Started Successfully</h1>")
})
// default route
app.all("*",(req,res)=>{
    res.send("<h1>Error 404 Page Not Found</h1>")
})

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`server started successfully at ${PORT}`)
})