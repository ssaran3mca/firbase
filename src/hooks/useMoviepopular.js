import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant"
import { addpopularMovie } from "../utils/movieSlice";



const useMoivePopular = () => {
    const dispatch = useDispatch()
    const getMoviePopulars = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
        const json = await data.json();
        dispatch(addpopularMovie(json.results))
    };

    useEffect(() => {
        getMoviePopulars()
    }, [])

    // return useMoivePopular
}

export default useMoivePopular;