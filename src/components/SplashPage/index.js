import React from 'react';

import Hero from '../Hero';
import Products from '../Products';
import Feature from '../Feature';
import Footer from '../Footer';

import { dinnerData, dessertData } from '../Products/data';

const SplashPage = () => {
  return (
    <div className='splash'>
      <Hero />
      <Products heading='Order Dinner' data={dinnerData} />
      <Feature />
      <Products heading='Sweet Tooth?' data={dessertData} />
      <Footer />
    </div>
  )
}

export default SplashPage
