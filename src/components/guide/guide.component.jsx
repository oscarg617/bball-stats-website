import { Fragment } from 'react'
import GuideItem from '../guide-item/guide-item.component'

import './guide.styles.scss'

const Guide = ({ directions }) => {
  return (
    <Fragment>
      <div className='guide-container'>
        <h2>Features</h2>
      </div>
      <div className='features-container'>
        {directions.map(direction => (
          <GuideItem key={direction.id} direction={direction} />
        ))}
      </div>
    </Fragment>
  )
}

export default Guide
