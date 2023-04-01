import menuIconDark from '../../assets/menu-negro.svg'
import menuIconlight from '../../assets/menu-blanco.svg'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { changeIdiom, changeMode } from '../../store/features/view'
import { transition } from '../../App'
import { FormControlLabel } from '@mui/material'
import MaterialUISwitch from './togle'
import { motion } from 'framer-motion'
import { OpenCloseModal, OpenCloseSidePanel } from '../../store/features/popups'
import Logo from '../../assets/svg/Logo'

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { x: '100%', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1
  }
}

const Header = () => {
  const dispatch = useAppDispatch()
  const idiom = useAppSelector(state => state.view.idiom)
  const mode = useAppSelector(state => state.view.mode)
  const textHeader = `${mode ? 'text-light' : 'text-gray-600'} ${transition} text-lg 2xl:text-2xl font-montserrat`

  return (
    <header className={`fixed top-0 backdrop-blur z-40 flex px-12 h-20 justify-center items-center border-b ${transition} ${mode ? 'border-b-dark' : 'border-b-light'} lg:px-20 lg:h-28 w-full`}>
      <div className='flex justify-between w-full max-w-[1440px]'>
        <motion.div
          initial={{
            x: '-100%'
          }}
          animate={{
            x: 0,
            scale: [1, 1, 1.5, 1]
          }}
          className='flex items-center'>
          <Logo />
        </motion.div>

        <motion.div
        variants={container}
        initial='hidden'
        animate='visible'
        className='hidden lg:flex lg:items-center lg:gap-12 lg:visible'>
          <FormControlLabel
          checked={mode}
          onChange={() => dispatch(changeMode())}
          control={<MaterialUISwitch sx={{ m: 1 }} />}
          label=''
          />

          <motion.a
          variants={item}
          className={`${textHeader} font-medium hover:underline hover:text-brand`}
          href='#about'>
            {idiom === 'ES' ? 'Sobre mí' : 'About me'}
          </motion.a>

          <motion.a
          variants={item}
          className={`${textHeader} font-medium hover:underline hover:text-brand`}
          href='#projects'>
            {idiom === 'ES' ? 'Proyectos' : 'Projects'}
          </motion.a>

          <motion.p
          variants={item}
          className={`${textHeader} font-medium hover:underline hover:text-brand hover:cursor-pointer`}
          onClick={() => dispatch(OpenCloseModal())}>
            {idiom === 'ES' ? 'Contacto' : 'Contact'}
          </motion.p>

          <motion.p
          variants={item}
          className={`${textHeader} font-bold border-2 border-transparent rounded-lg px-2 hover:cursor-pointer hover:bg-gray-600 hover:border-gray-300 hover:text-light`}
          onClick={() => dispatch(changeIdiom())}>
            {idiom}
          </motion.p>

        </motion.div>

        <div
        className='flex items-center lg:hidden'>
          <img
          className='hover:cursor-pointer h-4 md:h-5'
          onClick={() => dispatch(OpenCloseSidePanel())}
          src={mode ? menuIconlight : menuIconDark}
          alt='menu' />
        </div>
      </div>
    </header>
  )
}

export default Header
