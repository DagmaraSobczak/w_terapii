import {Routes, Route} from 'react-router-dom'
import React from 'react'
import 'modern-normalize/modern-normalize.css'
import Home from './pages/Home/Home'
import Webinars from './pages/Webinars/Webinars'
import Materials from './pages/Materials/Materials'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Menu from './components/Menu/Menu.jsx'
import Banner from './components/Banner/Banner.jsx'
import BannerPicture from './components/BannerPicture/BannerPicture.jsx'
import Books from './pages/Books/Books'
import News from './pages/News/News'
import Login from './pages/Login/Login'
import KnowledgeBase from './pages/KnowledgeBase/KnowledgeBase'
function App() {
  return (
    <>
      {' '}
      <BannerPicture />
      <Menu />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/webinary-i-filmy" element={<Webinars />} />
        <Route
          path="/materialy-do-korzystania-w-terapii"
          element={<Materials />}
        />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/o-nas" element={<About />} />
        <Route path="/ksiazki" element={<Books />} />
        <Route path="/nowosci" element={<News />} />
        <Route path="/baza-wiedzy" element={<KnowledgeBase />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
