import { useDispatch, useSelector } from "react-redux"
import lang from "../utils/language"
import { useRef } from "react"
import openai from "../utils/openai"
import { API_OPTIONS } from "../utils/constant"
import { addgptMoviesResult } from "../utils/gptSlice"

const GptSearchbtn = () => {
    const langKey = useSelector(store => store.config.lang)
    // console.log(langKey)
    const valueSearch = useRef();
    const dispatch = useDispatch()
    const searchMovieTMTB = async (movie) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' +
            movie +
            '&include_adult=false&language=en-US&page=1', API_OPTIONS)
        const json = await data.json()
        // console.log(json)
        return json.results;
    }

    const handileGptSearch = async () => {
        // console.log(valueSearch.current.value)
        const gptQuery =
            "Act as a Movie Recommendation system and suggest some movies for the query : " +
            valueSearch.current.value +
            ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
        // console.log(gptQuery)
        const chatCompletion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });
        // console.log((chatCompletion.choices[0].message.content).split(","));
        const gptMovies = (chatCompletion.choices[0].message.content).split(",")

        const promiseArrary = gptMovies.map((movie) => searchMovieTMTB(movie));
        const promiseTMTB = await Promise.all(promiseArrary)
        // console.log(promiseArrary)
        // console.log(promiseTMTB)
        dispatch(addgptMoviesResult({ movieName: gptMovies, movieResult: promiseTMTB }));
    }

    return (
        <div className=" gptsearch-icon col-md-5">
            <div className=" mx-auto">
                <form className="input-group"
                    onSubmit={(e) => e.preventDefault}>
                    <input
                        ref={valueSearch} className="form-control  border " type="search" placeholder={lang[langKey].searchPlaceholder} id="example-search-input" />
                    <span className="input-group-append ms-3">
                        <button className="btn btn-outline-secondary bg-white border-bottom-0 border  ms-n5" type="button"
                            onClick={handileGptSearch}>
                            <i className="fa fa-search">{lang[langKey].search}</i>
                        </button>
                    </span>
                </form>
            </div>
        </div>
    )
}

export default GptSearchbtn