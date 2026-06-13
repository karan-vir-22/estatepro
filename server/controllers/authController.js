const Admin=require("../models/Admin");

const bcrypt=require("bcrypt");

const jwt=require("jsonwebtoken");




// REGISTER ADMIN

exports.registerAdmin=async(req,res)=>{


try{


const hashedPassword=
await bcrypt.hash(
req.body.password,
10
);



const admin=new Admin({

username:req.body.username,

password:hashedPassword

});


await admin.save();


res.json({

message:"Admin created"

});


}

catch(error){

res.status(500).json({

message:error.message

});


}


};







// LOGIN ADMIN


exports.loginAdmin=async(req,res)=>{


try{


const admin=
await Admin.findOne({

username:req.body.username

});



if(!admin){

return res.status(400).json({

message:"Invalid username"

});

}




const validPassword=
await bcrypt.compare(

req.body.password,

admin.password

);



if(!validPassword){

return res.status(400).json({

message:"Invalid password"

});

}




const token=
jwt.sign(

{
id:admin._id
},

process.env.JWT_SECRET,

{
expiresIn:"1d"
}

);




res.json({

token

});



}

catch(error){

res.status(500).json({

message:error.message

});

}


};
