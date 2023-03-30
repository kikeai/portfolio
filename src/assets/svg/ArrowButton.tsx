import { transition } from "../../App"
import { useAppSelector } from "../../store/store"

const ArrowButton = () => {
  const mode = useAppSelector(state => state.view.mode)
  return (
    <svg className={`rounded-full  border-2 ${mode? "border-light": "border-dark"} ${transition} translate-x-[-0.20em] translate-y-[-0.20em] active:translate-x-[0] active:translate-y-[0]`} width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle className={`${transition}`} cx="32.5" cy="32.5" r="32.5" fill={`${mode? '#0D0D0E' : '#F4F4F4'}`}/>
      <path className={`${transition}`} d="M45 22C45 20.8954 44.1046 20 43 20L25 20C23.8954 20 23 20.8954 23 22C23 23.1046 23.8954 24 25 24L41 24L41 40C41 41.1046 41.8954 42 43 42C44.1046 42 45 41.1046 45 40L45 22ZM21.4142 46.4142L44.4142 23.4142L41.5858 20.5858L18.5858 43.5858L21.4142 46.4142Z" fill={`${mode? '#F4F4F4' : '#0D0D0E'}`}/>
    </svg>  
  )
}

export default ArrowButton
