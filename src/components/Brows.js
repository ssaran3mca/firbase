
import usePlayMovie from "../hooks/useNowPlayMovie"
import Header from "./Header"
import SecondaryContainer from "./SecondaryContainer"
import MainContainer from "./MainContainer"
import useMoivePopular from "../hooks/useMoviepopular"


const Brows = () => {
    usePlayMovie()
    useMoivePopular()
    return (
        <div>
            <Header />
            <MainContainer />
            <SecondaryContainer />
        </div>
    )
}

export default Brows