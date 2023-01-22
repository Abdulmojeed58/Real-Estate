import React, { useState } from "react";
import logo from '../../Images/logo 1.png'
import classes from './Header.module.css'
import { TiThMenu } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
    const [isLink, setIsLink] = useState(false)

    const handleMenuToggle = () => {
        setIsLink((prevState)=>!prevState)
    }

    const classname = isLink ? `${classes.links} ${classes.activeLinks}` : `${classes.links}`;

    return (
        <nav className={classes.navbar}>
            <img src={logo} alt='logo' className={classes.logo} />
            <TiThMenu className={classes.menu} onClick={handleMenuToggle} />
            <ul className={classname}>
                <li>
                    <AiOutlineClose className={classes.navClose} onClick={handleMenuToggle} />
                </li>
                <li>Home</li>
                <li>Landloard</li>
                <li>Tenants</li>
                <li>Contact Us</li>
            </ul>
        </nav>
    )
}

export default Header