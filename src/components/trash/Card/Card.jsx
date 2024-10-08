import React from 'react'
import PropTypes from 'prop-types'
import css from './Card.module.css'
import sprite from '../../assets/svg/sprite.svg'

const Card = ({iconId, title, content, tagline, variant, lastIconId}) => {
  return (
    <div className={`${css.card} ${css[variant]}`}>
      <div className={css.svgContainerTop}>
        <svg className={css.iconCircle}>
          <use href={`${sprite}#${iconId}`} />
        </svg>{' '}
        <h3
          className={`${css.cardTitle} ${
            variant === 'variant3' ? css.variant3Text : ''
          }`}
        >
          {title}
        </h3>
      </div>
      <p
        className={`${css.cardContent} ${
          variant === 'variant3' ? css.variant3Text : ''
        }`}
      >
        {content}
      </p>
      <div className={css.svgContainerBottom}>
        <p
          className={`${css.cardTagline} ${
            variant === 'variant3' ? css.variant3Text : ''
          }`}
        >
          {tagline}
        </p>{' '}
        <svg className={css.icon}>
          <use href={`${sprite}#${lastIconId}`} />
        </svg>
      </div>
    </div>
  )
}

Card.propTypes = {
  iconId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['variant1', 'variant2', 'variant3']).isRequired,
  lastIconId: PropTypes.string.isRequired,
}

export default Card
