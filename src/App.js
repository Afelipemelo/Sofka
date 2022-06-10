import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/nabar/NavBar";
import Historial from "./components/juego/historial";
import Juego from "./components/juego/juego";
import './style/style.css'
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path='/' element={<Historial/>} />
        <Route path='/Historial' element={<Historial/>} />
        <Route path='/Juego' element={<Juego/>} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
