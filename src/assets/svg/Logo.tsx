import { transition } from "../../App"
import { useAppSelector } from "../../store/store"

const Logo = () => {
  const mode = useAppSelector(state => state.view.mode)
  return (
    <svg className="h-5 md:h-8" viewBox="0 0 125 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className={`${transition}`} d="M8.84511 0H19.8497L16.6499 11.5005L27.6101 0H41.0159L26.0127 14.6295L32.8807 32H21.1661L17.2218 21.7167L12.6119 26.1971L11.0046 32H0L8.84511 0Z" fill={`${mode? '#F4F4F4' : '#0D0D0E'}`}/>
      <path className={`${transition}`} d="M39.9903 20.6625L35.553 21.8077L38.0478 12.799L42.4851 11.6586L45.7096 0H56.3888L53.963 8.77868L58.43 7.63342L55.9401 16.6852L51.4683 17.8305L47.5634 32H36.8842L39.9903 20.6625Z" fill={`${mode? '#F4F4F4' : '#0D0D0E'}`}/>
      <path className={`${transition}`} d="M63.1385 0H74.1431L70.9482 11.5005L81.9035 0H95.3092L80.3061 14.6295L87.1741 32H75.4645L71.5202 21.7167L66.9102 26.1971L65.3128 32H54.2934L63.1385 0Z" fill={`${mode? '#F4F4F4' : '#0D0D0E'}`}/>
      <path className={`${transition}`} d="M96.9165 0H125.02L122.555 8.77868H105.298L104.401 12.0228H120.489L118.374 19.752H102.281L101.295 23.2261H118.793L116.392 32H88.0764L96.9165 0Z" fill={`${mode? '#F4F4F4' : '#0D0D0E'}`}/>
      <path className={`${transition}`} d="M39.9903 20.6625L51.4683 17.8305L53.963 8.77867L42.4851 11.6586L39.9903 20.6625Z" fill={`${mode? '#0D0D0E' : '#F4F4F4'}`}/>
    </svg>
  )
}

export default Logo