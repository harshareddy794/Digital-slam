// Express initialization
import express from "express";
const app = express();
const PORT = 3000;

// Imporing routes
import ownerRoutes from "./routes/owner.js";

// Middleware use
app.use(express.static("public"))
app.set("view engine","ejs")
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Home route
app.get("/",async(req,res)=>{
    res.render("index")
});

// Routes configuration
app.use("/owner",ownerRoutes.router);


// Server listiningt
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

export default{
    app,
}