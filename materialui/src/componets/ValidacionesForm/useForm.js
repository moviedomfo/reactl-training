// metemos en este custom hoock la lógica que va a usar contact Form
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { helpHttp } from "../helpers/helpHttp";


export const useForm = (initialForm, validateForm) => {

  const [form, setForm] = useState(initialForm);

  // Error será un onjeto
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);


  const handleChange = (e) => {
    /// e.preventDefault();
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  // validaciones
  const handleBlur = (e) => {
    //para que setee el valor en el onblur
    handleChange(e);
    setErrors(validateForm(form));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // valido
    setErrors(validateForm(form));

    // no usa if (errors)
    if (Object.keys(errors).length !== 0) return;

    setLoading(true);
    setResponse(false);
    setForm({ ...form, id: uuidv4() });
      alert( JSON.stringify(form));
    let options = {
      body: form,
      headers: { "Content-Type": "application/json" },
      redirect: 'follow'
    };

    helpHttp()
      .post("http://localhost:50010/contacts/", options)
      .then((res) => {
        setLoading(false);
        setResponse(true); // envio ok
        
      });
  };

  return {
    form,
    errors,
    loading,
    response,
    handleBlur,
    handleChange,
    handleSubmit,
  };
};
