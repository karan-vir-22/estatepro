const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
require("dotenv").config();


const app=express();



app.use(cors());

app.use(express.json());





app.get("/",(_req,res)=>{

res.send(
"EstatePro Backend Running"
);

});
const authRoutes=
require("./routes/authRoutes");


app.use(
"/api/auth",
authRoutes
);




const propertyRoutes=
require("./routes/propertyRoutes");



app.use(
"/api/properties",
propertyRoutes
);

mongoose.connect(process.env.MONGO_URI)

.then(()=>{

console.log(
"MongoDB Connected"
);


const PORT = process.env.PORT || 5000;


app.listen(PORT,()=>{

console.log(
`Server running on port ${PORT}`
);

});


})

.catch((error)=>{

console.log(error);

});
