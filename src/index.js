// Express initialization
import express from "express";
const app = express();
const PORT = 3000;

// 

import ownerRoutes from "./routes/owner.js"

// Middleware use
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/owner",ownerRoutes.router)


// Server listiningt
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

export default{
    app,
}