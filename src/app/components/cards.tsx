// import React from 'react';
// const Cards = ({ imageClass, header, description }: { imageClass: string, header: any, description: any }) => {
//     return (
//         <div className={`relative overflow-hidden rounded-3xl w-[90%] h-[100%] parallax  ${imageClass} mx-auto`}>
//             <div
//                 className="absolute inset-0 z-0 bg-cover bg-center"
//             />
//             <div className="relative z-10 flex items-center justify-center h-full text-white">
//                 <div className="text-center">
//                     <h1 className="text-4xl font-bold mb-4">{header}</h1>
//                     <p className="text-lg">{description}</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Cards;

import React from 'react';

interface CardsProps {
    imageClass: string;
    header: string;
    description: string;
    skills: string[];
    affiliation: string;
    duration: string;
}

const Cards: React.FC<CardsProps> = ({ imageClass, header, description, skills, affiliation, duration }) => {
    return (
        <div className={`relative overflow-hidden rounded-3xl w-[90%] h-auto parallax ${imageClass} mx-auto`}>
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
            />
            <div className="relative z-10 flex flex-col justify-center text-white p-16">
                <h1 className="text-4xl w-[50%] font-bold mb-2">{header}</h1>
                <p className="text-lg mb-4 w-[80%] pt-6">{description}</p>
                <div className="text-lg mb-4 pt-6 h-full">
                    <p className='pt-4'><strong>Affiliation:</strong> {affiliation}</p>
                    <p className='pt-4'><strong>Duration:</strong> {duration}</p>
                    <p className='pt-4 w-[70%]'><strong>Skills:</strong> {skills.join(', ')}</p>
                </div>
            </div>
        </div>
    );
};

export default Cards;
