import { useAppDispatch, useAppSelector } from '../../store/store'
import { OpenCloseModal, OpenCloseSidePanel } from '../../store/features/popups'
import Header from './header/Header'
import ModeIdiom from './ModeIdiom/ModeIdiom'
import ButtonSection from './buttonSection/ButtonSection'

const Sidepanel = () => {
  const dispatch = useAppDispatch()
  const mode = useAppSelector(state => state.view.mode)
  const idiom = useAppSelector(state => state.view.idiom)
  const openClose = useAppSelector(state => state.popups.sidepanel)

  return (
    <div className={`flex flex-row-reverse fixed z-50 backdrop-blur ${openClose ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-all ease-in-out duration-500 ${mode ? 'bg-light/60' : 'bg-dark/60'} w-full`}>
      <div className={`${mode ? 'bg-dark' : 'bg-light'} ${openClose ? 'translate-x-0' : 'translate-x-[100%]'} transition-all ease-in-out duration-500 w-3/4 max-w-[400px] h-screen`}>
        <Header />
        <ModeIdiom />
        <ButtonSection
        icon='aboutMe'
        text={idiom === 'ES' ? 'Sobre mí' : 'About me'}
        onClick={() => {
          window.location.replace('/#about')
          dispatch(OpenCloseSidePanel())
        }}
        />

        <ButtonSection
        icon='projects'
        text={idiom === 'ES' ? 'Proyectos' : 'Projects'}
        onClick={() => {
          window.location.replace('/#projects')
          dispatch(OpenCloseSidePanel())
        }}
        />

        <ButtonSection
        icon='contact'
        text={idiom === 'ES' ? 'Contacto' : 'Contact'}
        onClick={() => {
          dispatch(OpenCloseModal())
          dispatch(OpenCloseSidePanel())
        }}
        />
      </div>
    </div>
  )
}

export default Sidepanel
