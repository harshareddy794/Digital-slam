// Express initialization
import express from "express";
const app = express();
import dotEnv from "dotenv";
import bodyParser from "body-parser";
import db from "./db/connection.js";
import flash from "connect-flash";
import cookieParser from "cookie-parser";
import session from "express-session";

// Middleware use
app.use(express.static("public"))
app.set("view engine","ejs")
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json())
dotEnv.config();
app.use(cookieParser())
app.use(session({
    cookie: { maxAge: 60000 },
    resave : false,
    saveUninitialized :false,
    secret : "Hello",
}));
// app.use(sessions({
//     secret:"Hello world",
//     resave: false,
//     saveUninitialized :false,
//     cookie: { secure: true },
// }))
app.use(flash());

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