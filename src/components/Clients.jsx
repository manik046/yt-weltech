import React from 'react'
import forture from '../assert/clients/fortune.jpg'
import windy from '../assert/clients/windy.png'
import united from '../assert/clients/united_nine_bangladesh.jpg'

const Clients = () => {
    
    const client = [
        {
            id: 1,
            src: forture,
            title: 'Forture Group',
            style: 'shadow-white'
        },
        {
            id: 2,
            src: windy,
            title: 'Windy Group',
            style: 'shadow-black'
        },
        {
            id: 3,
            src: united,
            title: 'United Nine Bangldesh',
            style: 'shadow-white'
        },
    ]
  return (
    <div name="clients"
         className='w-full md:h-screen bg-gradient-to-b from-cyan-700 to-cyan-900'>
        <div className='max-w-screen-lg text-white w-full h-full flex flex-col mx-auto justify-center'>
            <div>
                <p className='text-4xl font-bold p-2 border-b-4 border-gray-500 inline'>
                    Clients
                </p>
                <p className='py-6'>
                    See our Clients List
                </p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 
                                                px-12 sm:px-0'>
                {
                    client.map(({ id, src, title, style }) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img 
                                src={src} 
                                alt='' 
                                className='w-20 mx-auto'
                                />
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))
                }
                
            </div>
            
        </div>
    </div>
  )
}

export default Clients