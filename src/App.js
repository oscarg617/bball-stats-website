import { Routes, Route } from 'react-router-dom'
import Navigation from './routes/navigation/navigation.component'
import Home from './routes/home/home.component'
import Glossary from './routes/glossary/glossary.component'
import SupportMe from './routes/support-me/support-me.component'

import './App.scss'

function App () {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}></Route>
        {/* <Route path='glossary' element={<Glossary />}></Route>
        <Route path='support-me' element={<SupportMe />}></Route> */}
      </Route>
    </Routes>
  )
}

export default App
