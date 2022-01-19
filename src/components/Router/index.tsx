import { Routes, Route } from 'react-router-dom';
import Country from '../../pages/Country';
import Home from '../../pages/Home';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/country/:countryId" element={<Country />} /> 
    </Routes>
  )
}

export default Router;