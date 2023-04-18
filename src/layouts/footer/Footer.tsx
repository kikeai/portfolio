import Button from '../../components/button/normalButton/Button'
import SmallButton from '../../components/button/smallButton/SmallButton'
import { OpenCloseModal } from '../../store/features/popups'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { socials } from './socials'
import { footerTextES, footerTextEN, footerTittleES, footerTittleEN, footerCopyES, footerCopyEN } from '../../utils/texts'
import { idiomParser } from '../../utils/modeView'

const Footer = () => {
  const dispatch = useAppDispatch()
  const idiom = useAppSelector(state => state.view.idiom)

  return (
    <footer className='flex justify-center w-full px-12 md:px-20 pt-16 pb-8 bg-brand' id='footer'>
      <div className='flex flex-col w-full max-w-[1440px]'>

        <div className='flex flex-col md:flex-row justify-between pb-8 border-b-2 border-b-light'>

          <div className={`${idiom === 'ES' ? 'max-w-[700px]' : 'max-w-[470px]'}`}>
            <h4 className='font-montserrat font-black italic text-light text-2xl md:text-5xl'>
              {idiomParser(idiom, footerTittleES, footerTittleEN)}
            </h4>
          </div>

          <div className=' w-full md:w-[45%]'>
            <p className='font-montserrat font-medium text-light mb-6'>
              {idiomParser(idiom, footerTextES, footerTextEN)}
            </p>

            <Button
            textES='Contáctame'
            textUS='Get in touch'
            onClick={() => { dispatch(OpenCloseModal()) }} />

            <p className='font-montserrat font-bold text-lg mt-6 text-light'>
              {idiomParser(idiom, 'Sígueme', 'Follow me')}
            </p>

            <div className='flex gap-4 pt-5'>
              {
                socials.map(s =>
                  <SmallButton
                  key={s.id}
                  image={s.image}
                  onClick={s.redirect}
                />)
              }
            </div>

          </div>

        </div>

        <div>
          <p className='text-center font-montserrat font-medium pt-8 text-light'>
            {idiomParser(idiom, footerCopyES, footerCopyEN)}
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
