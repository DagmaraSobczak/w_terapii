import {useState} from 'react'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'
import routes from './index'
import css from './Nav.module.css'

const Nav = ({setNavIsOpen}) => {
  const [isSubMenuOpen, setSubMenuOpen] = useState({})

  const handleSubMenuToggle = (title) => {
    setSubMenuOpen((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  const handleNavLinkClick = () => {
    setNavIsOpen(false)
    setSubMenuOpen({})
  }

  return (
    <div className={css.nav}>
      <nav className={css.navList}>
        {routes.map((route, ) => (
          <div className={css.navItem} key={route.href}>
            <NavLink
              className={css.navLink}
              to={route.href}
              onClick={() => {
                setNavIsOpen(false)
                handleSubMenuToggle(route.title)
              }}
            >
              {route.title}
            </NavLink>
            {isSubMenuOpen[route.title] && route.el && (
              <ul className={css.dropdownList}>
                {route.el.map((item, subIndex) => (
                  <li key={subIndex}>
                    {' '}
                    {/* Dodaj unikalny klucz */}
                    <NavLink
                      className={css.navLink}
                      to={item.elHref}
                      onClick={handleNavLinkClick}
                    >
                      {item.elTitle}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>
    </div>
  )
}

Nav.propTypes = {
  setNavIsOpen: PropTypes.func.isRequired,
}

export default Nav

/*import React, {useState} from 'react'


const Nav = ({routes}) => {
  const [activeMenu, setActiveMenu] = useState(null)

  const handleMenuClick = (index) => {
    setActiveMenu(activeMenu === index ? null : index)
  }

  return (
    <nav>
      <ul className="nav-list">
        {routes.map((route, index) => (
          <li
            key={index}
            className="nav-item"
            onMouseEnter={() => handleMenuClick(index)}
            onMouseLeave={() => handleMenuClick(index)}
          >
            <a href={route.href}>{route.title}</a>
            {route.el && activeMenu === index && (
              <ul className="sub-menu">
                {route.el.map((subRoute, subIndex) => (
                  <li key={subIndex}>
                    <a href={subRoute.elHref}>{subRoute.elTitle}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav*/
