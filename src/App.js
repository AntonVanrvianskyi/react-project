import React  from 'react';

import './App.css'

import Comments from "./components/Comments/Comments";
import Users from "./components/users/Users";
import Cars from "./components/Cars/Cars";


const App = () => {

    return (
        <div className={'container'}>
            {/*<Users/>*/}
            {/*<Comments/>*/}
            <Cars/>


        </div>
    );
};

export default App;