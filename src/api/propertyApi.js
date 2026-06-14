import API from "./axios";



export const getProperties = ()=>{

return API.get("/properties");

};



export const getProperty=(id)=>{

return API.get(`/properties/${id}`);

};



export const addProperty=(data)=>{

return API.post("/properties",data);

};



export const deleteProperty=(id)=>{

return API.delete(`/properties/${id}`);

};

export const updateProperty=(id,data)=>{

return API.put(`/properties/${id}`,data);

};

export const sendEnquiry=(data)=>{

return API.post(
"/enquiries",
data
);

};

export const getEnquiries = ()=>{

return API.get("/enquiries");

};



export const deleteEnquiry=(id)=>{

return API.delete(`/enquiries/${id}`);

};