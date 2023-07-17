import { Fragment } from 'react'
import GuideItem from '../guide-item/guide-item.component'

import './guide.styles.scss'

const Guide = ({ directions }) => {
  return (
    <div className='guide-container'>
      <h2>Features</h2>
      <div className='features-container'>
        {directions.map(direction => (
          <GuideItem key={direction.id} direction={direction} />
        ))}
      </div>
    </div>
  )
}

export default Guide
