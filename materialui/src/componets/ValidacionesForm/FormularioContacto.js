import React, {  } from "react";
import Loader from "../Loader";
import Message from "../Message";
import Modal from "../modal/Modal";
import useModal from "../modal/useModal";
import { useForm } from "./useForm";

let styles = {
    fontWeight: "bold",
    color: "#dc3545",
  };
const initialForm = {
    name: "",
    email: "",
    subject: "",
    comments: "",
  };

const validationForm = (form) => {
  
  

  const errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  if(!form.name.trim()){
    errors.name = 'Nombre es requerido';
  }

  if(!errors.name && !regexName.test(form.name.trim())){
    errors.name = 'Nombre solo acepta letras y espacios en blanco';
  }

  if(!form.email.trim()){
    errors.email = 'Email es requerido';
  }

  if(!errors.email &&  !regexEmail.test (form.email)){
    errors.email = 'Formato de email no es correcto';
  }

  if(!form.comments.trim()){
    errors.comments = 'Comentario es requerido';
  }

  if(!errors.comments &&  !regexComments.test (form.comments)){
    errors.comments = 'Formato de comentario no es correcto';
  }
  return errors;
  

};

const FormularioContacto = () => {
  
  const [isOpenModal1, openModal1,closeModal1]=useModal (false);
  
  const [isOpenModal2, openModal2,closeModal2]=useModal (false);

  const {
    form,
    errors,
    loading,
    response,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useForm(initialForm, validationForm);

  return (
    <div>
      <h2>Formulario de contacto</h2>
      <h3>response {response ? 'SI RESPONSE' : 'NO RESPONSE'}</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          placeholder="Escribe tu nombre"
          name="name"
          value={form.name}
          onChange={handleChange}
          onBlur={handleBlur} // cuando pierde foco
          required
        ></input>
        {/* conditional render short circuit */}
        {errors.name && <p style={styles}>{errors.name}</p>}

        <label htmlFor="email">Correo</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          onBlur={handleBlur} // cuando pierde foco
          required
        ></input>
        {errors.email && <p style={styles}>{errors.email}</p>}

        <textarea
          name="comments"
          cols="50"
          rows="5"
          placeholder="Escribe tus comentarios"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.comments}
          required
        ></textarea>
        {errors.comments && <p style={styles}>{errors.comments}</p>}
        <input type="submit" value="Aceptar"></input>
      </form>
      {loading && <Loader />}
      {response && (
        <Message msg="Los datos han sido enviados" isError = 'false' bgColor="#198754" />
      )}

      <button onClick= {openModal1} >Show modal 1</button>
      <Modal isOpen = {isOpenModal1} closeModal={closeModal1} >
          <h2>Modal 1</h2>
          <p>Arquímedes o Arquímides, de Siracusa fue un físico, 
            ingeniero, inventor, astrónomo y matemático griego. 
            Aunque se conocen pocos detalles de su vida</p>

      </Modal>
      <button onClick={openModal2}>Modal 2</button>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3>Otro Modal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa maiores
          eum minima earum atque aut blanditiis, cumque eius! Eius nobis odit
          tempora aperiam quod obcaecati repellendus optio voluptas numquam
          necessitatibus?
        </p>
        <img src="https://placeimg.com/400/400/nature" alt="Nature" />
      </Modal>

      </div>
  );
};

export default FormularioContacto;
