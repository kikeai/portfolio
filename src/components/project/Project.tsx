import ImageButton from '../button/imageButton/ImageButton'
import { useAppSelector } from '../../store/store'
import { transition } from '../../App'
import Labels from '../labels/Labels'
import { labels } from '../../sections/lastProjects/utils'
import UrlButton from '../button/urlButton/UrlButton'
import { type PropsProject } from '../../types/types'
import { idiomParser, modeParser } from '../../utils/modeView'

const Project = ({ image, title, descriptionES, descriptionUS, url, reverse }: PropsProject) => {
  const mode = useAppSelector(state => state.view.mode)
  const idiom = useAppSelector(state => state.view.idiom)
  return (
    <div className={`flex flex-col ${reverse ? 'xl:flex-row-reverse' : 'xl:flex-row'} justify-between w-full items-center max-w-[1440px] px-12 xl:px-32`}>
      <div>
        <ImageButton image={image} onClick={url} />
      </div>

      <div className='flex flex-col gap-8 mt-8 mb-8 xl:mt-0 xl:mb-0 xl:max-w-[50%]'>
        <h3 className={`${modeParser(mode, false, 'text')} ${transition} font-montserrat font-black italic text-2xl xl:text-3xl`}>
          {title}
        </h3>
        <p className={`${modeParser(mode, false, 'text', 'gray-700')} ${transition} max-w-[600px] xl:max-w-none font-montserrat font-medium text-lg md:text-xl`}>
          {idiomParser(idiom, descriptionES, descriptionUS)}
        </p>
        <Labels labels={labels} />
        <div>
          <UrlButton
          onClick={url}
          />
        </div>
      </div>
    </div>
  )
}

export default Project
