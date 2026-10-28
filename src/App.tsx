import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from '../src/pages/Home';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/apartamentos" element={<Apartments />} /> */}
        {/* <Route path="/apartamentos/:id" element={<ApartmentDetail />} /> */}
        {/* <Route path="/favoritos" element={<Favorites />} /> */}
        {/* <Route path="/contacto" element={<Contact />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  )
}

export default App