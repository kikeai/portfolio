import { Routes, Route } from "react-router-dom"
import Footer from "./layouts/footer/Footer";
import Home from "./pages/home/Home";
import { changeMode } from "./store/features/view";
import { useAppDispatch } from "./store/store";
export const transition = "transition-all duration-200"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
