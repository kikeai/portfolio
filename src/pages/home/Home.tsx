import Header from "../../layouts/header/Header";
import Presentation from "../../sections/Presentation/Presentation";
import { useAppSelector } from "../../store/store";

const Home = () => {
    const mode = useAppSelector(state => state.view.mode);
    return (
        <div className={`${mode? "bg-dark": "bg-light"} transition-all duration-200`}>
            <Header />
            <Presentation />
        </div>
    )
}

export default Home;