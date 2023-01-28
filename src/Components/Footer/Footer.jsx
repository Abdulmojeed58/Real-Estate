import React from "react";
import classes from './Footer.module.css'
import { IoLocationSharp } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import { AiFillPrinter, AiFillFacebook, AiOutlineTwitter, AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";
import { GrLinkedinOption, GrGooglePlus } from "react-icons/gr";
import { BsPinterest } from "react-icons/bs";
import { FaRss } from "react-icons/fa";

const Footer = () => {

    return (
        <footer>
            <div className={classes.lineTop}/>
            <div className={classes.middle}>
                <h1>Logo</h1>
                <address>
                    <div>
                        <IoLocationSharp className={classes.icon} />
                        <p>345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</p>
                    </div>
                    <div className={classes.addMid}>
                        <div>
                            <MdLocalPhone className={classes.icon} />
                            <p>(123) 456-7890</p>
                        </div>
                        <div>
                            <AiFillPrinter className={classes.icon} />
                            <p>(123) 456-7890</p>
                        </div>
                    </div>
                    <div className={classes.social}>
                        <p>Social Media</p>
                        <AiFillFacebook className={classes.icon} />
                        <AiOutlineTwitter className={classes.icon} />
                        <GrLinkedinOption className={classes.icon} />
                        <AiFillYoutube className={classes.icon} />
                        <AiOutlineInstagram className={classes.icon} />
                        <GrGooglePlus className={classes.icon} />
                        <BsPinterest className={classes.icon} />
                        <FaRss className={classes.icon} />
                    </div>
                </address>
            </div>
            <div className={classes.lineBottom}/>
            <div className={classes.footerBottom}>
                <ul>
                    <li>about us</li>
                    <li>contact us</li>
                    <li>help</li>
                    <li>privacy policy</li>
                    <li>disclaimer</li>
                </ul>
                <p>Copyright &copy; 2020 Minimumlivingcost. All rights reserved</p>
            </div>

        </footer>
    )
}

export default Footer