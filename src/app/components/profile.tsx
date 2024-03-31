import React from 'react'
import Image from 'next/image'
import Photo from "../../../public/assets/userPhoto.jpg"
import SocialMedia from './socialMedia'
import Link from 'next/link'
const Profile = () => {

    return (
        <div className='w-[40%] h-[85%] bg-white mx-auto flex flex-col items-center justify-center rounded-xl shadow-2xl shadow-white'>
            <div className='w-[30%] h-[30%] rounded-2xl'>
                <Image className='w-[80%] h-[80%] rounded-full' src={Photo} alt="" />
            </div>
            <div>
                <h1 className='w-full text-center font-bold text-4xl'>Balaji Raj Veluchamy</h1>
                <div className='w-full text-center text-lg  py-6'>Master’s in Business Analytics</div>
            </div>
            <div>
                <SocialMedia />
            </div>
            <div className='flex flex-col pt-16'>
                <div className="inline-flex items-center">
                    <Link href="#projects">
                        <button className='bg-black p-3 rounded-lg text-white hover:bg-opacity-80 duration-300 hover:-translate-y-1.5 hover:duration-300 hover:scale-125  flex items-center space-x-1 w-48 h-12'>
                            <svg fill='white' className='w-[20px] h-[20px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z" />
                            </svg>
                            <span className='pl-4 text-xl whitespace-nowrap'>Recent Project</span>
                        </button>
                    </Link>
                </div>
                <div>
                    <a download href="../../../public/assets/resume.docx">
                        <button className='bg-black mt-8 text-center p-3 rounded-lg text-white duration-300 hover:-translate-y-1.5 hover:duration-300 hover:scale-125  hover:bg-opacity-80 flex items-center space-x-1 w-48 h-12'>
                            <svg fill='white' className='w-[18px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z" /></svg>
                            <span className='pl-4 w-full text-xl whitespace-nowrap'>Resume</span>
                        </button>
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Profile