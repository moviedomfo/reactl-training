import React, { useState, useEffect, Fragment } from 'react'
import { useForm } from '../../hooks/useForm'

const  initialForm =  {nombre:'',correo:null}
const validationForm = (form)=>{ }


const FormularioContacto = (initialForm) => {

    const {form,error,loading,response,
        handleBlur,
        handleChange,
        handleSubmit} = useForm(initialForm,validationForm);
      
   

  
    return (
        <>
            <h2>Formulario de contacto</h2>
            <form onSubmit={handleSubmit} >

            <label htmlFor="nombre" >Nombre</label>
               <input type="text" id="nombre" 
                name = "nombre"
                value={form.nombre}
                onChange={handleChange}
                onBlur= {handleBlur} // cuando pierde foco
                requerido></input>

                <label htmlFor="email" >Correo</label>
               <input type="email" id="email" 
                name = "email"
                value={form.email}
                onChange={handleChange}
                onBlur= {handleBlur} // cuando pierde foco
                requerido></input>

            <input type="submit" value="Aceptar"></input>

            </form>
        </>
    )
}

export default FormularioContacto
