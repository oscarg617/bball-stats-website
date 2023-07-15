import './introduction.styles.scss'
import kobe from '../../assets/kobe.png'

const Introduction = () => {
  return (
    <div className='introduction'>
      <div className='how-to'>
        <h1>Adjusted NBA Stats</h1>
        <p>A great resource for stat nerds.</p>
      </div>
      <div className='image-container'>
        <div className='kobe-image-container'>
          <img className='kobe-image' src={kobe} alt='Kobe Bryant' />
        </div>
      </div>
    </div>
  )
}

export default Introduction
