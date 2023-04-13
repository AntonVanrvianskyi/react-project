import React, {useEffect, useState} from 'react';

const User = ({item }) => {


    return (
        <div>
            {<h2>{item.id}, name is - {item.name}</h2>}
            <button >more info</button>

        </div>
    );
};

export default User;