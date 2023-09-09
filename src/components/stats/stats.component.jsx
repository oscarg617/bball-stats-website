import { Fragment } from 'react'
import React, { useState, useEffect } from 'react'

import './stats.styles.scss'
import SearchBar from '../search-bar/search-bar.component'

import players from '../../assets/players.json'
import years from '../../assets/years.json'
import drtg from '../../assets/drtg.json'
import ValueSelect from '../value-select/value-select.component'

const Stats = (props) => {
  const [data, setData] = useState()
  const [player, setPlayer] = useState()
  const [startYear, setStartYear] = useState()
  const [endYear, setEndYear] = useState()
  const [minDRTG, setMinDRTG] = useState()
  const [maxDRTG, setMaxDRTG] = useState()
  let [err, setErr] = useState(null);

  const[yearOptions, setYearOptions] = useState([])
  const[drtgOptions, setDrtgOptions] = useState([])

  const handlePlayer = val => {
    if (val == null) {
      setPlayer(null);
    } else {
      console.log(val.value)
      setPlayer(val.value)
      console.log(player)
    }
  }

  const handleStartYear = val => {
    if (val == null) {
      setStartYear(null);
    } else {
      console.log(val.value)
      setStartYear(val.value)
      console.log(startYear)
    }
  }

  const handleEndYear = val => {
    if (val == null) {
      setEndYear(null);
    } else {
      console.log(val.value)
      setEndYear(val.value)
      console.log(endYear)
    }
  }

  const handleMinDRTG = val => {
    if (val == null) {
      setMinDRTG(null);
    } else {
      console.log(val.value)
      setMinDRTG(val.value)
      console.log(minDRTG)
    }
  }

  const handleMaxDRTG = val => {
    if (val == null) {
      setMaxDRTG(null);
    } else {
      console.log(val.value)
      console.log(player)
      setMaxDRTG(val.value)
      console.log(maxDRTG)
    }
  }

  const handleOptions = val => {
    if (val == null) {
      setDrtgOptions([]);
      setYearOptions([]);
    } else {
      const newDrtg = []
      for (var i = val.drtg.min_def_rtg, l = val.drtg.max_def_rtg; i < l; i += 0.1) {
        const dict = {"label": (Math.round(i * 10) / 10).toString(), "value": Math.round(i * 10) / 10};
        // console.log(dict)
        newDrtg.push(dict);
      }
      setDrtgOptions(newDrtg);

      const newYears = []
      for (var i = val.years.start_year, l = val.years.end_year; i < l; i += 1) {
        const dict = {"label": i.toString(), "value": i};
        // console.log(dict)
        newYears.push(dict);
      }
      setYearOptions(newYears);
    }
  }

  // useEffect(() => {
  //   fetch('https://6azm0mv9p1.execute-api.us-east-2.amazonaws.com/test/drtg')
  //     .then(response => response.json())
  //     .then(json => setData(json))
  //     .catch(error => console.error(error))
  // }, [])

  const textFieldsList = [
    [
      {
        name: 'player-name',
        title: "Player's Name",
        placeholder: 'e.g. Tim Duncan',
        options: players,
        charLength: 3,
        handleInput: handlePlayer
      }
    ]
  ]

  const numberFieldsList = [
    [
      {
        name: 'start-year',
        title: 'Start Year',
        placeholder: 'e.g. 1999',
        options: yearOptions,
        charLength: 0,
        handleInput: handleStartYear
      },
      {
        name: 'end-year',
        title: 'End Year',
        placeholder: 'e.g. 2003',
        options: yearOptions,
        charLength: 0,
        handleInput: handleEndYear
      }
    ],
    [
      {
        name: 'min-def-rtg',
        title: 'Min Def-Rtg',
        placeholder: 'e.g. 99.0',
        options: drtgOptions,
        handleInput: handleMinDRTG
      },
      {
        name: 'max-def-rtg',
        title: 'Max Def-Rtg',
        placeholder: 'e.g. 103.5',
        options: drtgOptions,
        handleInput: handleMaxDRTG
      }
    ]
  ]

  const getData = () => {
    console.log(data)
    console.log("Reheheh")
    if (player == null | startYear == null | endYear == null | minDRTG == null | maxDRTG == null) {
      return
    }
    if (startYear > endYear | minDRTG > maxDRTG) {
      return
    }

    const body = JSON.stringify({
      'name': player,
      'start_year': startYear,
      'end_year': endYear,
      'min_def_rtg': minDRTG,
      'max_def_rtg': maxDRTG
    });

    fetch('https://6azm0mv9p1.execute-api.us-east-2.amazonaws.com/test', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': '2Pg21FTlcK3JrmTH5q3ib7h68PIk5QAU9tF1Gh4Z',
      },
      body: body,
    })
        .then(response => {
          if (response.status == 404) {
            alert("Could not find playoff logs for this player. We are working on adding more players.")
            throw new Error("Not found!");
          }
          return response.text()
          
        })

        // .then(text => console.log(text))
        .then(string => {
          console.log(string);
          console.log(body);
          return JSON.parse(string);
        })
        .then(json => {
          console.log(json);
          console.log(body);
          props.sendToTable(json);
        })
        .catch(err => {
          console.log(err);
          props.sendToTable([null])
        })

  }

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
                        handleInput={textField.handleInput}
                        handleOptions={handleOptions}
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
                        handleInput={numberField.handleInput}
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
        <div className='button-container' >
          <button className='button' onClick={getData}>Get Stats</button>
        </div>
        <div className='stat-tables'>
        </div>
      </div>
    </div>
  )
}

export default Stats