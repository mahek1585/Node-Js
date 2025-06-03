require('dotenv').config();

const express = require("express"); //es5
const supabase = require("./supabase");
const studentRouter = require("./routers/student.router");

console.log({supabase});

// Creating server application
const app = express();

const PORT = process.env.PORT;

app.use(express.json());

app.get("/", function (req, res) {
  res.send("<h1>Portfolio CRM APIs</h1>");
});

app.use("/students", studentRouter);


app.listen(PORT, () => console.log("Server running on PORT: " + PORT));