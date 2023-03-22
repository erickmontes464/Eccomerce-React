import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './componentes/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Categorias from './pages/Categorias';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='categorias' element={<Categorias />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
