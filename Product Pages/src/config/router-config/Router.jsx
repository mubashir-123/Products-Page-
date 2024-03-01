import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import About from '../../pages/About/About'
import Contact from '../../pages/Contact/Contact'
import Products from '../../pages/Products/Products'
import Navbar from '../../components/Navbar'
import Singleproduct from '../../pages/Singleproduct/Singleproduct'

const Router = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='About' element={<About />} />
          <Route path='Contact' element={<Contact />} />
          <Route path='Products' element={<Products />} />
          <Route path='Singleproduct/:id' element={<Singleproduct />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router