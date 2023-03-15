import { Routes, Route } from "react-router-dom"
import Footer from "./sections/Footer";
import Prueba from "./sections/Prueba";


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Prueba />} />
      </Routes>
    </div>
  )
}

export default App
