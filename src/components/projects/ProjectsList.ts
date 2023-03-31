import { type Props } from '../project/Project'
import unBardo from '../../assets/unbardo-app.png'
import wikidog from '../../assets/wikidogs-app.png'
import RaM from '../../assets/rick-and-morty-app.png'

const projectList: Props[] = [
  {
    image: unBardo,
    title: 'unBardo E-Commerce',
    descriptionES: 'diseño de pagina web para una marca deportiva, donde se puede comprar ropa deportiva de alta calidad',
    descriptionUS: 'Website design for a sports brand, where you can buy high quality sportswear',
    url: () => { window.open('https://unbardo.com.ar/') },
    reverse: false
  },
  {
    image: wikidog,
    title: 'WikiDogs S.P.A',
    descriptionES: 'Diseño de aplicación de una sola página, donde puedes buscar y crear razas de perros.',
    descriptionUS: 'Single page app design, where you can search and create dog breeds',
    url: () => { window.open('https://pi-dogs-umber-tau.vercel.app/') },
    reverse: true
  },
  {
    image: RaM,
    title: 'Rick & Morty S.P.A',
    descriptionES: 'Diseño de aplicación de una sola página, donde puede buscar y agregar personajes favoritos de rick and morty',
    descriptionUS: 'Single page app layout, where you can search and add to favorites rick and morty characters',
    url: () => { window.open('https://kikeai.github.io/rick_and_morty/build') },
    reverse: false
  }
]

export default projectList
