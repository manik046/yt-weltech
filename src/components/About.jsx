import React from 'react'


const About = () => {
  return (
    <div name='about' 
         className='w-full md:h-screen text-white bg-gradient-to-b from-cyan-700 to-cyan-900'>
        <div className='md:max-w-screen-lg justify-center px-4 mx-auto flex flex-col w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>
            <p className='text-xl mt-20'>
                Saving is Our mission. We provide innovative Engineering
                Solutions, prioritize the Process Flow, Space Utilization, cost
                effective Utility Infrastructure, Saving Energy and Simplify the
                overall layout. Ensured best efficiency, user friend operations,
                less environmental impact, and achieve business objectives.
                We have the expertise to deliver tailored solutions that meet
                our clients' specific requirements. We are committed to
                excellence in engineering and to use the latest technology
                and practices to deliver the highest quality services to our
                clients.
            </p>

            <br />

            <p className='text-xl'>
                We try to read you imagine, evaluate your plan, value your opinion and present you in real. We
                believe in differential between project to project, consider as new rather copy past solution. We
                provide you innovative strategies and updated solutions with safety, efficient, cost-effective and
                constant operation.
            </p>


        </div>
    </div>
  )
}

export default About