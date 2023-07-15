import GuideItem from '../guide-item/guide-item.component'
import './guide.styles.scss'

const Guide = ({ directions }) => {
  return (
    <div className='guide-container'>
      {directions.map(direction => (
        <GuideItem key={direction.id} direction={direction} />
      ))}
    </div>
  )
}

export default Guide
