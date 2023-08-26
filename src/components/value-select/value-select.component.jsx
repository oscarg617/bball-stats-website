import './value-select.styles.scss'

import Select from 'react-select'

const ValueSelect = ({ options, placeholder }) => {
  const _customStyles = {
    control: (base, state) => ({
      ...base,
      boxShadow: 'none',
      //   minWidth: '242px',
      zIndex: 9999,
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

  return (
    <Select
      styles={_customStyles}
      options={options}
      placeholder=''
      menuPosition='fixed'
      menuPlacement='auto'
    />
  )
}

export default ValueSelect
