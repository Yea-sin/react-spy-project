import React from 'react';
import './Cart.css'

const Selected = (props) => {
    const selects = props.cart;
    const reducer = (prev, current) => prev+parseFloat(current.salary);
    const total = selects.reduce(reducer, 0)
    // const name = selects.map(select=>select.name)
    let name = [];
    for(const select of selects){
        name = select.name + ' , ' +name
    }
    return (
        <div className='mt-5 p-5 rounded-start' style={{backgroundColor:'rgb(51 123 90)'}}>
            <h2 className='text-light' style={{fontFamily: 'Stick No Bills, sans-serif', whiteSpace:'nowrap'}}>Selected Casts <i className="bi bi-person-check-fill"></i></h2>
            <div className='select-items'>
                <h5>Selected : {selects.length}</h5>
                <h5>Cost : ${total.toFixed(2)}</h5>
                <h5 className='cast-name'>{name}</h5>
            </div>
        </div>
    );
};

export default Selected;