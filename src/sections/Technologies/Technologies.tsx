import { useAppSelector } from '../../store/store'
import { transition } from '../../App'
import Cards from '../../components/Cards/Cards'
import { idiomParser, modeParser } from '../../utils/modeView'

const Technologies = () => {
  const idiom = useAppSelector(state => state.view.idiom)
  const mode = useAppSelector(state => state.view.mode)

  return (
    <section className={`flex items-center justify-center pt-10 ${modeParser(mode, true, 'bg')} ${transition} px-12 w-full pb-28`} id='techs'>
      <div className='flex flex-col items-center w-full max-w-[1440px]'>
        <h3 className={`${modeParser(mode, false, 'text')} ${transition} pb-10 font-montserrat font-black italic text-center text-3xl sm:text-4xl`}>{idiomParser(idiom, 'Tecnologías que uso', 'Technologies that I use')}</h3>
        <Cards/>
      </div>
    </section>
  )
}

export default Technologies
