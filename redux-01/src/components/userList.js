import React, {  useEffect, Fragment } from "react";
import {fetchAllUsers} from "../store/slices/users/usersSlice";
import {useDispatch,useSelector} from 'react-redux';

const divStyle  = {
    width: '18rem',
};

const UserList = () => {
    // state es lo que tiene el store
    const {list} = useSelector(state => state.users);
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
            {list.map((item, index) => (

              <li key={index} class="list-group-item">
                {index} -- {item.first_name}{" "}
              </li>
            ))}
          </ul>
        </div>
        <div  className="col col-md-6">
            {list.map((item, index) => (
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
