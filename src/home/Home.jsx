import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../header/Header'
import './Home.css'
import Cart from '../cart/Cart'
import Cartmuni from '../cartmuni/Cartmuni'
import Cartmuni2 from '../cartmuni2/Cartmuni2'
import Buttom from '../bottom/Buttom'
function Home() {
  return (
    <div className='flexbox'>
      <Sidebar />
      <div className='navbartala'>
        <Header />
        <Cart />
        <div className='cartmuddnidfdf'>
          <Cartmuni />
          <div className="jkjkmk"><Cartmuni2 /></div>
          
        </div>
    <Buttom />
      </div>
    </div>
  )
}

export default Home