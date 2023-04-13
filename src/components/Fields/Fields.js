import React, {useEffect, useState} from 'react';
import Field from "../Field/Field";
import './Fields.css'

const Fields = () => {

    let [ship, setShip] = useState([])

    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => {
                setShip([...value])
            })
    },[])
    return (
        <div className={'Fields'}>
            {

                ship.filter(value => value.launch_year!=='2020').map((value, index) => <Field key={index} value={value}/>)
            }
        </div>
    );
};

export default Fields;