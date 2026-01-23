import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Read from './pages/Read'
import Upload from './pages/Upload'
import Layout from './Layout'
import NotFound from './pages/notFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='read' element={<Read />} />
          <Route path='upload' element={<Upload />} />

          <Route path='*' element={<NotFound />} />
        </Route>

      </Routes>
    </BrowserRouter>

  )
}