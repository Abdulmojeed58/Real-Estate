import React from "react";
import OptionCard from "./OptionCard";
import photo1 from '../../Images/unsplash_nEtpvJjnPVo.png'
import photo2 from '../../Images/unsplash_oGmf8o53LeE.png'
import photo3 from '../../Images/unsplash_uooMllXe6gE.png'
import photo4 from '../../Images/unsplash_XdWkFaHI97c.png'

const Option = () => {

    return (
        <div>
            <div className="optionCard">
                <OptionCard title='flexible leases' src={photo1} />
                <OptionCard title='flexible leases' src={photo2} />
                <OptionCard title='flexible leases' src={photo3} />
                <OptionCard title='flexible leases' src={photo4} />
            </div>
        </div>
    )
}

export default Option