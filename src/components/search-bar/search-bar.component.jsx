import AsyncSelect from 'react-select/async'

const SearchBar = ({ options, placeholder, charLength }) => {
  const loadOptions = (searchValue, callback) => {
    var filteredOptions = []
    if (searchValue.length > charLength) {
      filteredOptions = options.filter(option =>
        option.label.toLowerCase().includes(searchValue.toLowerCase())
      )
      callback(filteredOptions)
    }
  }

  const noOptions = () => {
    return 'Type to show players.'
  }

  return (
    <AsyncSelect
      isClearable
      loadOptions={loadOptions}
      placeholder=''
      menuPosition='fixed'
      menuPlacement='auto'
      maxMenuHeight={100}
      noOptionsMessage={noOptions}
    />
  )
}

export default SearchBar
