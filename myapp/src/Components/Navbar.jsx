import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-light navigation-menu">
  <div class="container">
    <Link class="navbar-brand" to="/">
      <img src="logo.webp" alt="" style={{width: '60%'}} />
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0 fs-5">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">HOME</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">OUR STORY</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">SOLUTIONS</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">LINKS</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">CONTACT</Link>
        </li>
        
      </ul>
      
    </div>
    <button className='btn btn-primary'>Contact Us</button>
  </div>
</nav>
    
    
    
    
    </>
  )
}

export default Navbar