import { useAppDispatch, useAppSelector } from '../../store/store'
import { presentationES, presentationEN, title1ES, title1EN, title2ES, title2EN, descriptionES, descriptionEN } from '../../utils/texts'
import hand from '../../assets/hand.png'
import { transition } from '../../App'
import Button from '../../components/button/normalButton/Button'
import Header from '../../layouts/header/Header'
import Slider from '../../components/Slider/Slider'
import { motion } from 'framer-motion'
import { OpenCloseModal } from '../../store/features/popups'
import { idiomParser, modeParser } from '../../utils/modeView'
import { useNavigate } from 'react-router-dom'

const animatePres = {
  initial: { y: '60px', opacity: 0 },
  before: {
    y: [0, 0, 0, 0, 0],
    scale: [1, 1, 1, 1.5, 1],
    opacity: 1
  }
}

const Presentation = () => {
  const dispatch = useAppDispatch()
  const idiom = useAppSelector(state => state.view.idiom)
  const mode = useAppSelector(state => state.view.mode)
  const navigate = useNavigate()
  return (
    <section className={`flex flex-col justify-between items-center ${modeParser(mode, true, 'bg')} ${transition} w-full h-screen`} id='presentation'>
      <Header />
        <div className='w-full h-20 md:h-28'></div>
          <div className='flex flex-col items-center justify-center'>
            <motion.h4
            initial='initial'
            whileInView='before'
            variants={animatePres}
            transition={{ duration: 0.5 }}
            className={`flex ${modeParser(mode, false, 'text')} ${transition} text-center mb-2 md:mb-5 font-montserrat font-medium text-1xl sm:text-2xl md:text-3xl 2xl:text-4xl`}>
              {idiomParser(idiom, presentationES, presentationEN)} <img className='pl-2 h-5 sm:h-7 md:h-8 2xl:h-9' src={hand} alt='hand'/>
            </motion.h4>

            <motion.h2
            initial='initial'
            whileInView='before'
            variants={animatePres}
            transition={{ duration: 0.5 }}
            className={`${modeParser(mode, false, 'text')} ${transition} text-center font-montserrat font-black italic text-3xl sm:text-4xl md:text-6xl 2xl:text-7xl mb-2`}>
              {idiomParser(idiom, title1ES, title1EN)}
            </motion.h2>

            <motion.h2
            initial='initial'
            whileInView='before'
            variants={animatePres}
            transition={{ duration: 0.5 }}
            className={`${modeParser(mode, false, 'text')} ${transition} text-center font-montserrat font-black italic text-3xl sm:text-4xl md:text-6xl 2xl:text-7xl`}>
              {idiomParser(idiom, title2ES, title2EN)}
            </motion.h2>

            <motion.p
            initial='initial'
            whileInView='before'
            variants={animatePres}
            transition={{ duration: 0.5 }}
            className={`${modeParser(mode, false, 'text', 'gray-700')} ${transition} text-center font-montserrat font-medium text-sm md:text-lg max-w-[300px] sm:max-w-[450px] md:max-w-[600px] 2xl:max-w-[800px] 2xl:text-2xl mt-4 md:mt-7`}>
              {idiomParser(idiom, descriptionES, descriptionEN)}
            </motion.p>

            <div className='flex mt-10 gap-5 md:gap-8'>
              <Button onClick={() => { dispatch(OpenCloseModal()) }} textES='Contáctame' textUS='Get in touch' />
              <Button onClick={() => {
                // window.location.replace('/#projects')
                navigate('/hola')
              }} textES='Ver proyectos' textUS='View projects' />
            </div>
        </div>
      <Slider />
    </section>
  )
}

export default Presentation
