import React from 'react'
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoxesStacked,faUser,faHotel,faCartShopping,faTruck,faBell,faChartSimple,faGear,faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import black from '../images/black.png'
import white from '../images/white.png'
import { useState } from 'react'
function Sidebar() {
  const [color,setColor] = useState({})
  function Clickimage(){
    setColor({backgroundColor:"black", color:"white"})
  }
  function ClickWhite(){
    setColor({backgroundColor:"white" , color :"black"})
  }
  return (
    <div  className='bigbox'>
    <div  style={color} className='sidebox'>
        <div className='lamadmin'>PRINCEADMIN</div>
        <div className='line'></div>
        <div className='main'>MAIN</div>
        <div className='dashboardandlogo'>
        <FontAwesomeIcon icon={faBoxesStacked} className='boxicon' />
        <div className='dashboard'>Dashboard</div>
        </div>
        <div className='main'>LISTS</div>
        <div className='userandlogo'>
        <FontAwesomeIcon icon={faUser} className='usericon' />
        <div className='users'>Users</div>
        </div>
        <div className='productsandlogo'>
        <FontAwesomeIcon icon={faHotel} className='usericon' />
        <div className='products'>Products</div>
        </div>
        <div className='productsandlogo'>
        <FontAwesomeIcon icon={faCartShopping} className='usericon' />
        <div className='products'>Orders</div>
        </div>
        <div className='productsandlogo'>
        <FontAwesomeIcon icon={faTruck} className='usericon' />
        <div className='products'>Delivery</div>
        </div>
        <div className='main'>USEFUL</div>
        <div className='statsandicon'>
        <FontAwesomeIcon icon={faChartSimple} className='usericon' />
        <div className='stats'>Stats</div>
        </div>
        <div className='statsandicon'>
        <FontAwesomeIcon icon={faBell} className='usericon' />
        <div className='stats'>Notification</div>
        </div>
        <div className='main'>SERVICES</div>
        <div className='systemandicon'>
        <FontAwesomeIcon icon={faGear} className='usericon' />
        <div className='systemhealth'>System Health</div>
        </div>
        <div className='systemandicon'>
        <FontAwesomeIcon icon={faGear} className='usericon' />
        <div className='systemhealth'>Logs</div>
        </div>
        <div className='systemandicon'>
        <FontAwesomeIcon icon={faGear} className='usericon' />
        <div className='systemhealth'>Settings</div>
        </div>
        <div className='main'>USER</div>
        <div className='profileandlogo'>
        <FontAwesomeIcon icon={faUser} className='usericon' />
        <div className='profile'>Profile</div>
        </div>
        <div className='logoutandlogo'>
        <FontAwesomeIcon icon={faArrowRightFromBracket} className='usericon' />
        <div className='profile'>Log Out</div>
        </div>
        <div className='main'>THEME</div>
        <div className='blackandwhite'>
    <img src={black} onClick={Clickimage} className='black'/>
    <img src={white} onClick={ClickWhite} className='white'/>
        </div>
    </div>
    </div>
  )
}

export default Sidebar