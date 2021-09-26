import React, { useEffect, useState } from 'react';
import Cast from '../Cast/Cast';
import Selected from '../Selected/Selected';
import './Container.css'

const Shop = () => {
    const [casts, setCasts] = useState([]);
    const [selects, setSelects] = useState([]);
    useEffect(()=>{
        fetch('/data.JSON')
        .then(res=>res.json())
        .then(data=>setCasts(data));
    },[])
    const handleSelect = (select) =>{
        const newSelect = [...selects, select];
        setSelects(newSelect);
    }
    return (
        <div className='p-3'>
            <div className="row">
                <div className='col-md-9'>
                    <div className='row row-cols-1 row-cols-md-3 mt-1 g-4'>
                        {
                            casts.map(cast =>  <Cast handleSelect={handleSelect} key={cast.id} cast = {cast}></Cast>)
                        }
                    
                    </div>
                </div>
                <div className='col-md-3'>
                    <Selected select={selects}></Selected>
                    
                </div>
            </div>
        </div>
    );
};

export default Shop;