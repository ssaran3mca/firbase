
const MovieTitles = ({ title, discription }) => {

    return (
        <div className="container trailertext text-white mb-3 pt-5">
            <div className="col-4 mt-5 mb-3 pt-5">
                <h1>{title}</h1>
                <div className=" mb-5">{discription}</div>
                <button type="button" class="btn btn-light me-3 w-25">Play</button>
                <button type="button" class="btn btn-secondary w-25">More Info</button>
            </div>
        </div>

    )
}

export default MovieTitles