import { Fragment } from 'react'

import Guide from '../../components/guide/guide.component'
import Introduction from '../../components/introduction/introduction.component'
import QueryFields from '../../components/query-fields/query-fields.component'

import magic from '../../assets/magic.png'
import lebron from '../../assets/lebron.jpg'
import steph from '../../assets/steph.png'

import './home.styles.scss'

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
      className: 'LeBron',
      title: 'Filter Stats by Opponent Defense',
      imageUrl: lebron
    },
    {
      id: 3,
      className: 'Steph',
      title: 'Adjusted for Pace and Defense',
      imageUrl: steph
    }
  ]
  return (
    <Fragment>
      <Introduction />
      <Guide directions={directions} />
      <QueryFields />{' '}
    </Fragment>
  )
}

export default Home
