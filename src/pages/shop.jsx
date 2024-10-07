import React from 'react';
import cabbages from '../assets/images/cabbages.jpg';
import carrots from '../assets/images/carrots.jpg';
import dried from '../assets/images/dried.jpg';
import peas from '../assets/images/peas.jpg';
import pepper from '../assets/images/pepper.jpg';
import potatoes from '../assets/images/potatoes.jpg';
import strawberry from '../assets/images/strawberry.jpg';
import tomatoes from '../assets/images/tomatoes.jpg';
import Navbar from '../components/navbar';

const Shop = () => {
  return (
    <div>
        <Navbar/>
        <div className='grid grid-cols-3 gap-4 pt-5 pl-5'>
      <div className="relative">
        <img className='rounded-md h-64 w-[30vw] object-cover' src={cabbages} alt="Cabbages" />
        <p className='absolute bottom-1 left-0  w-36 h-10 rounded-xl bg-[#AA9903] font-semibold text-xl text-center text-black'>
          Cabbages
        </p>
      </div>

      <div className="relative">
        <img className='rounded-md h-64 w-[30vw] object-cover' src={carrots} alt="Carrots" />
        <p className='absolute bottom-1 left-0  w-36 h-10 rounded-xl bg-[#AA9903] font-semibold text-xl text-center text-black'>
          Carrots
        </p>
      </div>

      <div className="relative">
        <img className='rounded-md h-64 w-[30vw] object-cover' src={dried} alt="Dried Goods" />
        <p className='absolute bottom-1 left-0  w-36 h-10 rounded-xl bg-[#AA9903] font-semibold text-xl text-center text-black'>
          Dried nuts
        </p>
      </div>

      <div className="relative">
        <img className='rounded-md h-64 w-[30vw] object-cover' src={peas} alt="Peas" />
        <p className='absolute bottom-1 left-0  w-36 h-10 rounded-xl bg-[#AA9903] font-semibold text-xl text-center text-black'>
          Peas
        </p>
      </div>

      <div className="relative">
        <img className='rounded-md h-64 w-[30vw] object-cover' src={pepper} alt="Pepper" />
        <p className='absolute bottom-1 left-0  w-36 h-10 rounded-xl bg-[#AA9903] font-semibold text-xl text-center text-black'>
          Pepper
        </p>
      </div>

      <div className="relative">
        <img className='rounded-md h-64 w-[30vw] object-cover' src={potatoes} alt="Potatoes" />
        <p className='absolute bottom-1 left-0  w-36 h-10 rounded-xl bg-[#AA9903] font-semibold text-xl text-center text-black'>
          Potatoes
        </p>
      </div>

      <div className="relative">
        <img className='rounded-md h-64 w-[30vw] object-cover' src={strawberry} alt="Strawberries" />
        <p className='absolute bottom-1 left-0  w-36 h-10 rounded-xl bg-[#AA9903] font-semibold text-xl text-center text-black'>
          Strawberries
        </p>
      </div>

      <div className="relative">
        <img className='rounded-md h-64 w-[30vw] object-cover' src={tomatoes} alt="Tomatoes" />
        <p className='absolute bottom-1 left-0  w-36 h-10 rounded-xl bg-[#AA9903] font-semibold text-xl text-center text-black'>
          Tomatoes
        </p>
      </div>
    </div>
    </div>
    
  );
};

export default Shop;
