import React from 'react'
import About from './components/about';
import Cards from './components/cards';
import Contact from './components/contact';
import Profile from './components/profile';
import { sampleCardsData } from './utils/socialmediaHandles';

const HomePage = () => {

    return (
        <div className='w-full h-full overflow-y-auto'>
            <div className='w-full h-screen pt-12'>
                <Profile />
            </div>
            <div className='w-full h-full py-12' id='projects'>
                {sampleCardsData.map((data, index) => (
                    <div className='py-14 w-full h-full'>
                        <Cards
                            key={index}
                            imageClass={data.imageClasses}
                            header={data.header}
                            description={data.description}
                            skills={data.skills}
                            affiliation={data.affiliation}
                            duration={data.duration}
                        />
                    </div>
                ))}
            </div>
            <div className='w-full h-screen pt-12'>
                <Contact />
            </div>
        </div>
    )
}

export default HomePage;
