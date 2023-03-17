import { Link } from "react-router-dom"
import { transition } from "../../App"
import { useAppSelector } from "../../store/store"

type Props = {
    name: string
    imageLight: string
    imageDark: string
    url: string
}

const Card = ({name, imageDark, imageLight, url}: Props) => {
    const mode = useAppSelector(state => state.view.mode);
    return (
        <Link to={url} target="_blank">
            <div className={`${mode? "bg-light": "bg-dark"} ${transition} rounded-2xl`}>
                <div className={`flex flex-col items-center justify-center px-8 py-6 ${transition} ${mode? "bg-dark": "bg-light"} border-2 ${mode? "border-light": "border-dark"} w-60 h-60 rounded-2xl hover:translate-x-[-0.4em] hover:translate-y-[-0.4em] active:translate-x-0 active:translate-y-0`}>
                    <img className={`${transition}`} src={mode? imageDark: imageLight} alt="name" />
                    <p className={`${mode? "text-light": "text-dark"} ${transition} font-montserrat font-bold text-2xl mt-6`}>{name}</p>
                </div>
            </div>
        </Link>
    )
}

export default Card;