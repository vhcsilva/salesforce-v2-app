import { useState } from 'react'
import { Box, TextField } from '@mui/material'

const Items = () => {
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

export default Items
