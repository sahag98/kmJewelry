import React from 'react'

const About = () => {
  return (
    <div class="py-16 bg-white scroll-smooth">
      <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div class="md:7/12 lg:w-6/12">
            <h2 className="text-4xl text-indigo-600 font-semibold tracking-wide uppercase">About Us</h2>
            <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">Nuxt development is carried out by passionate developers</h2>
            <p class="mt-6 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
            <p class="mt-4 text-gray-600"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
          </div>
          <div class="md:9/12 lg:w-3/12 rounded-md  ">

            <img src="https://www.unh.edu/unhtoday/sites/default/files/styles/article_huge/public/article/2019/professional_woman_headshot.jpg?itok=3itzxHXh" alt="girl" loading="lazy" width="" height="" className='rounded-md md:7/12' />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default About