import javascriptWhite from '../../assets/javascript-logo-negro.svg'
import javascriptBlack from '../../assets/javascript-logo-blanco.svg'
import reactWhite from '../../assets/react-negro.svg'
import reactBlack from '../../assets/react-blanco.svg'
import reduxWhite from '../../assets/redux-negro.svg'
import reduxBlack from '../../assets/redux-blanco.svg'
import nodeWhite from '../../assets/node-negro.svg'
import nodeBlack from '../../assets/node-blanco.svg'
import typescriptWhite from '../../assets/typescript-negro.svg'
import typescriptBlack from '../../assets/typescript-blanco.svg'
import expressWhite from '../../assets/express-negro.svg'
import expressBlack from '../../assets/express-blanco.svg'
import postgresWhite from '../../assets/postgres-negro.svg'
import postgresBlack from '../../assets/postgres-blanco.svg'
import gitWhite from '../../assets/git-negro.svg'
import gitBlack from '../../assets/git-blanco.svg'
import htmlWhite from '../../assets/html-negro.svg'
import htmlBlack from '../../assets/html-blanco.svg'
import cssWhite from '../../assets/css-negro.svg'
import cssBlack from '../../assets/css-blanco.svg'
import tailwindWhite from '../../assets/tailwind-negro.svg'
import tailwindBlack from '../../assets/tailwind-blanco.svg'
import githubWhite from '../../assets/github-negro.svg'
import githubBlack from '../../assets/github-blanco.svg'

export interface Technology {
  id: number
  name: string
  imageLight: string
  imageDark: string
  url: string
}

export const techs1: Technology[] = [
  {
    id: 1,
    name: 'JavaScript',
    imageDark: javascriptBlack,
    imageLight: javascriptWhite,
    url: 'https://www.javascript.com/'
  },
  {
    id: 2,
    name: 'ReactJS',
    imageDark: reactBlack,
    imageLight: reactWhite,
    url: 'https://react.dev/'
  },
  {
    id: 3,
    name: 'Redux',
    imageDark: reduxBlack,
    imageLight: reduxWhite,
    url: 'https://redux.js.org/'
  },
  {
    id: 4,
    name: 'NodeJS',
    imageDark: nodeBlack,
    imageLight: nodeWhite,
    url: 'https://nodejs.org/en/docs'
  }
]

export const techs2: Technology[] = [
  {
    id: 5,
    name: 'TypeScript',
    imageDark: typescriptBlack,
    imageLight: typescriptWhite,
    url: 'https://www.typescriptlang.org/'
  },
  {
    id: 6,
    name: 'Express',
    imageDark: expressBlack,
    imageLight: expressWhite,
    url: 'https://expressjs.com/'
  },
  {
    id: 7,
    name: 'PostgreSQL',
    imageDark: postgresBlack,
    imageLight: postgresWhite,
    url: 'https://www.postgresql.org/docs/'
  },
  {
    id: 8,
    name: 'GIT',
    imageDark: gitBlack,
    imageLight: gitWhite,
    url: 'https://git-scm.com/doc'
  }
]

export const techs3: Technology[] = [
  {
    id: 9,
    name: 'HTML5',
    imageDark: htmlBlack,
    imageLight: htmlWhite,
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
  },
  {
    id: 10,
    name: 'CSS3',
    imageDark: cssBlack,
    imageLight: cssWhite,
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
  },
  {
    id: 11,
    name: 'TailwindCSS',
    imageDark: tailwindBlack,
    imageLight: tailwindWhite,
    url: 'https://tailwindcss.com/docs/installation'
  },
  {
    id: 12,
    name: 'GitHub',
    imageDark: githubBlack,
    imageLight: githubWhite,
    url: 'https://github.com/'
  }
]
