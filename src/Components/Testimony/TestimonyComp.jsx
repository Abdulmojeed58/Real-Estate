import React from "react";
import classes from './TestimonyComp.module.css';
import invertedComa from '../../Images/inverted-coma.png'

const TestimonyComp = ({ picture, name, position }) => {

    return (
        <div className={classes.testimonyComp}>
            <img src={invertedComa} alt="invertedComa" />
            <p className={classes.testimonyCompDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel pellentesque est. Curabitur at odio sit amet libero vulputate efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa, faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus fringilla finibus.</p>
            <div>
                <img src={picture} alt={name} />
                <div>
                    <h3>{name}</h3>
                    <p>{position}</p>
                </div>
            </div>
        </div>
    )
}

export default TestimonyComp