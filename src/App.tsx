import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Apartments from "./features/apartment/pages/Apartments";
import ApartmentDetail from "./features/apartment/pages/ApartmentDetail";
import Home from "./features/home/pages/Home";
import Contact from './features/contact/pages/Contact'
import Favorites from './features/favorite/pages/Favorites'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/apartamentos" element={<Apartments />} />
      <Route path="/apartment/:id" element={<ApartmentDetail />} />
      <Route path="/favoritos" element={<Favorites />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="*" element={<NotFound />} /> 
      </Route>
    </Routes>
  )
}

export default App