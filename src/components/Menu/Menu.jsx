import React from 'react'
import {Link} from 'react-router-dom'
import css from '../Menu/Menu.module.css'
import Section from '../Section/Section'

const Menu = () => {
  return (
    <Section sectionClass={css.menu}>
      <ul className={css.menuUl}>
        <li className={css.menuLi}>
          <Link to="/">STRONA GŁÓWNA</Link>
        </li>
        <li className={css.menuLi}>
          <Link to="/webinary-i-filmy">WEBINARY I FILMY</Link>
        </li>
        <li className={css.menuLi}>
          <Link to="/materialy-do-korzystania-w-terapii">
            MATERIAŁY DO KORZYSTANIA W TERAPII
          </Link>
        </li>
        <li className={css.menuLi}>
          <Link to="/kontakt">KONTAKT</Link>
        </li>
        <li className={css.menuLi}>
          <Link to="/o-nas">O NAS</Link>
        </li>
      </ul>
    </Section>
  )
}

export default Menu
