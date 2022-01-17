import React, {  useEffect, Fragment } from "react";
import {fetchAllUsers} from "../store/slices/usersSlice";
import {useDispatch,useSelector} from 'react-redux';
import {PuntoA,PuntoB} from './clases'
//import * as puntos  from './clases.js';


const divStyle  = {
    width: '18rem',
};

const UserList = () => {
    const p1 = new PuntoB(5, 5);
    const p2 = new PuntoA(10, 10);
    console.log( '--------PuntoB----------------' +  p1.getCoordenadas());
    console.log( '--------PuntoA----------------' +  p2.getCoordenadas());
    
    // apply destructuring javascript from reducer
    const {userList} = useSelector(state => state.userRed);

    

    const disp = useDispatch();

    //1) Esto se ejecuta antes que 2
    // useEfect vendrian a ser como los eventos esto ocurre al inicializar una sola vez
    // Obtiene proyectos cuando carga el componente
    useEffect(()=>{
       disp(fetchAllUsers());
    },[disp]);

   

  return (
    <Fragment>
      <div className="row">
        <div className="col col-md-6">
          <ul className="list-group">
            {userList.map((item, index) => (

              <li key={index} class="list-group-item">
                {index} -- {item.first_name}{" "}
              </li>
            ))}
          </ul>
        </div>
        <div  className="col col-md-6">
            {userList.map((item, index) => (
                <div key={item.id} className="card" style={divStyle }>
                <img src={item.avatar} className="card-img-top" alt="{item.last_name}"></img>
                <div className="card-body">
                    <h5 className="card-title">{item.last_name} {item.first_name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    
                </div>
            </div>
            ))}
        </div>
      </div>

      <div className="row">
    
      </div>
    </Fragment>
  );
};

export default UserList;
