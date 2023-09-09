import AsyncSelect from 'react-select/async'
import React, { useState, useEffect } from 'react'

const SearchBar = ({ options, placeholder, charLength, handleInput }) => {
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
    handleInput(inputValue)
  };

  return (
    <AsyncSelect
      isClearable
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
