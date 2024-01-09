import React from 'react'
import './Navbar.css'


const Navbar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-light navigation-menu">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="logo.webp" alt="" style={{width: '60%'}} />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">OUR STORY</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">SOLUTIONS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">LINKS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">CONTACT</a>
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