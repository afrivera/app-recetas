import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const RecetasContext = createContext();

const RecetasProvider = (props) => {

    const [busquedaReceta, setBusquedaReceta] = useState({
        nombre:'',
        categoria: ''
    });
    const [recetas, setRecetas] = useState([]);
    const [consultar, setConsultar] = useState(false);

    const { nombre, categoria } = busquedaReceta;
    
    useEffect( ()=> {

        if( consultar ){
            const obtenerRecetas = async()=> {
            
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ nombre }&c=${ categoria }`;

                const resultado = await axios( url );
                setRecetas(resultado.data.drinks);
            }

            obtenerRecetas();
        }
        

    }, [ busquedaReceta ])

    return (
        <RecetasContext.Provider
            value={{
                recetas,
                setBusquedaReceta,
                setConsultar
            }}
        >
            {props.children}
        </RecetasContext.Provider>
    );
}

export default RecetasProvider;