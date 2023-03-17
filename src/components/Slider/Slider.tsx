import { useAppSelector } from "../../store/store";
import fireEmoji from "../../assets/Fire.png"
import { transition } from "../../App";

const Slider = () => {
    const mode = useAppSelector(state => state.view.mode);
    const idiom = useAppSelector(state => state.view.idiom);
    let textStyle = `${mode? "text-dark": "text-light"} font-montserrat font-black text-3xl italic`

    return (
        <div className={`${mode? "bg-light": "bg-dark"} ${transition} w-full h-24 overflow-hidden`}>
            <div className="flex items-center h-full w-[2920px] gap-4 animate-slider">
                <div>
                    <span className={`${textStyle} flex`}>#FullStakDeveloper<img className="h-9 mr-4" src={fireEmoji} alt="fire" /> #FrontendDeveloper<img className="h-9 mr-4" src={fireEmoji} alt="fire" /> #BackendDeveloper<img className="h-9 mr-4" src={fireEmoji} alt="fire" /> #DigitalDesigner<img className="h-9 mr-4" src={fireEmoji} alt="fire" /></span>
                </div>

                <div>
                    <span className={`${textStyle} flex`}>#FullStakDeveloper<img className="h-9 mr-4" src={fireEmoji} alt="fire" /> #FrontendDeveloper<img className="h-9 mr-4" src={fireEmoji} alt="fire" /> #BackendDeveloper<img className="h-9 mr-4" src={fireEmoji} alt="fire" /> #DigitalDesigner<img className="h-9 mr-4" src={fireEmoji} alt="fire" /></span>
                </div>
            </div>
        </div>
    )
}

export default Slider;