import { useNavigate } from 'react-router-dom'
import Button from '../../components/button/normalButton/Button'
import { useAppSelector } from '../../store/store'
import { modeParser, idiomParser } from '../../utils/modeView'
import { motion } from 'framer-motion'

const animatePres = {
  initial: { y: '60px', opacity: 0 },
  before: {
    y: [0, 0, 0, 0, 0],
    scale: [1, 1, 1, 1.2, 1],
    opacity: 1
  }
}

const PageNotFound = () => {
  const navigate = useNavigate()
  const mode = useAppSelector(state => state.view.mode)
  const idiom = useAppSelector(state => state.view.idiom)
  return (
    <div className={`flex justify-center ${modeParser(mode, true, 'bg')} items-center w-full h-screen`}>
      <div className='flex flex-col items-center justify-center w-full h-screen'>
        <motion.h1
        initial='initial'
        whileInView='before'
        variants={animatePres}
        transition={{ duration: 0.5 }}
        className={`font-montserrat font-black ${modeParser(mode, false, 'text')} text-8xl text-center`}>
          404
        </motion.h1>
        <motion.p
        initial='initial'
        whileInView='before'
        variants={animatePres}
        transition={{ duration: 0.5 }}
        className={`font-montserrat font-medium ${modeParser(mode, false, 'text', 'gray-700')} text-xl text-center pb-5`}>
          {idiomParser(idiom, 'Oops... Parece que esta pagina no esta disponible', 'Oops... It seems that this page is not available')}
        </motion.p>
        <Button
        textES='Volver al home'
        textUS='Back home'
        onClick={() => { navigate('/') }}
        />
      </div>
    </div>
  )
}

export default PageNotFound
