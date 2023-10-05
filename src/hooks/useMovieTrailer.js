import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTrailerMovie } from "../utils/movieSlice";
const useMovieTrailer = (id) => {
    const dispacch = useDispatch()

    const getMoviveVideo = async () => {
        const movies = await fetch('https://api.themoviedb.org/3/movie/' + id + '/videos?language=en-US', API_OPTIONS);
        const data = await movies.json();

        const trailer = data.results.filter(video => video.type === "Trailer")
        const trailerOne = trailer.length ? trailer[0] : data.results[0];
        console.log(trailerOne);
        dispacch(addTrailerMovie(trailerOne))
    }
    useEffect(() => {
        getMoviveVideo()
    }, []);
    return (
        <div>useMovieTrailer</div>
    )
}

export default useMovieTrailer