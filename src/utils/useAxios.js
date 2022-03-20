import axios from "axios";
import { useState, useEffect } from "react";

const useAxios = (endpoint) => {

    const [loading, setLoading] = useState(true);
    const [responseData, setResponseData] = useState({});
    const [errorFlag, setErrorFlag] = useState(false);

    useEffect(() => {
      
      (async()=>{
        try{
            setLoading(true);
            const response = await axios.get(endpoint);
            setResponseData(response.data);
        }catch(err){
            setErrorFlag(true);
            console.error("Oops somethng went wrong. We're terribly sorry", err);
        }finally{
            setLoading(false);
        }   
      })()
      console.log("Use effect is being called")
    }, [])
    
   return {loading, responseData, errorFlag} 
}

export default useAxios;

