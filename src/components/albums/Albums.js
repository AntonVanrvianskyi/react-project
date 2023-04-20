import React, {useEffect, useState} from 'react';
import {albumsService} from "../../services/service.component";
import Album from "./Album";

const Albums = () => {
    const [albums, setAlbums] = useState([]);
    useEffect(()=>{
        albumsService.getAll().then(value => value.data).then(value => setAlbums([...value]))
    },[])
    return (
        <div>
            {
                albums.map(album=><Album key={album.id} album={album}/>)
            }
        </div>
    );
};

export default Albums;