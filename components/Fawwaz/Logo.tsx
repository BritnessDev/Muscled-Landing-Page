import React, { FC } from 'react';
import Image from 'next/image';

import { PartnerLogo } from "./component.type"; 

const Logo: FC<PartnerLogo> = ({ src, width, height }) => {
  return (
    <Image src={src} alt="Partner Logo" width={width} height={height}/>
  )
}

export default Logo