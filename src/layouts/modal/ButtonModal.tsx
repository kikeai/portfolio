type Props = {
    icon: string
    bgColor: string
    borderColor: string
    textColor: string
    text: string
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const ButtonModal = ({onClick, text,bgColor,borderColor,textColor, icon}: Props) => {
    return (
        <button
        onClick={onClick}
        className={`bg-${borderColor} rounded-lg transition-all w-full  duration-200 hover:cursor-pointer`}>
            <p className={`flex justify-center items-center ${bgColor === "whatsapp"? "bg-whatsapp" : bgColor === "linkedin"? "bg-linkedin": bgColor === "light"? "bg-light": "bg-dark"} text-${textColor} text-center rounded-md border-2 border-${borderColor}  py-2 px-6 2xl:py-3 2xl:px-7 translate-x-[-0.25em] translate-y-[-0.25em] transition-all duration-200 text-lg 2xl:text-2xl font-montserrat font-semibold active:translate-x-[0] active:translate-y-[0]`}>
                <img className="mr-3 h-6" src={icon} alt="icon" />{text}
            </p>
        </button>
    )
}

export default ButtonModal;