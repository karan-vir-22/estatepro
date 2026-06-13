const express=require("express");

const router=express.Router();


const {

getProperties,

getProperty,

addProperty,

deleteProperty,

updateProperty


}=require("../controllers/propertyController");



router.get(
"/",
getProperties
);



router.get(
"/:id",
getProperty
);



router.post(
"/",
addProperty
);



router.delete(
"/:id",
deleteProperty
);
router.put(
"/:id",
updateProperty
);



module.exports=router;
