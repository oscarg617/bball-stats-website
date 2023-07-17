import './guide-item.styles.scss'

const GuideItem = ({ direction }) => {
  const { className, title, imageUrl } = direction
  console.log(className)
  return (
    <div className={`guide-item-container ${className}`}>
      <div className={`guide-item-body ${className}`}>
        <h2>{title}</h2>
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
