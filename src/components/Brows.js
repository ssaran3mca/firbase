
import usePlayMovie from "../hooks/useNowPlayMovie"
import Header from "./Header"
import SecondaryContainer from "./SecondaryContainer"
import MainContainer from "./MainContainer"
import useMoivePopular from "../hooks/useMoviepopular"
import { useSelector } from "react-redux"
import GptSearch from "./GptSearch"


const Brows = () => {
    usePlayMovie()
    useMoivePopular()
    const showGptSearch = useSelector(stor => stor.gpt.showGptSearch);
    // console.log(showGptSearch)
    return (

        <div>
            <Header />
            {showGptSearch ? <GptSearch /> :
                <>

                    <MainContainer />
                    <SecondaryContainer /></>
            }


        </div>
    )
}

export default Brows