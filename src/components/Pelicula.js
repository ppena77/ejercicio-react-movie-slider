import './Pelicula.css';
import {Link, useParams} from 'react-router-dom';

function Pelicula () {
    let {id, title} = useParams();

    return (
        <>
            <h1>{title}</h1>

            <p className="gotoHome"><Link to="/home">Volver</Link></p>
        </>
    )
};

export default Pelicula;