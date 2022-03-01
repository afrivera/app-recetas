import React, { useContext, useState } from 'react'
import { CategoriasContext } from '../context/CategoriasContext'
import { RecetasContext } from '../context/RecetasContext';

const Formulario = () => {
    
    const { categorias } = useContext(CategoriasContext);
    const { setBusquedaReceta, setConsultar } = useContext(RecetasContext);

    // state
    const [busqueda, setBusqueda] = useState({
        nombre: '',
        categoria: ''
    });

    // funcion para leer los contenidos
    const handleChange = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    // al dar submit al form
    const handleSubmit = e => {
        e.preventDefault();
        setBusquedaReceta( busqueda );
        setConsultar( true );
    }

    return (
        <form
            className='col-12'
            onSubmit={ handleSubmit }
        >
            <fieldset className='text-center'>
                <legend>Busca bebidas por categoría o Ingrediente</legend>
            </fieldset>

            <div className='row'>
                <div className='col-md-4'>
                    <input 
                        name='nombre'
                        className='form-control'
                        type='text'
                        placeholder='Buscar por Ingrediente'
                        onChange={ handleChange }
                    />
                </div>
                <div className='col-md-4'>
                    <select
                        className='form-control'
                        name='categoria'
                        onChange={ handleChange }
                    >
                        <option value='' >-- Selecciona Categoria</option>
                        {
                            categorias.map( categoria => (
                                <option 
                                    key={categoria.strCategory} 
                                    value={ categoria.strCategory }
                                >{categoria.strCategory}</option>
                            ))
                        }
                    </select>
                </div>
                <div className='col-md-4'>
                    <input 
                        type='submit'
                        className='btn btn-block btn-primary'
                        value='Buscar Bebidas'
                    />
                </div>
            </div>
        </form>
    )
}

export default Formulario