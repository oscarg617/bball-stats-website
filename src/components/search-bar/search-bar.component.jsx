import AsyncSelect from 'react-select/async'
import React, { useState, useEffect } from 'react'
import axios from "axios"

axios.defaults.headers.post['x-api-key'] = '2Pg21FTlcK3JrmTH5q3ib7h68PIk5QAU9tF1Gh4Z'
axios.defaults.headers.post['Content-Type'] = 'application/json'


const SearchBar = ({ options, placeholder, charLength, handleInput, handleOptions }) => {
  const [data, setData] = useState(null)

  const loadOptions = (searchValue, callback) => {
    var filteredOptions = []
    if (searchValue.length >= charLength) {
      filteredOptions = options.filter(option =>
        option.label.toLowerCase().includes(searchValue.toLowerCase())
      )
      callback(filteredOptions)
    }
  }



  const noOptions = () => {
    return `Type at least ${charLength} characters.`
  }

  const textChange = inputValue => {
    console.log("inputValue", inputValue)
    handleInput(inputValue)
    handleOptions(inputValue)
  };

  return (
    <AsyncSelect
      isClearable
      // options={options}
      loadOptions={loadOptions}
      placeholder=''
      menuPosition='fixed'
      menuPlacement='auto'
      maxMenuHeight={150}
      noOptionsMessage={noOptions}
      onChange={textChange}
      styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
    />
  )
}

export default SearchBar
