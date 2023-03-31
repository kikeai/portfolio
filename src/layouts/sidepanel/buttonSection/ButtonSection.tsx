import { transition } from '../../../App'
import AboutMeIcon from '../../../assets/svg/AboutMeIcon'
import ContactIcon from '../../../assets/svg/ContactIcon'
import ProjectsIcon from '../../../assets/svg/ProjectsIcon'
import { useAppSelector } from '../../../store/store'

interface Props {
  icon: string
  text: string
  onClick: React.MouseEventHandler<HTMLDivElement>
}

const ButtonSection = ({ icon, text, onClick }: Props) => {
  const mode = useAppSelector(state => state.view.mode)
  return (
    <div
    className={`w-full px-6 ${transition} border-l-4 ${mode ? 'border-l-dark hover:bg-neutral-800 hover:border-l-neutral-600' : 'border-l-light hover:bg-neutral-300 hover:border-l-neutral-500'} hover:cursor-pointer`}
    onClick={onClick}>
      <p
      className={`flex items-center font-montserrat py-6 font-semibold ${transition} ${mode ? 'text-light' : 'text-dark'} text-right text-lg`}>
        {icon === 'aboutMe' ? <AboutMeIcon/> : icon === 'projects' ? <ProjectsIcon/> : <ContactIcon/>}{text}
      </p>
    </div>
  )
}

export default ButtonSection
