import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import PageNotFound from './pages/404/PageNotFound'
export const transition = 'transition-all duration-200'

function App () {
  return (
    <div>
      <Routes>
        <Route path='/hola' element={<PageNotFound />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
