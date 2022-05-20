import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Footer = () => {
  return (
    <footer class="text-center lg:text-left bg-slate-100 text-gray-600">
      <div class="flex justify-center items-center lg:justify-center p-6 border-b border-gray-200">
        <div class="mr-4 hidden lg:block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div class="flex justify-center">
          <a href="#!" class="mr-6 text-gray-600">
            <FacebookOutlinedIcon className='hover:text-sky-600' />
          </a>
          <a href="#!" class="mr-6 text-gray-600">
            <InstagramIcon className='hover:text-fuchsia-400' />
          </a>
          <a href="#!" class="mr-6 text-gray-600">
            <LinkedInIcon className='hover:text-sky-600' />
          </a>

        </div>
      </div>
      <div class="mx-6 py-10 text-center md:text-left">
        <div class="grid grid-1 md:grid-cols-2 lg:grid-cols-3 gap-8">


          <div class="">
            <h6 class="uppercase font-semibold mb-4 flex justify-center md:justify-start">
              Contact
            </h6>

            <p class="flex items-center justify-center md:justify-start mb-4">
              <MapOutlinedIcon className='mr-1 text-blue-500' />
              <a className='hover:text-sky-500  underline ' href="http://maps.google.com/?q=2213RockroseStreetPalmdale" target="blank">
                2213 Rockrose Street Palmdale, CA 93551
              </a>
            </p>
            <p class="flex items-center justify-center md:justify-start mb-4">
              <EmailOutlinedIcon className='mr-1 text-red-500 ' />
              karzoumanian@gmail.com
            </p>
            <p class="flex items-center justify-center md:justify-start mb-4">
              <WhatsAppIcon className='mr-1 text-green-500 ' />
              <a className='hover:text-sky-500 underline' href="https://api.whatsapp.com/send?phone=16613000476" target="blank">
                +1 661 300 0476
              </a>
            </p>
          </div>
        </div>
      </div>
      <div class="text-center lg:text-left p-6 bg-slate-100 border-t border-gray-200">
        <span>© 2022 Copyright:</span>
        <a class="text-gray-600 font-semibold" href="km">KM Jewelry</a>
      </div>
    </footer>
  )
}

export default Footer