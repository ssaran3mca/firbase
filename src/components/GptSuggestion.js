import { useSelector } from "react-redux"
import MovieList from "./MovieList"


const GptSuggestion = () => {
    const { movieName, movieResult } = useSelector(store => store.gpt)
    // console.log(movieResult)
    if (!movieName) return null;
    return (
        <div className="search-result ">
            {movieName.map((movieName, index) => <MovieList
                key={movieName}
                tittle={movieName}
                movies={movieResult[index]} />)

            }

        </div>
    )
}

export default GptSuggestion