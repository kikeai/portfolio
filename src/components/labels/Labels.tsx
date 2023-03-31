import Label from '../label/Label'

export interface LabelType {
  textUS: string
  textES: string
}

interface Props {
  labels: LabelType[]
}

const Labels = ({ labels }: Props) => {
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
