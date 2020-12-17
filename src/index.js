// Express initialization
import express from "express";
const app = express();
import dotEnv from "dotenv";
import db from "./db/connection.js";

// Middleware use
app.use(express.static("public"))
app.set("view engine","ejs")
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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
const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

export default{
    app,
}