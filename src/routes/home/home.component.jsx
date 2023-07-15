import { Fragment } from 'react'

import Guide from '../../components/guide/guide.component'
import Introduction from '../../components/introduction/introduction.component'
import QueryFields from '../../components/query-fields/query-fields.component'

import erving from '../../assets/erving.jpg'
import lebron from '../../assets/lebron.jpg'
import giannis from '../../assets/giannis.jpeg'

import './home.styles.scss'

const Home = () => {
  const directions = [
    {
      id: 1,
      className: 'Erving',
      title: 'Playoff data since 1980.',
      imageUrl: erving
    },
    {
      id: 2,
      className: 'LeBron',
      title: 'Filter Stats by Opponent Defense',
      imageUrl: lebron
    },
    {
      id: 3,
      className: 'Giannis',
      title: 'Adjusted for Pace and Defense',
      imageUrl: giannis
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
