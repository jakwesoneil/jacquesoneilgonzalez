import React from 'react'
import { BentoGrid, BentoGridItem } from './BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id= "About">
      <BentoGrid>
        {
         gridItems.map((item) => (
          <BentoGridItem className={item.className}
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            
          />
        ))}
      </BentoGrid>
    </section>
  )
}

export default Grid