import React from 'react'
import "../Experiance/experiance.css"
import {BsPatchCheckFill} from "react-icons/bs"
function Experiance() {
  return (
    <section id='experience'>
      
<h2>What Skills I Have</h2>
      <div className='container experience__containe'>

<div className=' container experience__container'>

<div className='experience__frontend'>

<div className='experience__content'>
  <article className='experience__details'>
    <BsPatchCheckFill className='experience__icon'/>
    <div>
    <h4>Core java</h4>
    

    </div>

  </article>
  <article className='experience__details'>
    <BsPatchCheckFill className='experience__icon'/>
    <div>
    <h4>Python</h4>
    
    </div>
   
  </article>
  <article className='experience__details'>
    <BsPatchCheckFill className='experience__icon'/>

    <div>
    <h4>My SQL</h4>
    
    </div>
  
  </article>
  {/* <article className='experience__details'>
    <BsPatchCheckFill className="experience__icon"/>
    <div>
    <h4>Bootstrap</h4>
    <small className='text-light'>Experienced</small>
    </div>

  </article> */}
  <article className='experience__details'>
    <BsPatchCheckFill className="experience__icon"/>
    <div>
    <h4>React js</h4>
    
    </div>
   
  </article>
  <article className='experience__details'>
    <BsPatchCheckFill className="experience__icon"/>
    <div>
    <h4>Git and Github</h4>
    </div>
   
  </article>
</div>



</div>
<div className='experience__backend'>
<h3>Frontend Frameworks and Technologies.</h3>

<div className='experience__content'>
  
  <article className='experience__details'>
    <BsPatchCheckFill className="experience__icon"/>
    <div>
    <h4>Bootstrap</h4>
    
    </div>
   
  </article>
  <article className='experience__details'>
    <BsPatchCheckFill className="experience__icon"/>

    <div>
    <h4>Material UI</h4>
    
    </div>
  
  </article>
  
  <article className='experience__details'>
    <BsPatchCheckFill className="experience__icon"/>
    <div>
    <h4>Github</h4>
  
    </div>
   
  </article>
</div>
</div>

</div>

      </div>
      
    </section>
  )
}

export default Experiance