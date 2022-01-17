import React from "react";
import UserList from "../../components/userList";
import  './Users.css';

const Users= () => {    

    return (
        <div className='pageContent'>
            <h3 className='pageTitle'>Users Page</h3>

            <UserList></UserList>
        <form className='pageForm'>
            <div className='userFormItem'>
                    <label>Nombre</label>
                    <input type='Text' placeholder='Olecram Trick'></input>
            </div>
            
            <div className='userFormItem'>
                    <label>Apellido</label>
                    <input type='Text' placeholder=' Trick'></input>
            </div>
            {/* <div className='userFormItem'>
                    <button type='button' 
                     className="btn btn-primary"
                    onClick={onClickfetchAll}>Aceptar</button>
            </div> */}

            {/* <input type="button" >Acept</input> */}
        </form>
        <div className="plntillasList">
        <div className="row">
        {/* <div className='userFormItem'>
                    <button type='button' 
                     className="btn btn-primary"
                    onClick={onClickfetchAll}>Buscar plantillas</button>
            </div>
           */}
      </div>  
        </div>
        </div>
    )
}

export default Users;
