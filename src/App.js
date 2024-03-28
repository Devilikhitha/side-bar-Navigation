import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Main from './components/Main'
import Accommodation from './components/Accommodation'
import About from './components/About'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import './App.css'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './components/Footer'
import Room from './components/BookForm'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/accommodation' element={<Accommodation/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/bookform' element={<Room/>}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}
