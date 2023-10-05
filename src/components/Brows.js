
import usePlayMovie from "../hooks/useNowPlayMovie"
import Header from "./Header"
import SecondaryContainer from "./SecondaryContainer"
import MainContainer from "./MainContainer"


const Brows = () => {
    usePlayMovie()
    return (
        <div>
            <Header />
            <MainContainer />
            <SecondaryContainer />
        </div>
    )
}

export default Brows