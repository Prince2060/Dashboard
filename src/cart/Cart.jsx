import React from 'react'
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown,faAngleUp,faUser,faCartShopping,faDollarSign,faGift} from '@fortawesome/free-solid-svg-icons'

export default function Cart() {
  return (
   <div className='mainbox'>
    <div className='whitebox'>
      <div className='usersandicons'>
        <div className='userss'>USERS</div>
        <div className='iconbox'>
        <FontAwesomeIcon icon={faAngleUp}  className='downarrow'/>
        <div className='five'>+5</div>
        <div className='percent'>%</div>
        </div>
      </div>
      <div className='sevenhundred'>720</div>
      <div className='seeuserandicon'>
      <div className='seealluser'>See all users</div>
      <div className='backgroundbox1'>
      <FontAwesomeIcon icon={faUser} className='ratoicon'/>
      </div>
      </div>
    </div>
    <div className='whitebox'>
      <div className='usersandicons'>
        <div className='userss'>ORDERS</div>
        <div className='iconbox1'>
        <FontAwesomeIcon icon={faAngleDown}  className='downarrow1'/>
        <div className='five'>+5</div>
        <div className='percent'>%</div>
        </div>
      </div>
      <div className='sevenhundred'>260</div>
      <div className='seeuserandicon'>
      <div className='seealluser'>See all users</div>
      <div className='backgroundbox2'>
      <FontAwesomeIcon icon={faCartShopping} className='yellowicon'/>
      </div>
      </div>
    </div>
    <div className='whitebox'>
      <div className='usersandicons'>
        <div className='userss'>WARNINGS</div>
        <div className='iconbox'>
        <FontAwesomeIcon icon={faAngleUp}  className='downarrow'/>
        <div className='five'>+5</div>
        <div className='percent'>%</div>
        </div>
      </div>
      <div className='sevenhundred'>$4.6K</div>
      <div className='seeuserandicon'>
      <div className='seealluser'>See all users</div>
      <div className='backgroundbox3'>
      <FontAwesomeIcon icon={faDollarSign} className='dollor'/>
      </div>
      </div>
    </div>
    <div className='whitebox'>
      <div className='usersandicons'>
        <div className='userss'>MY BALANCE</div>
        <div className='iconbox'>
        <FontAwesomeIcon icon={faAngleUp}  className='downarrow'/>
        <div className='five'>+5</div>
        <div className='percent'>%</div>
        </div>
      </div>
      <div className='sevenhundred'>$7.8K</div>
      <div className='seeuserandicon'>
      <div className='seealluser'>See all users</div>
      <div className='backgroundbox4'>
      <FontAwesomeIcon icon={faGift} className='pink'/>
      </div>
      </div>
    </div>
   </div>
  )
}
