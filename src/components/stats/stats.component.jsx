import { Fragment } from 'react'
import React, { useState, useEffect } from 'react'

import './stats.styles.scss'
import SearchBar from '../search-bar/search-bar.component'

import players from '../../assets/players.json'
import years from '../../assets/years.json'
import ValueSelect from '../value-select/value-select.component'

const Stats = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('https://6azm0mv9p1.execute-api.us-east-2.amazonaws.com/test/drtg')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error))
  }, [])

  const textFieldsList = [
    [
      {
        name: 'player-name',
        title: "Player's Name",
        placeholder: 'e.g. Tim Duncan',
        options: players,
        charLength: 3
      }
    ]
  ]

  const numberFieldsList = [
    [
      {
        name: 'start-year',
        title: 'Start Year',
        placeholder: 'e.g. 1999',
        options: years,
        charLength: 0
      },
      {
        name: 'end-year',
        title: 'End Year',
        placeholder: 'e.g. 2003',
        options: years,
        charLength: 0
      }
    ],
    [
      {
        name: 'min-def-rtg',
        title: 'Min Def-Rtg',
        placeholder: 'e.g. 99.0',
        options: data
      },
      {
        name: 'max-def-rtg',
        title: 'Max Def-Rtg',
        placeholder: 'e.g. 103.5',
        options: data
      }
    ]
  ]

  return (
    <div className='stats-container'>
      <div className='queries-container'>
        <div className='query-fields'>
          <div className='search-bars-container'>
            {textFieldsList.map(textFields => (
              <div>
                {textFields.map(textField => (
                  <div className={`search-bar-container ${textField.name}`}>
                    <div>
                      <h3>{textField.title}</h3>
                      <SearchBar
                        options={textField.options}
                        placeholder={textField.placeholder}
                        charLength={textField.charLength}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
            {numberFieldsList.map(numberFields => (
              <div>
                {numberFields.map(numberField => (
                  <div className={`search-bar-container ${numberField.name}`}>
                    <div className='select'>
                      <h3>{numberField.title}</h3>
                      <ValueSelect
                        options={numberField.options}
                        placeholder={numberField.placeholder}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className='stat-tables'>
          <h2>Hello</h2>
        </div>
      </div>
    </div>
  )
}

export default Stats
