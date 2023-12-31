import './guide-item.styles.scss'

const GuideItem = ({ direction }) => {
  const { className, title, imageUrl } = direction
  return (
    <div className={`guide-item-container ${className}`}>
      <div className={`guide-item-body ${className}`}>
        <h3>{title}</h3>
      </div>
      <div className='image-container'>
        <div
          className={`background-image ${className}`}
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      </div>
    </div>
  )
}

export default GuideItem
