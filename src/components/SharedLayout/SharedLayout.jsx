import {useState, useEffect, useRef, Suspense} from 'react'
import {NavLink, Outlet, useLocation} from 'react-router-dom'
import Nav from '../Nav/Nav'
//import Footer from '../Footer/Footer';
import sprite from '../../assets/svg/sprite.svg'
//import css from './SharedLayout.module.css';
import navigationData from '../../components/Nav/index.js'

const SharedLayout = () => {
  const setNavIsOpen = () => {}

  return (
    <div>
      <Nav setNavIsOpen={setNavIsOpen} />
      <Outlet /> {/* Outlet dla renderowania zawartości podstron */}
    </div>
  )
}

export default SharedLayout
