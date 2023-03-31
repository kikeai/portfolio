import Label from '../label/Label'
import { type PropsLabel } from '../../types/types'

const Labels = ({ labels }: PropsLabel) => {
  return (
    <div className='flex flex-wrap gap-3 xl:gap-5'>
      {
        labels.map(l =>
          <Label
          key={l.textES + l.textUS}
          textES={l.textES}
          textUS={l.textUS}
        />)
      }
    </div>
  )
}

export default Labels
