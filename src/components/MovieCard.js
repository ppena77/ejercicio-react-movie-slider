import './MovieCard.css';
import {Link} from 'react-router-dom';

function MovieCard (props) {

    const imgSrcDomain = 'https://image.tmdb.org/t/p/w220_and_h330_face';
    
    return (
        <div className='movie-cards__card'>
            <Link to="/pelicula">
                <button>
                    <img src={imgSrcDomain + props.movieData.poster_path} alt={props.movieData.title} title={props.movieData.title} />
                </button>
            </Link>
        </div>
    )    
};

export default MovieCard;