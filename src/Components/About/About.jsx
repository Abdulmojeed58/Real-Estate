import React from "react";
import classes from './About.module.css'

import place from '../../Images/unsplash_oGmf8o53LeE.png';
import vector1 from '../../Images/Vector.png'
import vector2 from '../../Images/Vector (1).png'
import vector3 from '../../Images/Vector (2).png'
import vector4 from '../../Images/Vector (3).png'
import vector5 from '../../Images/Vector (4).png'
import vector6 from '../../Images/Vector (5).png'


const About = () => {

    return (
        <section className={classes.about}>
            <h1 className={classes.title}>
                Minimum living cost takes care of   everything
            </h1>
            <span className={classes.line}></span>

            <div>
                <img className={classes.place} src={place} alt='place' loading="lazy" />
                <ul>
                    <li>
                        <span className={classes.vector}>
                            <img src={vector1} alt='vector1' loading="lazy" />
                        </span>
                        <span className={classes.vecName}>Pay as little as possible!</span>
                    </li>

                    <li>
                        <span className={classes.vector}>
                            <img src={vector2} alt='vector2' loading="lazy" />
                        </span>
                        <span className={classes.vecName}>enjoy wisdom of community!</span>
                    </li>

                    <li>
                        <span className={classes.vector}>
                            <img src={vector3} alt='vector3' loading="lazy" />
                        </span>
                        <span className={classes.vecName}>let's somebody else take care of landlord!</span>
                    </li>

                    <li>
                        <span className={classes.vector}>
                            <img src={vector4} alt='vector4' loading="lazy" />
                        </span>
                        <span className={classes.vecName}>enjoy peaceful environment!</span>
                    </li>

                    <li>
                        <span className={classes.vector}>
                            <img src={vector5} alt='vector5' loading="lazy" />
                        </span>
                        <span className={classes.vecName}>stay safe save money!</span>
                    </li>

                    <li>
                        <span className={classes.vector}>
                            <img src={vector6} alt='vector6' loading="lazy" />
                        </span>
                        <span className={classes.vecName}>Pay fo what you use!</span>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About