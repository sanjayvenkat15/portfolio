import React from 'react'
import "../Header/header.css"
import Headerbtns from './Headerbtns'
import Me from "../../assets/me.jpg"
import Headersocials from './Headersocials'
function Header() {
  return (
    <header>


   <div className='container header__container'>
<h5>Hello  I'm</h5>
<h1>Sanjay</h1>
<h5 className='text-light'>job Seeker</h5>
<Headerbtns/>
<Headersocials/>
<div className='me'>
<img src={Me}  alt="me"/>

</div>
<a href='#contact' className='scroll__down'>Scroll Down</a>

   </div>
   </header>
  )
}

export default Header