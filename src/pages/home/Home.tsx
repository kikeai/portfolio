import About from "../../sections/About/About";
import Presentation from "../../sections/Presentation/Presentation";
import Technologies from "../../sections/Technologies/Technologies";
import { useAppSelector } from "../../store/store";

const Home = () => {
    const mode = useAppSelector(state => state.view.mode);
    return (
        <div className={`${mode? "bg-dark": "bg-light"} transition-all duration-200 h-screen bg`}>
            <Presentation />
            <About />
            <Technologies />
        </div>
    )
}

export default Home;