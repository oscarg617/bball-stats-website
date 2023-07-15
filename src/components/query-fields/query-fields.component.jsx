import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Fragment } from 'react'

import './query-fields.styles.scss'

const QueryFields = () => {
  return (
    <Fragment>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          '& > :not(style)': { m: 1 }
        }}
      >
        <TextField
          helperText="Enter the player's name."
          id='demo-helper-text-aligned'
          label='Name'
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          '& > :not(style)': { m: 1 }
        }}
      >
        <TextField
          helperText='Enter the starting year.'
          id='demo-helper-text-aligned'
          label='Start Year'
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          '& > :not(style)': { m: 1 }
        }}
      >
        <TextField
          helperText='Enter the ending year.'
          id='demo-helper-text-aligned'
          label='End Year'
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          '& > :not(style)': { m: 1 }
        }}
      >
        <TextField
          helperText='Enter the minimum defensive rating.'
          id='demo-helper-text-aligned'
          label='Min. Def-Rtg'
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          '& > :not(style)': { m: 1 }
        }}
      >
        <TextField
          helperText='Enter the maximum defensive rating.'
          id='demo-helper-text-aligned'
          label='Max. Def-Rtg'
        />
      </Box>
    </Fragment>
  )
}

export default QueryFields
