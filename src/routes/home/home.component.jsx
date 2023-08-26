import { Fragment } from 'react'

import Guide from '../../components/guide/guide.component'
import Introduction from '../../components/introduction/introduction.component'
import Wave from '../../components/wave/wave.component'
import Stats from '../../components/stats/stats.component'

import magic from '../../assets/magic2.png'
import lebron from '../../assets/lebron.jpg'
import steph from '../../assets/steph3.png'
import introWave from '../../assets/intro-wave.svg'
import guideWave from '../../assets/guide-wave.svg'

import './home.styles.scss'

const Home = () => {
  const directions = [
    {
      id: 1,
      className: 'Magic',
      title: 'Query Playoff Stats since 1980',
      imageUrl: magic
    },
    {
      id: 2,
      className: 'Steph',
      title: 'Adjust Stats for Pace and Defense',
      imageUrl: steph
    },
    {
      id: 3,
      className: 'LeBron',
      title: 'Filter Stats by Opponent Defense',
      imageUrl: lebron
    }
  ]

  const tables = [
    {
      id: 1,
      boxScoreStats: [
        {
          id: 1,
          name: 'Points'
        }
      ],
      statTypes: [
        {
          id: 1,
          name: 'Per Game',
          boxScores: [
            {
              id: 1,
              value: 30
            }
          ]
        },
        {
          id: 2,
          name: 'Per 100',
          boxScores: [
            {
              id: 1,
              value: 46
            }
          ]
        }
      ]
    }
  ]

  return (
    <Fragment>
      <Introduction />
      <Wave wave={introWave} />

      <Guide directions={directions} />
      <Wave wave={guideWave} />

      <Stats />
      <div className='footer'></div>
    </Fragment>
  )
}

export default Home
