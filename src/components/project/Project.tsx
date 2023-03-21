import ImageButton from "../button/imageButton/ImageButton";
import wikidogs from "../../assets/wikidogs-app.png"
import { useAppSelector } from "../../store/store";
import { transition } from "../../App";
import Labels from "../labels/Labels";
import { labels } from "../../sections/lastProjects/utils";
import arrowButton from "../../assets/arrow-button.svg";
import arrowButtonBlack from "../../assets/arrow-button-black.svg";
import UrlButton from "../button/urlButton/UrlButton";

export interface Props {
    image: string
    title: string
    descriptionES: string
    descriptionUS: string
    url: React.MouseEventHandler<HTMLButtonElement>
    reverse: boolean
}

const Project = ({image, title, descriptionES, descriptionUS, url, reverse}: Props) => {
    const mode = useAppSelector(state => state.view.mode);
    const idiom = useAppSelector(state => state.view.idiom);
    return (
        <div className={`flex flex-col ${reverse? "xl:flex-row-reverse": "xl:flex-row"} justify-between w-full items-center max-w-[1440px] px-12 xl:px-32`}>
            <div>
                <ImageButton image={image} onClick={url} />
            </div>

            <div className="flex flex-col gap-8 mt-8 mb-8 xl:mt-0 xl:mb-0 xl:max-w-[50%]">
                <h3 className={`${mode? "text-light": "text-dark"} ${transition} font-montserrat font-black italic text-2xl xl:3xl`}>{title}</h3>
                <p className={`${mode? "text-light": "text-gray-700"} ${transition} max-w-[600px] xl:max-w-none font-montserrat font-medium text-lg md:text-xl`}>{idiom === "ES"? descriptionES: descriptionUS}</p>
                <Labels labels={labels} />
                <div>
                    <UrlButton image={mode? arrowButtonBlack: arrowButton} onClick={url} />
                </div>
            </div>
        </div>
    )
}

export default Project;