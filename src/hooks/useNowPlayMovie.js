import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant"
import { addNowPlayingMovie } from "../utils/movieSlice";



const usePlayMovie = () => {
    const dispatch = useDispatch()
    const nowPlayingMovie = useSelector(store => store.movies.nowPlayingMovie)

    const getMovieVideos = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
        const json = await data.json();
        console.log(json)
        dispatch(addNowPlayingMovie(json.results))
    };

    useEffect(() => {
        !nowPlayingMovie && getMovieVideos()
        if (!nowPlayingMovie && getMovieVideos()) {
            alert("d")
        }

    }, [])

    // return usePlayMovie
}

export default usePlayMovie;