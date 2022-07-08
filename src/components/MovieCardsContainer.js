import './MovieCardsContainer.css';
import moviesJSON from '../JSON/movies.json';

function MovieCardsContainer () {
    const movies = moviesJSON.slice(0,5).map((movie) => {
        return (
            <div key={movie.id}>{movie.title}</div>
        )
    });

    return (
        <div className="movie-cards__container">{movies}</div>
    )
}

export default MovieCardsContainer;