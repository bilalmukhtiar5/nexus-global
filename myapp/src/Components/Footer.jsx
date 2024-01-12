import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill,RiTwitterXFill } from "react-icons/ri";


const Footer = () => {
  return (
    <>
    <footer className='bg-primary footer-background'>
        
        <div class="container-fluid text-center mt-5 p-5">
  <div class="row align-items-start">
    <div class="col-lg-4 col-md-6 col-sm-12 ">
        
      <h4 className='text-light px-5'>NEXUS GLOBAL DIGITAL MARKETING GROUP 2023</h4>
      <img src="logo.webp" alt="" style={{width: '12%'}} />
      <h5 className='mt-3 text-light'>hello@nexusglobalai.com</h5>
      <h6 className='mt-3 text-light'>Seattle: 206-577-4005</h6>
      <h6 className='mt-3 text-light'>Toronto: 416-691-0778</h6>
      <h6 className='mt-3 text-light'><span>Vancouver:</span> 604-800-8871</h6>
      <h6 className='mt-3 text-light'>1-888-340-4899</h6>
      <h6 className='text-light'>Monday-Saturday 6:00am-6:00pm PST</h6>
      <button className='btn btn-danger'>Free Stretegy Call</button>
    </div>
    <div class="col-lg-4 col-md-6 col-sm-12 ">
    <h3 className='text-light'>Ai Based Solutions</h3>
    <p className='text-light px-5 mx-4'>Are you tired of spending hours on manual tasks such as keyword research and on-page
    optimization? Do you struggle to come up with fresh and relevant content ideas?
    Are you looking to streamline your online marketing efforts and save time and resources?</p>
    <br/>
    <p className='text-light px-5 mx-4'>If so, our AI-powered solutions are here to help.</p>
    <br/>
    <p className='text-light px-5 mx-4 '>With over $500,000 in Tools and Assets and over 120 team members we can help create 
    amazing results for your business.</p>

    </div>
    
    <div class="col-lg-4 col-md-6 col-sm-12 ">
    <h4 className='text-light mt-3'>Get Social</h4>
    <FaFacebookSquare className='mt-3 g-2' style={{color: '', fontSize: '30px'}}/>
    <RiInstagramFill className='mt-3 g-2' style={{color: '', fontSize: '30px'}}/>
    <RiTwitterXFill className='mt-3' style={{color: '', fontSize: '30px'}}/>
    </div>
  
</div>
        </div>
            <p className='text-center bold'>NEXUS GLOBAL MARKETING GROUP 2001-2023 ALL RIGHTS RESERVED</p>
    </footer>
    
    
    
    
    </>
  )
}

export default Footer