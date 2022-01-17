import React,{useEffect} from 'react';
import './Balance.css';
import { useDispatch, useSelector } from "react-redux";
import {getPlanillas,setPlanillas} from "../../store/slices/planillasSlice";

export const Balance = () => {
    const {list} = useSelector(state => state.planilladaList);
    
    const disp = useDispatch();

    const onClickfetchAll = () => {
         disp(setPlanillas());
         
      };
  
    useEffect(()=>{
        disp(getPlanillas());
    },[disp]);
    
    return (
        <div className='pageContent'>
              <div className="row">
            <div className="col col-md-6">
            
                <ul className="list-group">
                {   
                    !list ? 
                    <li className="list-group-item"><p>Nada de tareas</p></li>
                    :
                    list.map((item, index) => (
                        <li key={index} class="list-group-item">
                            {index} -- {item.nombreCreador} {"Nro " } {item.numero}
                        </li>
                    ))
                }
                </ul>
                
            
            </div>
        </div>
        <div className="row">
          <div className="form-group col-4">
          <div className='userFormItem'>
                    <button type='button' 
                     className="btn btn-primary"
                    onClick={onClickfetchAll}>Aceptar</button>
            </div> 
          </div>
            
          </div>
        </div>
    )
}
