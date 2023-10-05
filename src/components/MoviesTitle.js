
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const MoviesTitle = ({ id }) => {
    useMovieTrailer(id);
    const trailerVideos = useSelector(store => store.movies.trailerVideo);
    if (!trailerVideos) return null;

    return (
        <div className="trailervideo">
            <iframe
                width="100%" height="850px"
                src={"https://www.youtube.com/embed/" + trailerVideos.key + "?autoplay=1&mute=1"}
                title="YouTube video player"

                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        </div>
    )
}

export default MoviesTitle