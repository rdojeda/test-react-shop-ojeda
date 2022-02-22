import './App.css';
import { NavBar } from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Item } from './components/Item';
import { HomePage } from './pages/HomePage';
import { ZapatillasPage } from './pages/ZapatillasPage';
import { RemerasPage } from './pages/RemerasPage';
import { CamperasPage } from './pages/CamperasPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { productos } from './data/productos';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/zapatillas" element={<ZapatillasPage />} />
          <Route path="/remeras" element={<RemerasPage />} />
          <Route path="/camperas" element={<CamperasPage />} />
          <Route path="/detalles/:id" element={<Item productos{...productos}/>}/>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
