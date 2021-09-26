import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const font = {color:'black'};
    // console.log(props.handleSelect);
    const element = <FontAwesomeIcon icon={faPlus} />
    const cast = props.cast;
    const {name, image, role, age, salary, country} = cast;
    return (
        <div >
            <div className="card mb-3 p-3" style={{maxWidth: '540px', height:'300px', backgroundColor:'cadetblue'}}>
                <div className="row g-0">
                    <div className="col-md-4 d-flex align-items-center">
                      <img src={image} style={{height:'150px'}} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h4 style={{color:'aliceblue', whiteSpace:'nowrap'}}>{name}</h4>
                            <h5 style={font}>Role :{role}</h5>
                            <h5 style={font}>Country :{country}</h5>
                            <h5 style={font}>Age :{age}</h5>
                            <h5 style={font}>Salary : ${salary}</h5>
                            <p className="card-text"></p>
                        </div>
                        <div className='text-center'>
                            <button onClick={()=>props.handleSelect(cast)} type="button" className="btn w-75 btn-success">{element} Select</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;