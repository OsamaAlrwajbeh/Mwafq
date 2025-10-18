import CustomIntro from '@/components/ui/CustomIntro'
import React from 'react'
import faq from "@images/FAQ/faq.png";

function FAQ() {
  return (
   <CustomIntro 
   title='FAQ'
   subtitle='Find quick answers to your most common questions'
   image={faq}
  />
  )
}

export default FAQ