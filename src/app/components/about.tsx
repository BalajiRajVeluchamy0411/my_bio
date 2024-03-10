import React from 'react';

const About = () => {
    const data = {
        "Welcome": "Welcome to my portfolio!",
        "Name": "Balaji Raj Veluchamy",
        "Title": "Business Analyst",
        "Experience": {
            "Years": 4,
            "Field": "Automobile Engineering",
            "Transition": "Operational Excellence at a Multinational Company"
        },
        "Skills": {
            "Total Quality Management": true,
            "Lean Six Sigma": true,
            "Decision-making": true,
            "Problem-solving": true,
            "Data Visualization": {
                "Tools": ["Power BI"],
                "Certification": true,
                "Industrial Projects": true
            },
            "Advanced Skills": {
                "Excel": true,
                "PowerPoint": true,
                "Python": true,
                "SQL": true
            },
            "Passion": {
                "Big Data Analysis": true,
                "Machine Learning": true,
                "Decision Modeling": true,
                "Supply Chain Analytics": true
            }
        },
        "ThankYou": "Thank you for taking the time to explore my portfolio! I look forward to connecting with you."
    };

    return (
        <div className='w-[45%] h-[90%] bg-white mx-auto flex flex-col items-center justify-center rounded-xl p-6'>
            <h1 className='text-4xl font-extrabold mb-4'>About Me</h1>
            <p className='text-base font-semibold text-slate-700'>{data.Title}</p>
            <p className='text-lg font-semibold'>Years of Experience: <span>{data.Experience.Years}</span></p>
            <p className='text-lg font-semibold'>Field: <span>{data.Experience.Field}</span></p>
            <p className='text-lg font-semibold'>Transition: <span>{data.Experience.Transition}</span></p>
            <h2 className='text-2xl font-bold mt-6'>Skills</h2>
            <ul className='list-disc pl-6'>
                {Object.entries(data.Skills).map(([skill, value]) => (
                    <li className='text-lg' key={skill}>
                        {typeof value === 'object' ? (
                            <>
                                {skill}
                                <ul className='list-disc pl-6'>
                                    {Object.entries(value).map(([subSkill, subValue]) => (
                                        <li className='text-lg' key={subSkill}>
                                            {subSkill}: {subValue.toString()}
                                        </li>
                                    ))}
                                </ul>
                            </>
                        ) : (
                            `${skill}: ${value.toString()}`
                        )}
                    </li>
                ))}
            </ul>
            <p className='text-lg mt-6'>{data.ThankYou}</p>
        </div>
    );
};

export default About;
