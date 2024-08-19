import React from 'react';
import css from '../Menu/Menu.module.css';
import logo from '../../assets/images/logo.png';
import Button from '../Button/Button'; 

const Menu = () => {
    return (
        
            <div className={css.menuContainer}>
                <div className={css.menuList}>
                    <ul className={css.menuUl}>
                        <li className={css.menuLi}>Home</li>
                        <li className={css.menuLi}>Find a Therapist</li>
                        <li className={css.menuLi}>My Concerns</li>
                        <li className={css.menuLi}> Register With Us</li>
                        <li className={css.menuLi}>About Us</li>                      
                        <li className={css.menuLi}>Contact Us </li>
                    </ul>
                    <Button  //onClick={() => navigate('../login')}
          type="button"
          variant="login"
          content="Login">
                    </Button>
                 </div>

                <div className={css.separator}></div>        
                        <img className={css.logo} src={logo} alt="Logo" />
            </div>
    
    );
}

export default Menu;
