import React from "react";
import classes from './Property.module.css';

import path from '../../Images/Path.png';
import shower from '../../Images/Shower.png';
import size from '../../Images/Size.png';


const Property = ({contactName, price, coverphoto}) => {

    return (
        <section className={classes.property}>
            <img src={coverphoto} alt='property-img' />
            <h2 className={classes.name}>{contactName}</h2>
            <p>Private Room</p>
            <h2 className={classes.price}>${price}/Month</h2>
            <div>
                <div>
                    <img src={path} alt='car' />
                    <p>4</p>
                </div>
                <div className={classes.middle}>
                    <img src={shower} alt='car' />
                    <p>4</p>
                </div>
                <div>
                    <img src={size} alt='car' />
                    <p>4</p>
                </div>
            </div>
        </section>
    )
}

export default Property