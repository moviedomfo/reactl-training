// En este componente solo hacmos que dentro delñ useEffect las lñlñamadas a la API sean de forma async

import React, { useState, useEffect, Fragment } from 'react'
import Pokemon from './Pokemon';

const url = 'https:pokeapi.co/api/v2/pokemon/' ;


// Componente de Funcion : no existe this por lo que no podemos asignar o leer this.state
const  PokemonAsyncHooks =  ()  => {

const [pokemons, setPokemons] = useState([]);

useEffect(() => {

    const callApiAsync = async (url) => {

        let res = await fetch(url),
            json = await res.json();
        json.results.forEach(async element => {

            let res = await fetch(element.url),
                json = await res.json();

            const pokemon = {
                id: json.id,
                name: json.name,
                avatar: json.sprites.front_default,
            }

            setPokemons((pokemons) => [...pokemons, pokemon])
            

        });

    }

    callApiAsync(url);

}, []);


   return(
       <Fragment>
           <h2>Petidiones asincronas en Hooks</h2>
           {pokemons.length === 0 ? (
                    <div>Loading ..</div>
           ):(
             pokemons.map((p) => (
                                <Pokemon key={p.id}  name={p.name} avatar={p.avatar} ></Pokemon> 
                                  )
                        ) // end map
           )}
       </Fragment>
   )

}

export default PokemonAsyncHooks;