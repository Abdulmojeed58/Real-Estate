import React from "react";
import classes from './Option.module.css';
import photo1 from '../../Images/unsplash_nEtpvJjnPVo.png';
import photo2 from '../../Images/Image 2.png';
import photo3 from '../../Images/unsplash_uooMllXe6gE.png';
import photo4 from '../../Images/unsplash_XdWkFaHI97c.png';

const Option = () => {

    return (
        <div className={classes.option}>
            <div className={classes.optionCard}>
                    <div className={classes.flex1}>
                        <div>
                            <h2>flexible leases</h2>
                            <img src={photo1} alt='flexible leases' loading="lazy" />
                        </div>

                        <div>
                            <h2>7-Day happiness guaranteed</h2>
                            <img src={photo2} alt='flexible leases' loading="lazy" />
                        </div>
                    </div>

                    <div className={classes.flex2}>
                        <div>
                            <h2>Monthly house cleaning</h2>
                            <img src={photo3} alt='flexible leases' loading="lazy" />
                        </div>

                        <div>
                            <h2>choose your own roommate</h2>
                            <img src={photo4} alt='flexible leases' loading="lazy" />
                        </div>
                    </div>
            </div>

            <div className={classes.optionDescription}>
                <h1>Flexibility and options to suit your lifestyle.</h1>
                <p>You need it? We got it. We make finding your next home easy, comfortable, and simple. From our happiness guarantee to our selective roommate finder option. We provide you the flexibility that you most desire.</p>
                <button className={classes.optionBtn}>
                    Search Rooms
                </button>
            </div>

        </div>
    )
}

export default Option