import React from 'react';
import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

export default function CarDeals() {
  return (
    <section className={layout.section}>  
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
Find a better Card <br className='sm:block hidden' />
in few steps
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 `}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eaque a consequatur magni non voluptates. Sit excepturi nihil explicabo ipsum veniam labore, fuga aut commodi, possimus, modi voluptatum delectus dolorem</p>
          <Button styles="mt-10"/>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className='w-[100%] h-[100%]' />
      </div>
    </section>
  )
}
