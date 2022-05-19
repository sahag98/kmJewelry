import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import FlareOutlinedIcon from '@mui/icons-material/FlareOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import { data } from './data';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const features = [
  {
    name: 'Custom Designing',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: BorderColorOutlinedIcon,
  },
  {
    name: 'Maintenance & Repair',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ConstructionOutlinedIcon,
  },
  {
    name: 'Polishing & Shining',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: FlareOutlinedIcon,
  },
  {
    name: 'Precious Gems Setting',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: DiamondOutlinedIcon,
  },
]

export default function Example() {

  useEffect(() => {
    AOS.init({duration: 3000});
  }, []);

  return (
    
    <div className="py-12 bg-slate-100"  >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div  className="lg:text-center">
          <h2 name="Services" className="text-4xl text-indigo-600 font-semibold tracking-wide uppercase">Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to send money
          </p>
          <p  className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
            accusamus quisquam.
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
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
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