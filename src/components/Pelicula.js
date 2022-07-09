import './Pelicula.css';
import {Link} from 'react-router-dom';

function Pelicula () {

    return (
        <>
            <h1>Películas</h1>

            <p className="gotoHome"><Link to="/home">Volver</Link></p>
        </>
    )
};

export default Pelicula;