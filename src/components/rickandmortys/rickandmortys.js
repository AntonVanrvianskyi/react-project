import React from 'react';
import Rickandmorty from "../rickandmorty/rickandmorty";
import "./main.css";
const Rickandmortys = () => {
    let array = [
        {id:1,
            name:'Rick Sanchez',
            status:'Alive',
            species:'Human',
            type:'',
            gender:'Male',
            origin:{
                name:'Earth (C-137)'
            },
            location:{name:'Citadel of Ricks',url:'https://rickandmortyapi.com/api/location/3'},
            image:'https://rickandmortyapi.com/api/character/avatar/1.jpeg'},

        {id:2,
            name:'Morty Smith',
            status:'Alive',
            species:'Human',
            type:'',
            gender:'Male',
            origin:{name:'unknown',url:''},
            location:{name:'Citadel of Ricks',url:'https://rickandmortyapi.com/api/location/3'},
            image:'https://rickandmortyapi.com/api/character/avatar/2.jpeg'},
        {id:3,
            name:'Summer Smith',
            status:'Alive',
            species:'Human',
            type:'',
            gender:'Female',
            origin:{name:'Earth (Replacement Dimension)',url:'https://rickandmortyapi.com/api/location/20'},
            location:{name:'Earth (Replacement Dimension)',url:'https://rickandmortyapi.com/api/location/20'},
            image:'https://rickandmortyapi.com/api/character/avatar/3.jpeg'},
        {id:4,
            name:'Beth Smith',
            status:'Alive',
                species:'Human',
            type:'',
            gender:'Female',
            origin:{name:'Earth (Replacement Dimension)',url:'https://rickandmortyapi.com/api/location/20'},
            location:{name:'Earth (Replacement Dimension)',url:'https://rickandmortyapi.com/api/location/20'},
            image:'https://rickandmortyapi.com/api/character/avatar/4.jpeg'},
        {id:5,
            name:'Jerry Smith',
            status:"Alive",
            species:"Human",
            type:"",
            gender:"Male",
            origin:{name:'Earth (Replacement Dimension)',url:"https://rickandmortyapi.com/api/location/20"},
            location:{name:'Earth (Replacement Dimension)',url:'https://rickandmortyapi.com/api/location/20'},
            image:'https://rickandmortyapi.com/api/character/avatar/5.jpeg'},
        {id:6,
            name:'Abadango Cluster Princess',
            status:'Alive',
            species:'Alien',
            type:'',
            gender:'Female',
            origin:{name:'Abadango',url:'https://rickandmortyapi.com/api/location/2'},
            location:{name:'Abadango',url:'https://rickandmortyapi.com/api/location/2'},
            image:'https://rickandmortyapi.com/api/character/avatar/6.jpeg'}

    ]
    return (
        <div className={'rick'}>
            {
                array.map((value,index) => <Rickandmorty item={value} key={index}/>)
            }
        </div>
    );
};

export default Rickandmortys;