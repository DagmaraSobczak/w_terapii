import React from 'react'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'
import navigationRoutes from '../Nav/index'
import css from './Dropdown.module.css'

const Dropdown = ({setNavIsOpen, setDropIsOpen}) => {
  const handleDropdownLinkClick = () => {
    setNavIsOpen(false)
    setDropIsOpen(false)
    scrollToTop()
  }

  const findNestedArray = (array) =>
    array.find((item) => Array.isArray(item.el))?.el || null

  const elNav = findNestedArray(navigationRoutes)

  if (!elNav) return null

  return (
    <ul className={css.dropdownList}>
      {elNav.map((elItem) => (
        <li key={elItem.elHref} className={css.dropdownListItem}>
          <NavLink
            to={elItem.elHref}
            onClick={handleDropdownLinkClick}
            className={css.dropdownLink}
          >
            {elItem.elTitle}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

Dropdown.propTypes = {
  setNavIsOpen: PropTypes.func.isRequired,
  setDropIsOpen: PropTypes.func.isRequired,
}

export default Dropdown
