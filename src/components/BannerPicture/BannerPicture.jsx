import React from 'react'
import banner from '../../assets/images/banner.png' // Zaktualizuj ścieżkę, jeśli jest inna
import css from './BannerPicture.module.css' // Upewnij się, że masz odpowiedni plik CSS

const BannerPicture = () => {
  return <img src={banner} alt="baner" className={css.bannerPicture} />
}

export default BannerPicture
