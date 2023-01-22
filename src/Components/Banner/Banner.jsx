import React from "react";
import Header from "../Header/Header";
import classes from './Banner.module.css'
import background from '../../Images/Group 1881.png'
import { MapTiles } from "../Map";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";


const Banner = () => {
    return (
        <div className={classes.banner}>
            <img src={background} alt="background" className={classes.image} />
            <Header />
            <div className={classes.data}>
                <h1 className={classes.title}>
                    The Most Affordable Place To Stay In The San Franciso Bay Area
                </h1>
                <div>
                    <div className={classes.map}>
                        <MapTiles />
                    </div>
                    <div className={classes.filter}>
                        <button className={`${classes.btn} ${classes.btn1}`}>
                            <span>All Type</span>
                            <MdKeyboardArrowDown />
                        </button>
                        <button className={`${classes.btn} ${classes.btn2}`}>
                            <span>Neighborhood</span>
                            <MdKeyboardArrowDown />
                        </button>
                        <button className={`${classes.btn} ${classes.btn3}`}>
                            <AiOutlineSearch />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner