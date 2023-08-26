import './guide.styles.scss'
import GuideItem from '../guide-item/guide-item.component'

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
