import React,{ useState} from 'react'
import { Route } from 'react-router'
import { Redirect } from 'react-router-dom';
//este compoennte hace algo similar AddGuards y proteje las rutas
// aqui se puede llamar al servicio que chequea las variables de autenticacion
// component:Component pone un alias para que pueda ser tomado como un compoennte dentro del Route
const PrivateRoute = ({component:Component,...rest}) => {
const  [isAuth, setIsAuth] = useState(true)

// const validate=()=>{
//     setIsAuth(false);
// }
//      validate(false);
    return (
        // para que Component sea detectado como un componente de react debe estar en mayusculas
        // y 
        // <Route  {...rest}> {isAuth ? <h2>Autorizado</h2> : <h2>No Autorizado</h2>} </Route>
        // <Route  {...rest}> {isAuth ? <Component/> : <h2>No Autorizado</h2>} </Route>
        <Route  {...rest}> {isAuth ? <Component/> : <Redirect to ="/"/>} </Route>

        // {isAuth && <Route  {...rest} >
        //         <Component></Component>
        //   </Route>} 
        //  {!isAuth && <Redirect to="/home" ></Redirect>  } 
      
       
        
        
    );
};

export default PrivateRoute

// const PrivateRoute = (props) => {
//     return (
//         <Route exact path={props.exact} component ={props.component}/>
//     );
// };
