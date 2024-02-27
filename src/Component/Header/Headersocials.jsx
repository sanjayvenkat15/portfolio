import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {FiDribbble, FiInstagram} from "react-icons/fi"
function Headersocials() {
  return (
    <div className='header__socials'>
<a href='https://www.linkedin.com/in/sanjay-v1/' target='_blank'>
    <BsLinkedin/>
</a>
<a href='https://github.com/sanjayvenkat15' target='_blank'>
    <FaGithub/>
</a>
<a href='https://www.instagram.com/dimple_boy_sanjay/' target='_blank'>
    {/* <FiDribbble/> */}
    <FiInstagram/>
</a>
    </div>
  )
}

export default Headersocials