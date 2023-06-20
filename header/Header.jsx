import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faGlobe, faMoon, faCompress, faBell, faMessage, faGear } from '@fortawesome/free-solid-svg-icons'
import prince from '../images/prince.jpg'
import { useState } from 'react'
function Header() {
  const [color ,setColor]=useState({})
  console.log()
  function Moon(){
    setColor({backgroundColor:"black", color:"white"})
  }
  return (
    <div style={color} className='mainbhado'>
      <div className='bhado'>
        <div className='headerbox'>
          <div className='bigb'>
            <input placeholder="Search..." className='inputb' />
            <FontAwesomeIcon icon={faMagnifyingGlass} className='hover' />

          </div>
        </div>
        <div className='headerbox1'>
          <div className='bigb1'>
            <div className='globeandenglish'>
              <FontAwesomeIcon icon={faGlobe} className='hover' />
              <div className='english'>English</div>
            </div>
            <FontAwesomeIcon icon={faMoon} onClick={Moon} className='hover' />
            <FontAwesomeIcon icon={faCompress} className='hover' />
            <div className='bell1'>
              <FontAwesomeIcon icon={faBell} className='hover' />
              <div className='onetext'>1</div>
            </div>
            <div className='bell1'>
              <FontAwesomeIcon icon={faMessage} className='hover' />
              <div className='onetext'>1</div>
            </div> <img src={prince} className='image'></img>
            <FontAwesomeIcon icon={faGear} className='hover' />
          </div>
        </div>
      </div>
      <div className='line'></div>

    </div>
  )
}

export default Header