import React from "react";
import { useDispatch, useSelector } from "react-redux";
import  './Users.css';
import {getPlanillasList} from "../store/slices/planillasSlice";

const Users= () => {    

    const {plantillasList} = useSelector(state => state.plantillasList);
    
    const disp = useDispatch();

    const onClickfetchAll = () => {
        disp(getPlanillasList());
      };
    return (
        <div className='pageContent'>
            <h3 className='pageTitle'>Users Page</h3>
        <form className='pageForm'>
            <div className='userFormItem'>
                    <label>Nombre</label>
                    <input type='Text' placeholder='Olecram Trick'></input>
            </div>
            
            <div className='userFormItem'>
                    <label>Apellido</label>
                    <input type='Text' placeholder=' Trick'></input>
            </div>
            <div className='userFormItem'>
                    <button type='button' 
                     className="btn btn-primary"
                    onClick={onClickfetchAll}>Aceptar</button>
            </div>

            {/* <input type="button" >Acept</input> */}
        </form>
        <div className="plntillasList">
        <div className="row">
        <div className='userFormItem'>
                    <button type='button' 
                     className="btn btn-primary"
                    onClick={onClickfetchAll}>Buscar plantillas</button>
            </div>
        </div>    
        <div className="row">
            <div className="col col-md-6">
            <ul className="list-group">
                {plantillasList.map((item, index) => (

                <li key={index} class="list-group-item">
                    {index} -- {item.first_name}{" "}
                </li>
                ))}
            </ul>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Users;
