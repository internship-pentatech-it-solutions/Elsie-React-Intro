import React from 'react';
import hero from '../assets/images/hero.jpg';
import Navbar from '../components/navbar';

const Contact = () => {
    return (
        <div>
            <Navbar/>
             <div className="bg-white py-5 flex justify-center">
            <div className="border border-gray-300 rounded-lg p-6 shadow-lg w-[40vw]">
                <div className='relative'>
                    <img className='h-[30vh] w-[40vw] object-cover' src={hero} alt="img" />
                    <div className="absolute inset-0 bg-black opacity-65"></div>

                    <div className="absolute inset-0 flex space-y-2 pl-4 flex-col justify-center ">
                        <h1 className="text-3xl font-bold text-[#AA9903]">CONTACT US</h1>
                        <div className='border border-[#AA9903] w-72'></div>
                        <p className=" text-[#AA9903]">Fill out the form below to learn more!</p>
                    </div>
                </div>

                <form action="" className="pt-5">
                    <div className='flex space-x-6'>
                        <div className="mb-5">
                            <label htmlFor='name' className="mb-3 block text-base font-medium text-[#07074D]">
                                Name
                            </label>
                            <input 
                                type="text" 
                                name="name" 
                                id="name" 
                                placeholder="Enter full name" 
                                autoComplete='name' 
                                className="w-full rounded-md border border-[#585757] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#100F11] focus:shadow-md" 
                            />
                        </div>

                        <div className="mb-5">
                            <label htmlFor='email' className="mb-3 block text-base font-medium text-[#07074D]">
                                Email
                            </label>
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                placeholder="Enter email" 
                                autoComplete='email' 
                                className="w-full rounded-md border border-[#585757] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#100F11] focus:shadow-md" 
                            />
                        </div>
                    </div>

                    <div className="w-[36vw] pl-2 mb-5">
                        <label htmlFor='message' className="mb-3 block text-base font-medium text-[#07074D]">
                            Message
                        </label>
                        <textarea 
                            name="message" 
                            id="message" 
                            placeholder="Type your message here..." 
                            className="w-full h-40 rounded-md border border-[#585757] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#100F11] focus:shadow-md resize-none"
                            required
                        ></textarea>
                    </div>

                    <div className='flex justify-center items-center'>
                    <button 
                        type="submit" 
                        className="bg-[#AA9903] text-white w-[18vw] h-[6vh]  rounded-md hover:bg-[#AA9903] transition duration-300"
                    >
                        Submit
                    </button>
                    </div>
                    
                </form>
            </div>
        </div>
        </div>
       
    );
}

export default Contact;
