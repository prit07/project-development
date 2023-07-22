import React from 'react';

const TestiMonialsDetails = ({testiMonialDetail}) => {
    const {name, description, img} = testiMonialDetail;
    console.log("testiMonialDetail"+testiMonialDetail)
    return (
   
        <div className="item ">
            <div className="shadow-effect">
                <img className="img-circle" src={img} />

                <div className='effect mb-4 p-3'>
                <p>{description}</p>
                <h5 className=' fw-bold '>{name}</h5>
                </div>
            </div>
        </div>
      
    );
};

export default TestiMonialsDetails;