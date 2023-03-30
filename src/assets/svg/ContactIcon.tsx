import { transition } from "../../App"
import { useAppSelector } from "../../store/store"

const ContactIcon = () => {
  const mode = useAppSelector(state => state.view.mode)
  return (
    <svg className="pr-3 h-6" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className={`${transition}`} fill-rule="evenodd" clip-rule="evenodd" d="M0.94 4.41201C0.65235 4.59179 0.415152 4.84178 0.250713 5.13847C0.0862749 5.43516 -8.00022e-07 5.7688 0 6.10801V14C0 14.5304 0.210714 15.0391 0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16H14C14.5304 16 15.0391 15.7893 15.4142 15.4142C15.7893 15.0391 16 14.5304 16 14V6.10801C16 5.7688 15.9137 5.43516 15.7493 5.13847C15.5848 4.84178 15.3476 4.59179 15.06 4.41201L9.06 0.662006C8.74214 0.463341 8.37484 0.358002 8 0.358002C7.62516 0.358002 7.25786 0.463341 6.94 0.662006L0.94 4.41201ZM3.555 6.83501C3.44574 6.76212 3.32319 6.71147 3.19436 6.68595C3.06553 6.66043 2.93293 6.66053 2.80413 6.68625C2.67534 6.71197 2.55287 6.76281 2.44372 6.83586C2.33457 6.90891 2.24088 7.00275 2.168 7.11201C2.09512 7.22127 2.04447 7.34381 2.01894 7.47265C1.99342 7.60148 1.99352 7.73408 2.01924 7.86287C2.07119 8.12299 2.22434 8.35181 2.445 8.49901L7.445 11.832C7.60933 11.9416 7.80245 12.0002 8 12.0002C8.19755 12.0002 8.39067 11.9416 8.555 11.832L13.555 8.49901C13.7757 8.35181 13.9288 8.12299 13.9808 7.86287C14.0327 7.60276 13.9792 7.33267 13.832 7.11201C13.6848 6.89135 13.456 6.7382 13.1959 6.68625C12.9358 6.6343 12.6657 6.68781 12.445 6.83501L8 9.79801L3.555 6.83501Z" fill={`${mode? '#F4F4F4' : '#0D0D0E'}`}/>
    </svg>
  )
}

export default ContactIcon