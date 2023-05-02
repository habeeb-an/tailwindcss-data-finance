import React from 'react'
import Single from '../assets/single.png'
import triple from '../assets/triple.png'
import double from '../assets/double.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full  shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500'>
          <img src={Single} alt='single' className='w-20 mx-auto bg-white'/>
          <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
          <p className='font-bold text-center text-4xl'>$149</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
            <p className='py-2 border-b mx-8'>1 Granted User</p>
            <p className='py-2 border-b mx-8'>Send Up to 2 GB</p>
          </div>
          <button  className=' bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 '>Start Free Trial</button>
        </div>

        <div className='w-full bg-gray-100 shadow-xl flex flex-col p-4 my-8 md:my-0  rounded-lg hover:scale-105 duration-500'>
          <img src={double} alt='single' className='w-20 mx-auto bg-transparent'/>
          <h2 className='text-2xl font-bold text-center py-8'>Two Users</h2>
          <p className='font-bold text-center text-4xl'>$249</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>1000 GB Storage</p>
            <p className='py-2 border-b mx-8'>2 Granted User</p>
            <p className='py-2 border-b mx-8'>Send Up to 20 GB</p>
          </div>
          <button  className=' bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 '>Start Free Trial</button>
        </div>

        <div className='w-full   shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500'>
          <img src={triple} alt='single' className='w-20 mx-auto bg-white'/>
          <h2 className='text-2xl font-bold text-center py-8'>Multi Users</h2>
          <p className='font-bold text-center text-4xl'>$349</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>5000 GB Storage</p>
            <p className='py-2 border-b mx-8'>5 Granted User</p>
            <p className='py-2 border-b mx-8'>Send Up to 200 GB</p>
          </div>
          <button  className=' bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 '>Start Free Trial</button>
        </div>
      </div>
    </div>
  )
}

export default Cards

