import React from 'react';
import Button from '../Button/Button';
import baner from '../../assets/images/baner.jpg';
import css from '../Banner/Banner.module.css'

const Banner = () => {
    return (
        <div className={css.bannerContainer}>
            <div className={css.bannerTextContainer}>
                <p className={css.bannerText1}>The Best Counseling Clinic</p>
                <div className={css.bannerText2Container}>
                <p className={css.bannerText2}>
                    At the heart of  <br />
                    <span className={css.span1}> children</span> &amp; 
                    <span className={css.span2}> adult</span> <br />
                    mental health
                </p></div>
                <Button
                    type="button"
                    variant="banner"
                    content="Find a Therapist"
                    // onClick={() => scrollToAnchor(`#.....`.substring(1))}
                />
            </div>
            <img className={css.bannerPicture} src={baner} alt="dziewczynka pokazująca obrazek" />
        </div>
    );
}

export default Banner;
