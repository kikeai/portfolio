import { transition } from "../../App"
import { useAppSelector } from "../../store/store"

const CloseIcon = () => {
  const mode = useAppSelector(state => state.view.mode)
  return (
    <svg className="h-4" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className={`${transition}`} d="M1 1L13 13M1 13L13 1L1 13Z" stroke={`${mode? '#F4F4F4' : '#0D0D0E'}`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export default CloseIcon
