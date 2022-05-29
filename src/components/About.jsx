import React from 'react'

const About = () => {
  return (
    <div name="About" class="py-16 bg-white scroll-smooth">
      <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div class="md:7/12 lg:w-6/12">
            <h2 className="text-4xl text-indigo-600 font-semibold tracking-wide uppercase">About Us</h2>
            <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">KM Jewelry Story and Value</h2>
            <p class="mt-6 text-gray-600 ">KM Jewelry is owned by Kevork Arzoumanian, an expert and detail-oriented professional at jewelry and diamond setting for over 40 years! Highly Experienced in a combination of American, European and Mediterranean jewelry approach.</p>
            <p class="mt-4 text-gray-600">Providing services on all kinds of jewerly related products such as rings, bracelets, necklaces, and more!</p>
            <p class="mt-4 text-gray-600">KM Jewelry is dedicated to provide exceptional customized service to its clients and fullfill their jewelry wishes. </p>
          </div>
          <div class="md:7/12 lg:w-3/12 rounded-md ">

            <img src="https://cdn.glitch.global/5288658f-8afb-4ac7-b1fa-300b8de8635f/aef0997f-0b2c-4922-99cf-30c9097017e8%20(1).jpg?v=1653711407028" alt="girl" loading="lazy" width="" height="" className='rounded-md' />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default About