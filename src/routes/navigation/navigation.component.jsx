import { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as LadderLogo } from '../../assets/ladder.svg'

import './navigation.styles.scss'

const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <LadderLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='glossary' to='/glossary'>
            Stat Glossary
          </Link>
          <Link className='support-me' to='/support-me'>
            Support Me
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
