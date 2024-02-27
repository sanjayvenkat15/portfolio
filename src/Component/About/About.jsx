import React from 'react'
import "../About/about.css"
import {FaAward} from "react-icons/fa"
import Me from "../../assets/me-about.jpg"
import { FiUser } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
function About() {
  return (
    <section id='about'>
<h5>Get To Know</h5>
<h2>About Me</h2>
<div className='container about__container'>
{/* 
<--------About left------> */}
<div className='about__me'>
<img src={Me} alt="me" className='about__me-img'/>


</div>
{/* 
<--------About right------> */}
<div className='about__content'>


<div className='about__cards'>
<article className='about__card'>
    <FiUser className="about__icon"/>
    <h5>MCA Graduate</h5>
    {/* <small>Frontend Developer</small> */}
  </article>
  <article className='about__card'>
    <FaAward className="about__icon"/>
    <h5>Fresher</h5>
    
  </article>

  <article className='about__card'>
    <VscFolderLibrary className="about__icon"/>
    <h5>Projects</h5>
    
  </article>
</div>

<p>"Welcome to my portfolio website! As a recent MCA graduate eager to embark on my professional journey, I'm excited to showcase my skills, projects, and passion for technology, offering a glimpse into my potential as a valuable addition to any team."
</p>
<a href='#contact' className='btn btn-primary'>Let's Talk</a>






</div>



</div>

    </section>
  )
}

export default About