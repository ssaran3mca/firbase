
import MovieCard from "./MovieCard"

const MovieList = ({ tittle, movies }) => {
    // console.log(movies)
    return (
        <div className="container mt-5">
            <h1>{tittle}</h1>
            <div className="cards-wrapper" >
                {movies?.map(movie => < MovieCard key={movies?.id} posterPath={movie?.poster_path} />)}

            </div>
        </div>
    )
}

export default MovieList