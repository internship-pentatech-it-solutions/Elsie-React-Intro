import React from 'react'
import hero from '../assets/images/hero.jpg'
import Navbar from '../components/navbar'

const Home = () => {
    return (
        <div>
            <Navbar/>
            <div className="relative">
                <img className="w-screen h-screen object-cover" src={hero} alt="image" />
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <div className="absolute inset-0 flex flex-col justify-center items-center space-y-6 text-white text-4xl">
                    <h1 className='text-6xl' style={{ fontFamily: "'Kaushan Script', cursive" }}> We serve fresh fruits and vegetables</h1>
                    <p className='text-2xl' style={{ fontFamily: 'Roboto, sans-serif' }}>We deliver organic vegetables and fruits</p>

                </div>

            </div>
        </div>


    )
}

export default Home