require ('dotenv').config();
const express = require ('express')
const mongoose = require ('mongoose')
const userRoute = require ('./Routes/userRoute')
const reportRoutes = require ('./Routes/reportRoutes')
const cors = require ('cors')
const path = require ('path')
const authRoutes = require ('./Routes/authRoutes')

const app = express ();

//controller
app.use(express.json());
app.use (cors ({
    origin:"http://http://localhost:5173",
    Credentials:true,
}))
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


mongoose.connect  ("mongodb://localhost:27017/")

.then(() => console.log ("MongoDB connected"))

.catch(err => console.log (err));


 app.get( '/', (req, res) =>{
    res.send('my app is running')
 })

 app.use ('/API/AUTH', userRoute);
 app.use("/api/reports", reportRoutes);
 app.use("/api/auth", authRoutes);


 console.log("JWT_SECRET:", process.env.JWT_SECRET);
 app.post ('/submit', (req, res) => {
    console.log(req.body);
    res.send("Form submitted succesfully")
 })

//start the server
app.listen (3000, () => {
    console.log ('server is running on http://localhost:3000' )
});