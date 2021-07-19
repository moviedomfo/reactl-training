import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';

const Persons = () => {

    
    // http://localhost:3000/persons/olecram
    const {username}= useParams();
  
   
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());   
    //alert(params.username);
    const usernameByParam = params.username;
const param = urlSearchParams.get('username');

    //http://localhost:3000/persons?username=olecraminquery

    return (
        <div>
             <h2>User name by rute {username}</h2>
             <h2>User by query {usernameByParam}   {param}</h2>
        </div>
    )
}

export default Persons
