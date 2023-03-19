import { useEffect } from "react";
import Footer from "../../layouts/footer/Footer";
import About from "../../sections/About/About";
import Presentation from "../../sections/Presentation/Presentation";
import Technologies from "../../sections/Technologies/Technologies";
import { changeIdiom, changeMode } from "../../store/features/view";
import { useAppDispatch, useAppSelector } from "../../store/store";

const Home = () => {
    const mode = useAppSelector(state => state.view.mode);
    const idiom = useAppSelector(state => state.view.idiom);
    const dispatch = useAppDispatch()

    useEffect(() => {
        if(mode === null || idiom === null){
            dispatch(changeIdiom());
            dispatch(changeMode());
        }
    }, [])
    return (
        <div className={`${mode? "bg-dark": "bg-light"} transition-all duration-200 h-screen bg`}>
            <Presentation />
            <About />
            <Technologies />
            <Footer />
        </div>
    )
}

export default Home;