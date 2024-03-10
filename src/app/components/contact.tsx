import React from 'react';
import Link from 'next/link';
import SocialMedia from './socialMedia';

const Contact = () => {
    const contactDetails = {
        header: "Contact Me",
        Description: "Always open to networking and improving my data analysis skills. Feel free to contact me with any questions, comments, or advice!",
        Methods: {
            "Get In Touch": "balajiraj.veluchamy@gmail.com"
        }
    };

    return (
        <div className='w-[45%] h-[70%] bg-white mx-auto flex flex-col items-center justify-center rounded-xl shadow-2xl shadow-white'>
            <div className='w-[80%] mx-auto '>
                <h1 className='font-bold text-center text-6xl'>{contactDetails.header}</h1>
                <div>
                    <p className=' text-center text-2xl py-8'>{contactDetails.Description}</p>
                </div>
                <div className='flex flex-col items-center space-y-4'>
                    {Object.entries(contactDetails.Methods).map(([method, link], index) => (
                        <Link key={index} href="mailto:bvelucha@asu.edu">
                            <div className='bg-black text-white p-3 rounded-lg text-center duration-300 hover:-translate-y-1.5 hover:duration-300 hover:scale-125  hover:bg-opacity-80 flex items-center space-x-1 w-48 h-12'>
                                <span className='w-full text-center text-lg'>{method}</span>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className='w-full text-center flex justify-center pt-12'>
                    <SocialMedia />
                </div>
            </div>

        </div>
    );
};

export default Contact;
