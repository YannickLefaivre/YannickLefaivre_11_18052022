import { Routes, Route } from 'react-router-dom'
import AccommodationIdValidator from './AccommodationIdValidator'
import Home from '../../routes/Home'
import About from '../../routes/About'
import NotFound from '../../routes/NotFound'

/* 
  see https://github.com/YannickLefaivre/YannickLefaivre_11_18052022/blob/develop/src/utils/router/AccommodationIdValidator.jsx for an explanation of the AccommodationIdValidator component role
*/
export default function Router() {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route
        path="accommodation-sheet/:id"
        element={<AccommodationIdValidator />}
      />
      <Route path="about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
