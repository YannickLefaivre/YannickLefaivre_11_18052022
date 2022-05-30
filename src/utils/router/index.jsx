import { Routes, Route } from 'react-router-dom'
import Home from '../../routes/Home'
import AccommodationSheet from '../../routes/AccommodationSheet'
import About from '../../routes/About'
import NotFound from '../../routes/NotFound'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="accommodation-sheet/:id" element={<AccommodationSheet />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
