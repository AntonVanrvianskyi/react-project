import React from 'react';
import './Lift.css'
const Lift = ({item}) => {
    return (
        <div className={'post'}>
            id: {item.id},
            body: {item.body},
            UserId: {item.userId},
            title: {item.title}
        </div>
    );
};

export default Lift;