const express=require("express");

const router=express.Router();


const {

createEnquiry,

getEnquiries,

deleteEnquiry


}=require("../controllers/enquiryController");



router.post(
"/",
createEnquiry
);



router.get(
"/",
getEnquiries
);



router.delete(
"/:id",
deleteEnquiry
);



module.exports=router;
