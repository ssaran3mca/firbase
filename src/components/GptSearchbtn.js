import { useSelector } from "react-redux"
import lang from "../utils/language"

const GptSearchbtn = () => {
    const langKey = useSelector(store => store.config.lang)
    // console.log(langKey)
    return (
        <div className=" gptsearch-icon col-md-5">
            <div className=" mx-auto">
                <div className="input-group">
                    <input className="form-control  border " type="search" placeholder={lang[langKey].searchPlaceholder} id="example-search-input" />
                    <span className="input-group-append ms-3">
                        <button className="btn btn-outline-secondary bg-white border-bottom-0 border  ms-n5" type="button">
                            <i className="fa fa-search">{lang[langKey].search}</i>
                        </button>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default GptSearchbtn