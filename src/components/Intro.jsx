import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {MenuIcon,XIcon} from '@heroicons/react/outline'
import {Link} from 'react-scroll';
export default function Intro() {
  return (
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="services">
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >   
                  </Transition>
                </>
              )}
            </Popover>
            
            <Link to="services" spy={true} smooth={true} offset={-200} className="no-underline ... cursor-pointer text-base font-medium text-gray-500 hover:text-gray-900">
              Home
            </Link>
            <Link to="services" spy={true} smooth={true} offset={-200} className="no-underline ... cursor-pointer text-base font-medium text-gray-500 hover:text-gray-900">
              About Us
            </Link>
            <Link to="services" spy={true} smooth={true} offset={-200} className="no-underline ... cursor-pointer text-base font-medium text-gray-500 hover:text-gray-900">
              Services
            </Link>
            <Link  to="services" spy={true} smooth={true} offset={-200} className="no-underline text-base font-medium text-gray-500 hover:text-gray-900">
              Library
            </Link>
            <Popover className="relative">
              {({ open }) => (
                <>  
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  
                        <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                        
                          <div className="mt-5 text-sm">
                            <a href="services" className="font-medium text-indigo-600 hover:text-indigo-500">
                              {' '}
                              View all posts <span aria-hidden="true">&rarr;</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="z-10 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              <Link to="services" spy={true} smooth={true} offset={-200} className="cursor-pointer text-base font-medium text-gray-500 hover:text-gray-900">
              Services
            </Link>
            <Link to="services" spy={true} smooth={true} offset={-200} className="cursor-pointer text-base font-medium text-gray-500 hover:text-gray-900">
              Services
            </Link>
            <Link to="services" spy={true} smooth={true} offset={-200} className="cursor-pointer text-base font-medium text-gray-500 hover:text-gray-900">
              Services
            </Link>
            <Link to="services" spy={true} smooth={true} offset={-200} className="text-base font-medium text-gray-500 hover:text-gray-900">
              Library
            </Link>
        
              </div>
             
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}