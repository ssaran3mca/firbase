import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {
    const Movie = useSelector(store => store.movies);
    console.log(Movie.papularMOvie);

    return (
        <>
            <MovieList tittle={"Now Playing Movie"} movies={Movie.nowPlayingMovie} />
            <MovieList tittle={"Now papular MOvie"} movies={Movie.papularMOvie} />
            {/* <MovieList tittle={"Now Playing Movie"} movies={Movie.papularMOvie} /> */}
        </>

    )
}

export default SecondaryContainer