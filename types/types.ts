import { ReactNode } from 'react'

export interface IPost {
  title: string
  slug: string
  content: string
}

// Addded Types
const arrow = 'small'

export interface ButtonProps {
  red?: boolean
  violate?: boolean
  white?: boolean
  outline?: boolean
  shadow?: boolean
  rounded?: boolean
  arrow?: string
  text?: string
  label?:string
}

// card props and counter props
export interface IProps {
  children?: ReactNode
  type?: string
  width?: number
  className?: string
  starIcon?: number
  subtitle?: string
  list?:{
    icon?:boolean
    text:string
  } []
  title?:string
  description?:string
  duration?: string
  highlight?: string
  height?: number
}

export interface IconProps {
  icon?: JSX.Element
  title: string
  className?: string
  full?: string
}

export interface SVGProps{
  className?: string
  opacity?:number
}