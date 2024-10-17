import React, { useEffect, useState } from 'react';
import img1 from '../assets/images/img1.png';
import img2 from '../assets/images/img2.png';
import img3 from '../assets/images/img3.png';
import Navbar from '../components/navbar';

const About = () => {
  const [randomFox, setRandomFox] = useState("");

  const changeFox = () => {
    fetch("https://randomfox.ca/floof")
    .then ((response)=> response.json())
    .then ((data) => {
      console.log(data.message);
      setRandomFox(data.message);
    })
  }

  useEffect(
    () => {
    changeFox()
    }, [])


  return (
    <div>
        <Navbar/>
      <h1 className='uppercase text-4xl flex justify-center items-center pt-10'>About Us</h1>

      <h2 className='text-2xl flex justify-center items-center pt-3'>We offer </h2>

      <div className='flex justify-evenly items-center pt-6'>

        <div className='flex flex-col items-center'>
          <img className='w-48 h-auto' src={img3} alt="Free Shipping" />
          <div className='text-center pt-3'>
            <h2 className='font-bold text-2xl'>FREE SHIPPING</h2>
            <p>ON ORDER OVER $100</p>
          </div>  
        </div>

        <div className='flex flex-col items-center'>
          <img className='w-48 h-auto' src={img1} alt="Stay Fresh" />
          <div className='text-center pt-3'>
            <h2 className='font-bold text-2xl'>STAY FRESH</h2>
            <p>PRODUCT WELL PACKAGED</p>
          </div>  
        </div>

        <div className='flex flex-col items-center'>
          <img className='w-48 h-auto' src={img2} alt="Support" />
          <div className='text-center pt-3'>
            <h2 className='font-bold text-2xl'>SUPPORT</h2>
            <p>24/7 SUPPORT ASSURED</p>
          </div>  
        </div>

      </div>

      <div className='space-y-4 flex  flex-col justify-center items-center pt-10'>
        <h1 className='text-xl'>Fox image</h1>
      <img className='w-80 h-52 rounded' src={randomFox} alt="img" />
      <button className=' text-2xl border-black border-2 h-14 rounded w-32' onClick={changeFox}>Next</button>
      </div>
      
    </div>
  );
}

export default About;
