import './MovieCardsContainer.css';
import moviesJSON from '../JSON/movies.json';
import MovieCard from './MovieCard';

function MovieCardsContainer () {
    const movies = moviesJSON.slice(0,5).map((movie) => {
        return (
            <MovieCard key={movie.id} movieData={movie} />
        )
    });

    return (
        <div className="movie-cards__container">{movies}</div>
    )
}

export default MovieCardsContainer;