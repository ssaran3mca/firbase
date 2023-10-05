import { useSelector } from "react-redux"
import MovieVideo from "./MovieVideo"
import MoviesTitle from "./MoviesTitle"

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovie)
    if (!movies) return;
    const mainMovies = movies[0];
    // console.log(mainMovies)
    const { original_title, overview, id } = mainMovies

    return (
        <div>
            <MovieVideo title={original_title} discription={overview} />
            <MoviesTitle id={id} />
        </div>
    )
}

export default MainContainer