import React from 'react'
import PropTypes from 'prop-types'
import css from './BannerButton.module.css'

const BannerButton = ({title, variant, imgSrc, onClick}) => {
  return (
    <button
      type="button"
      className={`${css.bannerButton} ${css[variant]}`}
      onClick={onClick}
    >
      <h2
        className={`${css.bannerButtonTitle} ${
          variant === 'variant1' ||
          variant === 'variant2' ||
          variant === 'variant3'
            ? variant
            : ''
        }`}
      >
        {title}
      </h2>
      <img
        src={imgSrc}
        alt="szara elipsa"
        className={
          variant === 'variant3' ? css.bannerButtonImg2 : css.bannerButtonImg
        }
      />
    </button>
  )
}

BannerButton.propTypes = {
  title: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['variant1', 'variant2', 'variant3']).isRequired,
  imgSrc: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default BannerButton
