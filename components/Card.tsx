import React, { FC } from 'react'
import { IProps } from '../types/types'
import Button from './Button'
import Star from "./assets/svg/Star";
import Check from "./assets/svg/Check"
import Image from 'next/image';

const Card: FC<IProps> = ({ type, starIcon, subtitle, list, title, description, duration, highlight, height }) => {
  const center = false
  const image =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'

  const button = 'hello world'

  if (type==='pricing'){
    return(
      <div className={`flex flex-col w-full  justify-between align-baseline space-y-5  border overflow-hidden rounded-md border-gray-500 ${height? `h-[${height}px]`:"h-[630px]"}`}>
        {/* header */}
        
        <div className='flex flex-col justify-between space-y-5 h-[300px] py-10 px-5 bg-red-50 items-center'>
          <div className='flex space-y-5 flex-col'>
            <div className='flex space-x-5 justify-center  align-baseline'>
              {starIcon! >= 1 && <Star opacity={starIcon! >= 3 ? 1: starIcon! >= 2 ? 0.85 : 0.7} /> }
              {starIcon! >= 2 && <Star opacity={starIcon! >= 3 ? 1: starIcon! >= 2 ? 0.85 : 0.7} /> }
              {starIcon! >= 3 && <Star opacity={starIcon! >= 3 ? 1: starIcon! >= 2 ? 0.85 : 0.7} /> }
            </div>
            {subtitle && 
            <p className='text-center'>{subtitle}</p>
            }
          </div>
          <h3 className=' text-2xl text-red-500 flex flex-col space-y-2 items-center justify-center'><span>{title}</span> {duration && <span className='text-sm font-normal text-gray-700'>/{duration}</span>}</h3>
          {highlight && <p>Standard consultation & reporting plan</p>}
        </div>

        {/* body */}
        <ul className='p-5'>
          {list?.map((listItem, index)=>(
            <li className='flex my-4 space-x-2'>{listItem.icon && <span><Check className='w-5 h-5' /></span>} <span>{listItem.text}</span></li>
          ))}

        </ul>
        <hr className='m-5 bg-gray-700 border-0 h-[0.9px] rounded-full' />
        {/* footer */}
        <div className='flex flex-col space-y-5 p-5'>
          <p className='p-2 text-center'>{description}</p>
          <button className='py-5 px-10 mx-auto bg-black text-white rounded-md'>Send Proposal</button>
        </div>
      </div>
    )
  }
  return (
    <div className={`shadow-[0_4px_4px_0_#c3c3c3] max-w-full`}>
      <div
        className={`rounded-md p-6 flex flex-col space-y-2 ${
          center && 'text-center justify-center items-start '
        } `}
      >
        {image && <img className='w-full ' src={`${image}`} />}
        <h3 className='text-2xl font-semibold'>Email Marketing Services</h3>
        <div className='flex flex-col space-y-2 font-sm'>
          <h4>Email Marketing Management Services</h4>
          <h4>Enterprise Email Marketing Management Services</h4>
          <h4>B2C Email Marketing Management Services</h4>
          <h4>Email Marketing Design</h4>
        </div>
        <div className='w-full pt-2'>
          {button && <Button text={`${button}`} red />}
        </div>
      </div>
    </div>
  )
}

export default Card
