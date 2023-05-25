import React from 'react'
import './Footer.scss'
import { IoIosArrowUp } from 'react-icons/io'

const Footer = () => {
  return (
    <footer className='mainFooter'>
        <div className='arrowContainer'>
        <div className='circle'>
            <IoIosArrowUp size={70} />
        </div>
        </div>
        <div className='container'>

            <h3>bageriet</h3>
            <p>Der er mange tilgængelige udgaver af Lorem Ipsum, men det fleste udgaver har <br/> gennemgået forandringer.</p>
            <div className='shadow'>
                <p>Copyright © 2017 bageriet aps</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer