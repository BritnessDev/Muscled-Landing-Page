import { FC, useEffect, useState } from 'react'
import React from 'react'
import Image from 'next/image';
import logo from "components/assets/logo/logo1.png";
import { ChevronDownIcon, MenuIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router';
import Link from 'next/link';

const Header: FC = () => {
  const [modalOpen, setModalOpen] = useState<String>('')

  return (
    <div className='flex bg-white shadow-sm justify-between w-full items-center py-3 px-5 md:px-10 lg:px-20'>
      {/* Logo  */}
      <div className='relative h-10 w-32'>
        <Image  src={logo} layout='fill' className=' object-contain' />
      </div>

      {/* Menu */}
      <ul className='space-x-2 text-sm xl:text-md justify-center flex-1 mx-10 hidden lg:flex'>
        <div className='relative'>
          <div
            onClick={() => setModalOpen(`${modalOpen === '1' ? '' : '1'}`)}
            className=' flex  cursor-pointer p-2 items-center'
          >
            <li className={`${modalOpen === '1' && 'text-red-500'}`}>
              SEO & Lead Generation
            </li>
            <ChevronDownIcon className='h-5 w-6 ml-2' />
          </div>
          <div
            className={`absolute top-15 z-50 ${
              modalOpen !== '1' && 'hidden'
            } w-full py-2`}
          >
            <ul>
              <Link href={`/seo-marketing-services`}>
                <li className='p-2 cursor-pointer bg-slate-50'>SEO Marketing Services</li>
              </Link>

              <Link href={`/seo-audit-services`}>
                <li className='p-2 cursor-pointer bg-slate-50'>SEO Audit Services</li>
              </Link>

              <Link href={`/speed-optimization-services`}>
                <li className='p-2 cursor-pointer bg-slate-50'>SEO Optimization Services</li>
              </Link>

              <Link href={`/services-for-paid-social-media-ad`}>
                <li className='p-2 cursor-pointer bg-slate-50'>Services For Paid Social Media Ad </li>
              </Link>

              <Link href={`/enterprise-social-media-advertising-services`}>
                <li className='p-2 cursor-pointer bg-slate-50'>Enterprise Social Media Advertising Services</li>
              </Link>

              <Link href={`/social-media-services`}>
                <li className='p-2 cursor-pointer bg-slate-50'>Social Media Services</li>
              </Link>

              <Link href={`/social-media-design`}>
                <li className='p-2 cursor-pointer bg-slate-50'>Social Media Design</li>
              </Link>

              <Link href={`/ecommerce-seo-services`}>
                <li className='p-2 cursor-pointer bg-slate-50'>Ecommerce SEO Services</li>
              </Link>

              <Link href={`/ecommerce-ppc-management`}>
                <li className='p-2 cursor-pointer bg-slate-50'>Ecommerce PPC Management</li>
              </Link>

              <Link href={`/muscled-d2c-social-advertising-services`}>
                <li className='p-2 cursor-pointer bg-slate-50'>Muscled D2C Social Advertising Services</li>
              </Link>
              
            </ul>
          </div>
        </div>

        <div className='relative'>
          <div
            onClick={() => setModalOpen(`${modalOpen === '2' ? '' : '2'}`)}
            className='flex cursor-pointer p-2 items-center'
          >
            <li className={`${modalOpen === '2' && 'text-red-500'}`}>
              Ecommerce
            </li>
            <ChevronDownIcon className='h-5 w-6 ml-2' />
          </div>
          <div
            className={`absolute top-15 ${
              modalOpen !== '2' && 'hidden'
            } w-full py-2`}
          >
            <ul>
              <li className='p-2 bg-slate-50'>sub-menu</li>
            </ul>
          </div>
        </div>

        <div className='relative'>
          <div
            onClick={() => setModalOpen(`${modalOpen === '3' ? '' : '3'}`)}
            className='flex cursor-pointer p-2 items-center'
          >
            <li className={`${modalOpen === '3' && 'text-red-500'}`}>
              UX & Interactive
            </li>
            <ChevronDownIcon className='h-5 w-6 ml-2' />
          </div>
          <div
            className={`absolute top-15 ${
              modalOpen !== '3' && 'hidden'
            } w-full py-2`}
          >
            <ul>
              <li className='p-2 bg-slate-50'>sub-menu</li>
            </ul>
          </div>
        </div>

        <div className='relative'>
          <div
            onClick={() => setModalOpen(`${modalOpen === '4' ? '' : '4'}`)}
            className='flex cursor-pointer p-2 items-center'
          >
            <li className={`${modalOpen === '4' && 'text-red-500'}`}>
              Our Technology
            </li>
            <ChevronDownIcon className='h-5 w-6 ml-2' />
          </div>

          <div
            className={`absolute top-15 ${
              modalOpen !== '4' && 'hidden'
            } w-full py-2`}
          >
            <ul>
              <li className='p-2 bg-slate-50'>sub-menu</li>
            </ul>
          </div>
        </div>

        <div className='relative'>
          <div
            onClick={() => setModalOpen(`${modalOpen === '5' ? '' : '5'}`)}
            className='flex cursor-pointer p-2 items-center'
          >
            <li className={`${modalOpen === '5' && 'text-red-500'}`}>
              Who We Are
            </li>
            <ChevronDownIcon className='h-5 w-6 ml-2' />
          </div>

          <div
            className={`absolute top-15 ${
              modalOpen !== '5' && 'hidden'
            } w-full py-2`}
          >
            <ul>
              <li className='p-2 bg-slate-50'>sub-menu</li>
              <li className='p-2 bg-slate-50'>sub-menu</li>
              <li className='p-2 bg-slate-50'>sub-menu</li>
            </ul>
          </div>
        </div>
      </ul>

      {/* Button Get free Proposal */}

      <button className='bg-black rounded-full text-white px-5 py-2 cursor-pointer hidden lg:flex'>
        Get Free Proposal
      </button>

      <MenuIcon className='lg:hidden h-10 w-10' />
    </div>
  )
}

export default Header
