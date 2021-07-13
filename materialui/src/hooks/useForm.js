// metemos en este custom hoock la lógica que va a usar contact Form
import { useState } from "react";

export const useForm = ({ initialForm , validateForm}) => {
  
  const [form, setForm] = useState(initialForm);
  // Error será un onjeto
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  // validaciones 
   const handleBlur = (e) =>{

   }
   const handleChange = (e) =>{ 
       
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });

}
    const handleSubmit = (e) =>{
    }


    
    return  {
        form,
        error,
        loading,
        response,
        handleBlur,
        handleChange,
        handleSubmit
    };

};
