import express from "express";
import mongoose from "mongoose";
import recipesRoutes from "./routes/recipes.routes.js";
import dotenv from "dotenv";
import cors from "cors";

// LOad env variables
dotenv.config({path:['.env.local'] });

// create an express app
const app= express ();

// apply middlewares
app.use(express.json ());
app.use(express.urlencoded({extended:false}));
app.use (cors ());
app.use(express.static(`uploads`));

// use routes
app.use (recipesRoutes);


// make database connection
await mongoose.connect(process.env.MONGO_URI);

// listen for incoming request
app.listen(4000,()=>{
    console.log("express app is running")
});