import './table.styles.scss'

import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

const BasicTable = ({ table }) => {
  console.log(table)
  if (table == null) return
  const { boxScoreStats, statTypes } = table
  console.log(boxScoreStats)
  console.log(statTypes)

  return (
    <TableContainer component={Paper}>
      <Table aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell> </TableCell>
            {boxScoreStats.map(boxScoreStat => (
              <TableCell align='right'>{boxScoreStat.name}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {statTypes.map(statType => (
            <TableRow
              key={statType.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                {statType.name}
              </TableCell>
              {statType.boxScores.map(boxScore => (
                <TableCell align='right'>{Math.round(boxScore.value * 10) / 10}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default BasicTable
