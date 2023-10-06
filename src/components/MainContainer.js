import { useSelector } from "react-redux"
import MovieTitles from "./MovieTitles"
import MoviesVideos from "./MoviesVideos"

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovie)
    if (!movies) return;
    const mainMovies = movies[0];
    // console.log(mainMovies)
    const { original_title, overview, id } = mainMovies

    return (
        <div className="position-relative" >
            <MoviesVideos id={id} />
            <MovieTitles title={original_title} discription={overview} />
        </div>
    )
}

export default MainContainer