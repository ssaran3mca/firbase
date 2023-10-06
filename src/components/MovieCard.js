import { IMG_MOVIE } from "../utils/constant"
const MovieCard = ({ posterPath }) => {
    // console.log(posterPath)
    return (
        <div className="card ">
            {/* <h3>{posterPath}</h3> */}
            <img src={IMG_MOVIE + posterPath} />
        </div>
    )
}

export default MovieCard