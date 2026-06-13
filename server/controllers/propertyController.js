const Property=require("../models/Property");




// GET ALL


exports.getProperties=async(req,res)=>{


try{


const properties=
await Property.find();


res.json(properties);


}

catch(error){

res.status(500)
.json({
message:error.message
});

}


}





// GET SINGLE


exports.getProperty=
async(req,res)=>{


try{


const property=
await Property.findById(
req.params.id
);


res.json(property);


}

catch(error){

res.status(500)
.json({
message:error.message
});


}


}







// ADD PROPERTY


exports.addProperty=
async(req,res)=>{


try{


const property=
new Property(req.body);



await property.save();



res.status(201)
.json(property);



}

catch(error){

res.status(400)
.json({
message:error.message
});


}


}








// DELETE


exports.deleteProperty=
async(req,res)=>{


try{


await Property.findByIdAndDelete(
req.params.id
);



res.json({
message:"Deleted"
});


}

catch(error){

res.status(500)
.json({
message:error.message
});


}


}
// UPDATE PROPERTY

exports.updateProperty = async(req,res)=>{


try{


const property = await Property.findByIdAndUpdate(

req.params.id,

req.body,

{
new:true
}

);


res.json(property);


}

catch(error){


res.status(500).json({

message:error.message

});


}


};