import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Formulario = ({guardarBusquedaLetra}) => {

    const [ busqueda, guardarBusqueda ] = useState({
        artista: '',
        cancion: ''
    })

    const [error, guardarError ] = useState(false);

    const { artista, cancion } = busqueda;

    //funcion en cada input para leer su contenido
    const actualizarSatate = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })

    }
    //consultar las API
    const buscarInformacion = e => {
        e.preventDefault();

        if(artista.trim() === '' || cancion.trim() === ''){
            guardarError(true);
            return;
        }
        guardarError(false);
        //pasar al componente principal
        guardarBusquedaLetra(busqueda);

    }
    return(
        <div className="bg-info">
            <div className="container">
            { error ? <p className="alert alert-danger text-center p-2">Debe rellenar todos los campos</p> : null}
                <div className="row">
                    <form
                    onSubmit={buscarInformacion}
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                        >
                            <fieldset>
                                <legend className="text-center">Buscador Letras Canciones</legend>
                
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artista"
                                            placeholder="Nombre artista"
                                            onChange={actualizarSatate}
                                            value={artista}
                                            />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                <div className="form-group">
                                        <label>Canción</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="cancion"
                                            placeholder="Nombre canción"
                                            onChange={actualizarSatate}
                                            value={cancion}
                                            />
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary float-right"
                                >Buscar</button>
                        </fieldset>
                    </form>

                </div>
            </div>
        </div>
    );
}
Formulario.propTypes = {
    guardarBusquedaLetra: PropTypes.func.isRequired
}
export default Formulario;