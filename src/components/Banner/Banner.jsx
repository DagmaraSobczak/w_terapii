import React from 'react'
import {useNavigate} from 'react-router-dom' // Dodaj import useNavigate
import Section from '../Section/Section'
import BannerButtonSection from '../BannerButtonSection/BannerButtonSection'
import BannerButton from '../BannerButton/BannerButton'
import css from './Banner.module.css'
import Ellipse2 from '../../assets/images/Ellipse2.png'
import logo from '../../assets/images/logo.png'

const Banner = () => {
  const navigate = useNavigate() // Inicjalizuj nawigację

  const handleLoginClick = () => {
    navigate('/login') // Przekieruj do strony logowania
  }

  return (
    <Section sectionClass={css.banner}>
      <div className={css.bannerContainer}>
        <div className={css.logoContainer}>
          <img src={logo} alt="logo" className={css.bannerLogoImg} />
          <BannerButtonSection />
        </div>
        <div className={css.bannerBottomContainer}>
          <div className={css.bannerTextContainer}>
            <p className={css.bannerText1}>WWW.WTERAPII.PL</p>
            <p className={css.bannerText2}>STRONA DLA TERAPEUTÓW</p>
          </div>
          <BannerButton
            title="ZALOGUJ SIĘ"
            variant="variant3"
            imgSrc={Ellipse2}
            onClick={handleLoginClick} // Dodaj obsługę kliknięcia
          />
        </div>
      </div>
    </Section>
  )
}

export default Banner
