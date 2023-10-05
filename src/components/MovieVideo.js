
const MovieVideo = ({ title, discription }) => {

    return (
        <div className="container position-relative trailertext">
            <div className="col-4 mt-5 mb-3">
                <div>{title}</div>
                <div className=" mb-5">{discription}</div>
                <button type="button" class="btn btn-primary me-3 w-25">Play</button>
                <button type="button" class="btn btn-secondary w-25">More Info</button>
            </div>
        </div>

    )
}

export default MovieVideo