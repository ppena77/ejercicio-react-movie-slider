import './MovieCard.css';

function MovieCard (props) {

    const imgSrcDomain = 'https://image.tmdb.org/t/p/w220_and_h330_face';
    
    return (
        <div className='movie-cards__card'>
            <button>
                <img src={imgSrcDomain + props.movieData.poster_path} alt={props.movieData.title} title={props.movieData.title} />
            </button>
        </div>
    )    
};

export default MovieCard;