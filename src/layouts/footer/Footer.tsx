import Button from "../../components/button/normalButton/Button";
import SmallButton from "../../components/button/smallButton/SmallButton";
import { useAppDispatch, useAppSelector } from "../../store/store";  
import { socials } from "./socials";

const Footer = () => {
    const dispatch = useAppDispatch();
    const mode = useAppSelector(state => state.view.mode);
    const idiom = useAppSelector(state => state.view.idiom);

    const textUS = "I am available to work on your awesome projects A digital designer and full stack developer from Venezuela passionate about creating functional webs"
    const textES = "Estoy disponible para trabajar en sus increíbles proyectos. Un diseñador digital y desarrollador full stack de Venezuela apasionado por crear webs funcionales"

    return (
        <footer className={`flex flex-col bg-fixed w-full px-20 py-8 bg-brand`} id="footer">
            <div className="flex justify-between pb-8 border-b-2 border-b-light">
                <div className={`${idiom === "ES"? "max-w-[50%]": "max-w-[37%]"}`}>
                    <h4 className={`font-montserrat font-black italic text-light text-5xl`}>{idiom !== "ES" ? "GOT A PROJECT? I AM AVAILABLE LET’S TO TALK.": "¿TIENES UN PROYECTO? ESTOY DISPONIBLE VAMOS A HABLAR."}</h4>
                </div>
                <div className=" w-[45%]">
                    <p className="font-montserrat font-medium text-light mb-6">{idiom === "ES"? textES: textUS}</p>
                    <Button textES="Contáctame" textUS="Get in touch" onClick={() => {}} />
                    <p className="font-montserrat font-bold text-lg mt-6 text-light">{idiom === "ES"? "Sigueme": "Follow me"}</p>
                    <div className="flex gap-4 pt-5">
                        {
                            socials.map(s => <SmallButton 
                                key={s.id}
                                image={s.image}
                                onClick={s.redirect}
                            />)
                        }
                    </div>
                </div>
            </div>

            <div>
                <p className="text-center font-montserrat font-medium pt-8 text-light">{idiom === "ES"? "©Copyright 2023 KIKE Derechos Reservados": "©Copyright 2023 KIKE Rights Reserved"}</p>
            </div>
        </footer>
    )
}

export default Footer;