import { useAppSelector } from '../../store/store'
import photoMe from '../../assets/me-bg.png'
import photoMeDark from '../../assets/me-bg-dark.png'
import manEmoji from '../../assets/man.png'
import { transition } from '../../App'
import Button from '../../components/button/normalButton/Button'
import { motion } from 'framer-motion'
import { idiomParser, modeParser } from '../../utils/modeView'
import { aboutMeEN, aboutMeES } from '../../utils/texts'

const About = () => {
  const mode = useAppSelector(state => state.view.mode)
  const idiom = useAppSelector(state => state.view.idiom)

  return (
    <section className={`flex justify-center px-12 md:px-20 py-24 ${mode ? 'bg-dark' : 'bg-light'} ${transition}`} id='about'>
      <div className='flex flex-col-reverse md:flex-row justify-between items-center max-w-[1440px]'>
        <div className='flex flex-col items-center md:max-w-[45%] '>
          <motion.div
          initial={{
            y: '60px',
            opacity: 0
          }}
          whileInView={{
            y: 0,
            opacity: 1
          }}
          transition={{ duration: 0.7 }}
          className='w-full pb-14'>
            <h3 className={`flex ${modeParser(mode, false, 'text')} ${transition} mb-5 text-4xl 2xl:text-5xl font-montserrat font-black italic`}>{idiomParser(idiom, 'Sobre mí', 'About me')}<img className='h-9 ml-3 2xl:h-11' src={manEmoji} alt='emoji'/></h3>
            <p className={`${modeParser(mode, true, 'text', 'gray-700')}  ${transition} font-montserrat text-base 2xl:text-xl font-medium`}>{idiomParser(idiom, aboutMeES, aboutMeEN)}</p>
          </motion.div>
          <Button onClick={() => { window.open('https://drive.google.com/drive/folders/1aUr9KTQNYygWkg2HFarNJXI7-JdUPChJ?usp=share_link') }} textES='Descargar CV' textUS='Download resume' />
        </div>

        <motion.div
        initial={{
          y: '60px',
          opacity: 0
        }}
        whileInView={{
          y: 0,
          opacity: 1
        }}
        transition={{ duration: 0.7 }}
        className='mb-7 md:m-0 md:max-w-[45%]'>
          <img className='' src={mode ? photoMeDark : photoMe} alt='Luis Garcia' />
        </motion.div>
      </div>
    </section>
  )
}

export default About
