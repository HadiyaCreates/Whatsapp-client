import axios from 'axios';

// pfAl9I9u5fZv6oQx
// hadiyashaikh2006


const url='http://localhost:8000';
export const addUser= async(data)=>{
    try{
await axios.post(`${url}/add`,data);
    }catch(error){
        console.log('Error while calling addUser API', error.message);
    }
}

export const getUsers = async()=>{
    try{
        let response =  await axios.get(`${url}/users`);
        return response.data;
    }catch(error){
        console.log('Error while calling getUsers API', error.message);
    }
}

export const setConversation=async(data)=>{
    try{
         await axios.post(`${url}/conversation/add`, data);
    }
    catch(error){
        console.log('Error while calling SetConversation API', error.message);
    }
}
// export const getConversation=async(data)=>{
//     try{
//     let response =  await axios.get(`${url}/conversation/get`, data);
//     return response.data
//     }
//     catch(error){
//         console.log('Error while calling getConversation API', error.message);
//     }
// }
export const getConversation = async (data) => {
    try {
        let response = await axios.get(`${url}/conversation/get`, { params: data });
        return response.data;
    } catch (error) {
        console.log('Error while calling getConversation API', error.message);
    }
}
export const newMessage = async(data)=>{
    
    try{
      await axios.post(`${url}/message/add`,data)
    }
    catch (error) {
        console.log('Error while calling new Message api', error.message);
    }
}
export const getMessage = async(id)=>{
    
    try{
      let response = await axios.get(`${url}/message/get/${id}`)
       return response.data;
    }
    catch (error) {
        console.log('Error while calling get Message api', error.message);
    }
}


export const UploadFile=async(data)=>{
    try {
        return await axios.post(`${url}/file/upload`,data)
    } catch (error) {
        console.log('Error while calling get Upload file api', error.message);
    }
}