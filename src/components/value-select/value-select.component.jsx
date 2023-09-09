import './value-select.styles.scss'

import Select from 'react-select'

const ValueSelect = ({ options, placeholder, handleInput }) => {
  const _customStyles = {
    menuPortal: (base) => ({ ...base, zIndex: 9999 }),
    control: (base, state) => ({
      ...base,
      boxShadow: 'none',
      //   minWidth: '242px',
      zIndex: 9998,
      border: '1px solid lightgray', // default border color
      '&:hover': { borderColor: 'gray' } // border style on hover
    }),

    option: (provided, state) => ({
      ...provided,
      color: 'black',
      backgroundColor: state.isSelected
        ? '#fccb06'
        : state.isFocused
        ? '#b1ddf1'
        : 'transparent'
    })
  }

  const selectChange = val => {
    handleInput(val);
  }

  return (
    <Select
      styles={_customStyles}
      options={options}
      placeholder=''
      // maxMenuHeight={100}
      menuPosition='fixed'
      menuPlacement='auto'
      onChange={handleInput}
    />
  )
}

export default ValueSelect
