import React, {useEffect, useState} from 'react';

const User = ({user, setUserId}) => {
let {id, name} = user
    return (
        <div>
            {<h2>{id}, name is - {name}</h2>}
            <button onClick={()=>setUserId(id)}>more info</button>

        </div>
    );
};

export default User;
