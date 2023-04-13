import React from 'react';

const Field = ({value}) => {

    return (

        <div>
            <p>{value.mission_name}, {value.launch_year}</p>
            <img src={ value.links.mission_patch_small} alt="photo"/>
        </div>


    );
};

export default Field;