import './MovieCard.css';
import {useNavigate} from 'react-router-dom';

function MovieCard (props) {
    const navigate = useNavigate();
    function toNavigate() {
        navigate('/pelicula');
    };

    const imgSrcDomain = 'https://image.tmdb.org/t/p/w220_and_h330_face';
    
    return (
        <div className='movie-cards__card'>            
            <button onClick={toNavigate}>
                <img src={imgSrcDomain + props.movieData.poster_path} alt={props.movieData.title} title={props.movieData.title} />
            </button>            
        </div>
    )    
};

export default MovieCard;