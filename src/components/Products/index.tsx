import { TextField } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'

import useStyles from './styles'

const Products = () => {
  const [search, setSearch] = useState('')

  const handleSearchChange = (value: string) => {
    setSearch(value)
  }

  return (
    <Box>
      <TextField
        id="standard-basic"
        label="Buscar produto"
        variant="standard"
        size="small"
        value={search}
        onChange={(e) => handleSearchChange(e.target.value)}
        fullWidth
      />
    </Box>
  )
}

export default Products
