import { transition } from '../../App'
import Projects from '../../components/projects/Projects'
import { useAppSelector } from '../../store/store'
import { idiomParser, modeParser } from '../../utils/modeView'

const LastProjects = () => {
  const idiom = useAppSelector(state => state.view.idiom)
  const mode = useAppSelector(state => state.view.mode)
  return (
    <section className={`${modeParser(mode, true, 'bg')} z-50 ${transition}`} id='projects'>
      <div>
        <h3 className={`${modeParser(mode, false, 'text')} ${transition} pb-10 px-12 md:px-0 font-montserrat font-black italic text-center text-2xl md:text-4xl`}>{idiomParser(idiom, 'Mis últimos proyectos de desarrollo', 'My latest development projects')}</h3>
        <Projects />
      </div>
    </section>
  )
}

export default LastProjects
