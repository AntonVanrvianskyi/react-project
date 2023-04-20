import React from 'react';
import './Navigation.css'
import {Link} from "react-router-dom";
const Navigation = () => {
    return (
        <div className={'nav-bar'}>
            <div className={'nav-child'}><Link className={'link'} to={'Home'}>Home</Link></div>
            <div className={'nav-child'}><Link className={'link'} to={'Cars'}>View Car</Link></div>
            <div className={'nav-child'}><Link className={'link'} to={'CarForm'}>Add Car</Link></div>
        </div>
    );
};

export default Navigation;