const Enquiry=require("../models/Enquiry");



// CREATE ENQUIRY

exports.createEnquiry=async(req,res)=>{


try{


const enquiry=new Enquiry(req.body);


await enquiry.save();



res.status(201).json({

message:"Enquiry submitted"

});


}

catch(error){

res.status(500).json({

message:error.message

});

}


};







// GET ALL ENQUIRIES

exports.getEnquiries=async(req,res)=>{


try{


const enquiries=
await Enquiry.find()
.sort({
createdAt:-1
});


res.json(enquiries);


}

catch(error){

res.status(500).json({

message:error.message

});


}


};







// DELETE ENQUIRY


exports.deleteEnquiry=async(req,res)=>{


try{


await Enquiry.findByIdAndDelete(
req.params.id
);



res.json({

message:"Deleted"

});


}

catch(error){

res.status(500).json({

message:error.message

});

}


};