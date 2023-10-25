import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant"
import { addpopularMovie } from "../utils/movieSlice";



const useMoivePopular = () => {
    const dispatch = useDispatch()
    const popularMov = useSelector(store => store.movies.papularMOvie);
    console.log(popularMov)
    const getMoviePopulars = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
        const json = await data.json();
        dispatch(addpopularMovie(json.results))
    };

    useEffect(() => {
        !popularMov && getMoviePopulars()
    }, [])

    // return useMoivePopular
}

export default useMoivePopular;