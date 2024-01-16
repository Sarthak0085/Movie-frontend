import React from 'react'
import { FaUser } from 'react-icons/fa'

const Promos = () => {
  return (
      <div className='my-20 py-10 md:px-20 px-8 bg-dry'>
          <div className='lg:grid lg:grid-cols-2 lg:gap-10 items-center'>
              <div className='flex lg:gap-10 gap-6 flex-col'>
                  <h1 className='text-xl xl:text-3xl capitalize font-sans font-medium xl:leading-relaxed'>
                      Download your movies watch offline <br />
                      Enjoy on your mobile
                  </h1>
                  <p className='text-text text-sm xl:text-base leading-6 xl:leading-8'>
                      repudiandae odio pariatur aut eum nobis modi aliquid molestias fugiat? Rerum quasi ea quos eaque aliquid.
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, voluptate a quae tempora quam
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, voluptate a quae tempora quam
                      repudiandae odio pariatur aut eum nobis modi aliquid molestias fugiat? Rerum quasi ea quos eaque aliquid.
                      repudiandae odio pariatur aut eum nobis modi aliquid molestias fugiat? Rerum quasi ea quos eaque aliquid.
                      repudiandae odio pariatur aut eum nobis modi aliquid molestias fugiat? Rerum quasi ea quos eaque aliquid.
                  </p>
                  <div className='flex gap-4 text-sm md:text-lg'>
                      <div className='flex-column bg-main text-subMain px-6 py-3 rounded font-bold'>
                          HD 4k
                      </div>
                     <div className='flex-rows gap-4 bg-main text-subMain px-6 py-3 rounded font-bold'>
                          <FaUser/> 2k
                      </div>
                  </div>
              </div>
              <div>
                  <img src='/images/mobile.png' alt='Mobile App' className='w-full object-contain'/>
              </div>
          </div>
    </div>
  )
}

export default Promos