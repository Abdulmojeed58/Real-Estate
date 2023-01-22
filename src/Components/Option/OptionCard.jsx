import React from "react";

const OptionCard = ({ title, src }) => {

    return (
        <div>
            <h2>{title}</h2>
            <img src={src} alt={title} />
        </div>
    )
}

export default OptionCard