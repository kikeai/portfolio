import { useAppSelector } from "../../store/store";
import fireEmoji from "../../assets/Fire.png"
import { transition } from "../../App";

const Slider = () => {
    const mode = useAppSelector(state => state.view.mode);
    const idiom = useAppSelector(state => state.view.idiom);
    let textStyle = `${mode? "text-light": "text-dark"} font-montserrat font-black text-3xl 2xl:text-[42px] 2xl:w-[1920px] italic`
    let fire = <img className="h-9 2xl:h-10 mr-4" src={fireEmoji} alt="fire" />;

    return (
        <div className={`${mode? "bg-dark": "bg-light"} ${transition} w-full h-24 2xl:h-32 text- overflow-hidden`}>
            <div className="flex items-center h-full w-[2920px] 2xl:w-[3820px] gap-4 2xl:gap-4 animate-slider 2xl:animate-sliderxl">
                <div>
                    <span className={`${textStyle} flex`}>#FullStakDeveloper{fire} #FrontendDeveloper{fire} #BackendDeveloper{fire} #DigitalDesigner{fire}</span>
                </div>

                <div className="m-0 2xl:ml-[80px]">
                    <span className={`${textStyle} flex`}>#FullStakDeveloper{fire} #FrontendDeveloper{fire} #BackendDeveloper{fire} #DigitalDesigner{fire}</span>
                </div>
            </div>
        </div>
    )
}

export default Slider;