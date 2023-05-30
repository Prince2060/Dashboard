import React from 'react'
import './Buttom.css'
import predator from '../images/predator.jpg'
import ps5 from '../images/ps5.png'
export default function Buttom() {
    return (
        <div className='bossbox'>
            <div className='latesttransaction'>Lates Transaction</div>
            <div className='insidebox'>
            <div className='transactionbox'>
                <div className='textsinside'>Tracking ID</div>
                <div className='textsinside'>Product</div>
                <div className='textsinside'>Customer</div>
                <div className='textsinside'>Date</div>
                <div className='textsinside'>Amount</div>
                <div className='textsinside'>Payment Method</div>
                <div className='textsinside'>Status</div>
            </div>
            <div className='bars'></div>
            <div className='transactionbox'>
            <div className='textinside'>1143243</div>
            <div className='logoandtext'>
                <img src={predator} className='predatorimg'/>
                <div className='predatortext'>Predator</div>
            </div>
            <div className='textinside'>John Smith</div>
            <div className='textinside'>1 March</div>
            <div className='textinside'>785</div>
            <div className='textinside'>Cash on Delivery</div>
            <div className='approvebox'>
                <div className='approved'>Approved</div>
            </div>
            </div>
            <div className='bars'></div>
            <div className='transactionbox'>
            <div className='textinside'>2143548</div>
            <div className='logoandtext'>
                <img src={predator} className='predatorimg'/>
                <div className='predatortext'>Predator</div>
            </div>
            <div className='textinside'>John ceena</div>
            <div className='textinside'>1 March</div>
            <div className='textinside'>900</div>
            <div className='textinside'>Online Payment</div>
            <div className='approvebox1'>
                <div className='approved'>Pending</div>
            </div>
            </div>
            <div className='bars'></div>
            <div className='transactionbox'>
            <div className='textinside'>3143247</div>
            <div className='logoandtext'>
                <img src={predator} className='predatorimg'/>
                <div className='predatortext'>Predator</div>
            </div>
            <div className='textinside'>John lunda</div>
            <div className='textinside'>1 March</div>
            <div className='textinside'>800</div>
            <div className='textinside'>Cash on Delivery</div>
            <div className='approvebox1'>
                <div className='approved'>Pending</div>
            </div>
            </div>
            <div className='bars'></div>
            <div className='transactionbox'>
            <div className='textinside'>4143244</div>
            <div className='logoandtext'>
                <img src={ps5} className='predatorimg'/>
                <div className='predatortext'>PS5</div>
            </div>
            <div className='textinside'>John manis</div>
            <div className='textinside'>1 March</div>
            <div className='textinside'>300</div>
            <div className='textinside'>online pay</div>
            <div className='approvebox'>
                <div className='approved'>Approved</div>
            </div>
            </div>
            <div className='bars'></div>
            <div className='transactionbox'>
            <div className='textinside'>6143242</div>
            <div className='logoandtext'>
                <img src={predator} className='predatorimg'/>
                <div className='predatortext'>Predator</div>
            </div>
            <div className='textinside'>John karki</div>
            <div className='textinside'>1 March</div>
            <div className='textinside'>500</div>
            <div className='textinside'>online Pay</div>
            <div className='approvebox1'>
                <div className='approved'>Pending</div>
            </div>
            </div>
            </div>
            </div>
       
    )
}
