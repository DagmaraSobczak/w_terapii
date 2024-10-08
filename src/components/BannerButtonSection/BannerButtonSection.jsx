import React from 'react'
import {useNavigate} from 'react-router-dom'
import css from './BannerButtonSection.module.css'
import BannerButton from '../BannerButton/BannerButton'
import Ellipse from '../../assets/images/Ellipse.png'

const BannerButtonSection = () => {
  const navigate = useNavigate()

  const handleNavigation = (path) => {
    navigate(path)
  }

  return (
    <div className={css.container}>
      <BannerButton
        title="BAZA WIEDZY I ZASOBÓW"
        variant="variant1"
        imgSrc={Ellipse}
        onClick={() => handleNavigation('/baza-wiedzy')}
      />
      <BannerButton
        title="NOWOŚCI"
        variant="variant2"
        imgSrc={Ellipse}
        onClick={() => handleNavigation('/nowosci')}
      />
      <BannerButton
        title="SUBIEKTYWNA BAZA KSIĄŻEK"
        variant="variant1"
        imgSrc={Ellipse}
        onClick={() => handleNavigation('/ksiazki')}
      />
    </div>
  )
}

export default BannerButtonSection
