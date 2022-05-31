import React,{ Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link } from 'react-scroll';

export default function Intro() {
  return (
    <Popover className="relative bg-white " >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
              <img
                className="h-20 w-auto"
                src="https://cdn.glitch.global/5288658f-8afb-4ac7-b1fa-300b8de8635f/Add_a_heading__3_-removebg-preview.png?v=1653865947431"
                alt=""
              />
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 ">
              <MenuIcon className="h-8 w-8" aria-hidden="true" />
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
            <Link to="Gallery" spy={true} smooth={true} offset={-200} className="cursor-pointer text-lg font-medium text-gray-500 hover:text-indigo-500 no-underline">
              Gallery
            </Link>
            <Link to="About" spy={true} smooth={true} offset={-200} className="cursor-pointer text-lg font-medium text-gray-500 hover:text-indigo-500 no-underline">
              About Us
            </Link>
            <Link to="Services" spy={true} smooth={true} offset={-200} className="cursor-pointer text-lg font-medium text-gray-500 hover:text-indigo-500 no-underline">
              Services
            </Link>
            <Link to="Contact" spy={true} smooth={true} offset={-200} className="cursor-pointer text-lg font-medium text-gray-500 hover:text-indigo-500 no-underline">
              Contact Us
            </Link>

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
        <Popover.Panel focus className=" z-10 absolute top-0 inset-x-0 p-2 transition transform  ">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-20 w-auto"
                    src="https://cdn.glitch.global/5288658f-8afb-4ac7-b1fa-300b8de8635f/Add_a_heading__3_-removebg-preview.png?v=1653865947431"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 ">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-9 w-9" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              {/* <div className="mt-6">
                <nav className="grid gap-y-8">
                </nav>
              </div> */}
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <Link to="Gallery" spy={true} smooth={true} offset={-200} className="z-20 cursor-pointer text-base font-medium text-gray-900 hover:text-gray-700 no-underline">
                  Gallery
                </Link>
                <Link to="About" spy={true} smooth={true} offset={-200} className="cursor-pointer text-base font-medium text-gray-900 hover:text-gray-700 no-underline">
                  About Us
                </Link>
                <Link to="Services" spy={true} smooth={true} offset={-200} className="cursor-pointer text-base font-medium text-gray-900 hover:text-gray-700 no-underline">
                  Services
                </Link>
                <Link to="Contact" spy={true} smooth={true} offset={-200} className="cursor-pointer text-base font-medium text-gray-900 hover:text-gray-700 no-underline">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}