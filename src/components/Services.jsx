import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import FlareOutlinedIcon from '@mui/icons-material/FlareOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import React  from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const features = [
  {
    name: 'Diamond Setting',
    description:
      'Correctly set diamonds in their places, and ensure each diamond is properly placed.',
    icon: DiamondOutlinedIcon,
  },
  {
    name: 'Maintenance & Repair',
    description:
      'Restore any kind of defects on jewelry and perform the appropiate fixes.',
    icon: ConstructionOutlinedIcon,
  },
  {
    name: 'Polishing & Shining',
    description:
      'Clean up jewelry with proper tools and make it look brand new.',
    icon: FlareOutlinedIcon,
  },
  {
    name: 'And More!',
    description:
      '',
    icon: MoreHorizIcon,
  },
  
]

export default function Example() {

  useEffect(() => {
    AOS.init({duration: 3000});
  }, []);

  return (
    
    <div className="py-12 bg-slate-100"  >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div name="Services"  className="lg:text-center">
          <h2  className="text-4xl text-indigo-600 font-semibold tracking-wide uppercase">Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            The best place for your jewelry needs
          </p>
          <p  className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            For more information on our services, kindly call our phone number, or reach out to us using the contact form below the gallery!
          </p>
        </div>

        <div className="mt-10" >
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-extrabold text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}