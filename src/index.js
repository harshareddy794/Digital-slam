// Express initialization
import express from "express";
const app = express();
import dotEnv from "dotenv";
import bodyParser from "body-parser";
import db from "./db/connection.js";

// Middleware use
app.use(express.static("public"))
app.set("view engine","ejs")
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
dotEnv.config();

// db Connectivity
db.connection();

// Imporing routes
import ownerRoutes from "./routes/owner.js";

// Routes configuration
app.use("/owner/",ownerRoutes.router);

// Home route
app.get("/",async(req,res)=>{
    res.render("index")
});


// Server listiningt
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

export default{
    app,
}