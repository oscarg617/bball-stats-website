import { Fragment } from 'react'

import Guide from '../../components/guide/guide.component'
import Introduction from '../../components/introduction/introduction.component'
import QueryFields from '../../components/query-fields/query-fields.component'

import magic from '../../assets/magic.png'
import lebron from '../../assets/lebron.jpg'
import steph from '../../assets/steph.png'
import wave from '../../assets/pattern.svg'
import wave2 from '../../assets/pattern2.svg'

import './home.styles.scss'
import StatQueries from '../../components/stat-queries/stat-queries.component'

const Home = () => {
  const directions = [
    {
      id: 1,
      className: 'Magic',
      title: 'Playoff data since 1980',
      imageUrl: magic
    },
    {
      id: 2,
      className: 'Steph',
      title: 'Adjusted for Pace and Defense',
      imageUrl: steph
    },
    {
      id: 3,
      className: 'LeBron',
      title: 'Filter Stats by Opponent Defense',
      imageUrl: lebron
    }
  ]
  return (
    <Fragment>
      <Introduction />
      <div className='wave-container'>
        <img src={wave} alt='Wave'></img>
      </div>
      <Guide directions={directions} />
      <div className='wave-container'>
        <img src={wave2} alt='Wave'></img>
      </div>
      <StatQueries />
    </Fragment>
  )
}

export default Home
