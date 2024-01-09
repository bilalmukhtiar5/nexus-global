import React, { useState } from 'react'
import {data} from "./data"

const Services = () => {
    const [services]=useState(data);
  return (
    <>
   <div class="container">
    <div className="d-flex justify-content-center align-items-center">
      <img src="ai-logo.png" alt=""/>
      </div>
</div>
<h1 className='text-center'>SERVICES</h1>

<div className="container d-flex justify-content-center align-items-center flex-wrap gap-5">
{
    services.map((item)=>{
        return(
            <div class="card" style={{width: '300px'}}>
            <img src={item.image} class="p-5 card-img-top" alt="..."/>
            <div class="card-body text-center">
              <h5 class="card-title">{item.title}</h5>
              <p class="card-text">{item.description}</p>
              
            </div>
          </div>
        )

    })

}

</div>
</>
  )
}

export default Services