import React from 'react';
import './Selected.css'

const Selected = (props) => {
    const selects = props.selects;
    let cast = []
    for(const select of selects){
        cast = select;
    }
    const {name, image, salary} = cast;
    const reducer = (prev, current) => prev+parseFloat(current.salary);
    const total = selects.reduce(reducer, 0)
    // console.log(cast)
    return (
        <div className='mt-5 p-5 rounded-start' style={{backgroundColor:'rgb(51 123 90)'}}>
            <h2 className='text-light' style={{fontFamily: 'Stick No Bills, sans-serif', whiteSpace:'nowrap'}}>Selected Casts <i className="bi bi-person-check-fill"></i></h2>
            <div className='select-items'>
                <h5>Selected : {selects.length}</h5>
                <h5>Cost : ${total.toFixed(2)}</h5>
                <h5 className='cast-name'> <img className='select-img' src={image} alt="" /> {name}</h5>
            </div>
        </div>
    );
};

export default Selected;