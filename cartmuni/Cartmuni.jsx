import React from 'react'
import './Cartmuni.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CircularProgressbar } from "react-circular-progressbar";
import { faEllipsisVertical,faAngleDown,faAngleUp } from '@fortawesome/free-solid-svg-icons'
import "react-circular-progressbar/dist/styles.css";
export default function cartmuni() {
  return (
  <div className='bigbox3'>
    <div className='bigbox3bhitra'>
    <div className='totalrevenueandicon'>
        <div className='totalrevenue'>Total Revenue</div>
        <FontAwesomeIcon icon={faEllipsisVertical}  className='threedots'/>
    </div>
    <div className='percent'>
    <CircularProgressbar className='seventyper'
            value={70}
            text={"70%"}
            strokeWidth={5} 
          />
          </div>
          <div className='totalsalescontainer'></div>
          <div className='totalsales'>Total Sales Made Today</div>
          <div className='dollor420'>420$</div>
          <div className='thyathyadabba'>
          <div className='thyathya'>Previous transactions processing.Last payments may </div>
          <div className='thyathya'>not be included</div>
          </div>
     <div className='threetexts'>
        <div className='target'>Target</div>
        <div className='target'>Last Week</div>
        <div className='target'>Last Month</div>
     </div>
     <div className='threedollorsb'>
     <div className='threedollors'>
     <FontAwesomeIcon icon={faAngleDown} />
     <div className='dollors'>$12.4k</div>
     </div>
     <div className='threedollors1'>
     <FontAwesomeIcon icon={faAngleUp}  className=''/>
     <div className='dollors'>$12.4k</div>
     </div>
     <div className='threedollors'>
     <FontAwesomeIcon icon={faAngleDown} />
     <div className='dollors'>$12.4k</div>
     </div>
     </div>
          </div>
  </div>
  )
}
