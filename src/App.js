import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Historial from "./components/play/record";
import Juego from "./components/play/play";
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
