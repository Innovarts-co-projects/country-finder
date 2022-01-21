import { Routes, Route } from 'react-router-dom';
import Country from '../../pages/Country';
import Home from '../../pages/Home';

interface RouterProps {
  currentTheme: string,
}

function Router({currentTheme}: RouterProps) {
  return (
    <Routes>
      <Route path="/" element={<Home currentTheme={currentTheme} />} />
      <Route path="/country/:countryId" element={<Country />} /> 
    </Routes>
  )
}

export default Router;