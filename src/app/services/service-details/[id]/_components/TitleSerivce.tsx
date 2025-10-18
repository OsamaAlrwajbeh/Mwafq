import CustomIntro from '@/components/ui/CustomIntro'
import React from 'react'

interface TitleServiceProps {
    title: string ;
    subtitle: string;
    description1: string;
    image?: string | null | any;
}


function TitleService({ title, subtitle, description1, image }: TitleServiceProps) {
  return (
    <CustomIntro 
      title={title}
      subtitle={subtitle}
      description1={description1}
      image={image}
    />
  )
}

export default TitleService