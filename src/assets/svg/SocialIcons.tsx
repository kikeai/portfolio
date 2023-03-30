interface Props {
  icon: string
}

const SocialIcons = ({icon}: Props) => {
  return (
    icon === 'whatsapp' ? 
      <svg className="mr-3 h-6" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 30L2.58 22.2605C1.27086 20.0586 0.517241 17.489 0.517241 14.7414C0.517241 6.6 7.11724 0 15.2586 0C23.4 0 30 6.6 30 14.7414C30 22.8828 23.4 29.4828 15.2586 29.4828C12.7816 29.4828 10.4488 28.8688 8.4 27.7898L0 30Z" fill="#F4F4F4"/>
        <path d="M24.6636 19.6474C23.9829 18.361 21.4728 16.89 21.4728 16.89C20.9048 16.5662 20.2195 16.53 19.8957 17.1072C19.8957 17.1072 19.08 18.0853 18.8726 18.226C17.925 18.8679 17.0472 18.8431 16.1612 17.9571L14.1021 15.8979L12.0429 13.8388C11.1569 12.9527 11.1321 12.075 11.774 11.1274C11.9147 10.92 12.8928 10.1043 12.8928 10.1043C13.47 9.77999 13.4338 9.09516 13.11 8.52723C13.11 8.52723 11.639 6.01706 10.3526 5.33637C9.80534 5.04671 9.13345 5.14809 8.69586 5.58568L7.78655 6.49499C4.90189 9.37964 6.32224 12.6362 9.20689 15.5208L11.8433 18.1572L14.4797 20.7936C17.3643 23.6783 20.6209 25.0986 23.5055 22.214L24.4148 21.3046C24.8524 20.866 24.9533 20.1941 24.6636 19.6474Z" fill="#2CB742"/>
      </svg>
    : icon === 'linkedin' ? 
      <svg className="mr-3 h-6" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M52 52H41.3156V33.8021C41.3156 28.8128 39.4198 26.0245 35.4707 26.0245C31.1746 26.0245 28.9301 28.9261 28.9301 33.8021V52H18.6333V17.3333H28.9301V22.0029C28.9301 22.0029 32.026 16.2742 39.3826 16.2742C46.7357 16.2742 52 20.7645 52 30.0512V52ZM6.34935 12.794C2.84206 12.794 0 9.92966 0 6.39701C0 2.86436 2.84206 0 6.34935 0C9.85664 0 12.697 2.86436 12.697 6.39701C12.697 9.92966 9.85664 12.794 6.34935 12.794ZM1.03255 52H11.7694V17.3333H1.03255V52Z" fill="white"/>
      </svg>
    : <svg className="mr-3 h-6" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_105_9)">
        <path d="M2.72727 30H9.09091V14.5454L0 7.72726V27.2727C0 28.7818 1.22273 30 2.72727 30Z" fill="#4285F4"/>
        <path d="M30.9091 30H37.2727C38.7818 30 40 28.7773 40 27.2727V7.72726L30.9091 14.5454" fill="#34A853"/>
        <path d="M30.9091 2.72726V14.5454L40 7.72726V4.09089C40 0.718167 36.15 -1.20456 33.4545 0.818167" fill="#FBBC04"/>
        <path d="M9.09094 14.5454V2.72726L20 10.9091L30.9091 2.72726V14.5454L20 22.7273" fill="#EA4335"/>
        <path d="M0 4.09089V7.72726L9.09091 14.5454V2.72726L6.54546 0.818167C3.84546 -1.20456 0 0.718167 0 4.09089Z" fill="#C5221F"/>
        </g>
        <defs>
        <clipPath id="clip0_105_9">
        <rect width="40" height="30" fill="white"/>
        </clipPath>
        </defs>
      </svg>
  )
}

export default SocialIcons
