import { height } from '@mui/system'
import React from 'react'

const Footer = () => {
  return (
    <div id='footer' style={{backgroundColor:"black",height:"70px"}} > 
    <span style={{fontWeight:"bold" , color:"#FCBAAD", fontSize:"18px"}}>By - Anup Kumar Mahata</span>
    <br />
    <br />
    <a href="https://github.com/Akm007git">
         <i class=" fb fa-brands fa-github fa-xl"></i>
      </a>

      <a href="https://twitter.com/AnupKum69855435">
        <i class="fb fa-brands fa-twitter fa-xl"></i>
      </a>
      
      <a href="mailto:anupkumarmahata2022@outlook.com">
        <i class="fb footer-img fa-solid fa-envelope fa-xl"></i>
      </a>
      <a href="https://www.linkedin.com/in/anup-kumar-mahata-76952b246/">
        {" "}
        <i class="fb fa-brands fa-linkedin fa-xl"></i>
      </a>
    </div>
  )
}

export default Footer