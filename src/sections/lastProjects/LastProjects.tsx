import { transition } from "../../App";
import Project from "../../components/project/Project";
import Projects from "../../components/projects/Projects";
import { useAppSelector } from "../../store/store";

const LastProjects = () => {
    const idiom = useAppSelector(state => state.view.idiom);
    const mode = useAppSelector(state => state.view.mode);
    return (
        <section className={`${mode? "bg-dark": "bg-light"} z-50 ${transition}`} id="projects">
            <div>
                <h3 className={`${mode? "text-light": "text-dark"} ${transition} pb-10 px-12 md:px-0 font-montserrat font-black italic text-center text-2xl md:text-4xl`}>{idiom === "ES"? "Mis últimos proyectos de desarrollo": "My latest development projects"}</h3>
                <Projects />
            </div>
        </section>
    )
}

export default LastProjects;