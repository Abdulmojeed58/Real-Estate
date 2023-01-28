import React from "react";
import SwiperComp from "./Swiper";
import classes from './Testimony.module.css';
import Photo from '../../Images/media bg-cover.png';
import { BsFillPlayFill } from "react-icons/bs";



const Testimony = () => {

    return (
        <div className={classes.testimony}>
            <SwiperComp />
            <div className={classes.image}>
                <div className={classes.circle}>
                    <BsFillPlayFill className={classes.play} />
                </div>
                <img src={Photo} alt="media" loading="lazy" />
            </div>
        </div>
    )
}

export default Testimony