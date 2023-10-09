import { IMG_BG } from "../utils/constant"
import GptSearchbtn from "./GptSearchbtn"
import GptSuggestion from "./GptSuggestion"

const GptSearch = () => {
    return (
        <div className="">
            <img src={IMG_BG} />

            <GptSearchbtn />
            <GptSuggestion />
        </div>
    )
}

export default GptSearch