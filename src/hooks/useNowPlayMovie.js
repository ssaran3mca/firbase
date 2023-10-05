import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant"
import { addNowPlayingMovie } from "../utils/movieSlice";



const usePlayMovie = () => {
    const dispatch = useDispatch()
    const getMovieVideos = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
        const json = await data.json();
        console.log(json.results)
        dispatch(addNowPlayingMovie(json.results))
    };

    useEffect(() => {
        getMovieVideos()
    }, [])

    // return usePlayMovie
}

export default usePlayMovie;