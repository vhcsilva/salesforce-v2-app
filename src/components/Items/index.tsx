import { useState, memo } from 'react'
import { Box, TextField } from '@mui/material'
import {
  FixedSizeList as VirtualizedList,
  areEqual,
  ListChildComponentProps
} from 'react-window'

import { products } from 'services/api'

const Items = () => {
  const [search, setSearch] = useState('')

  const handleSearchChange = (value: string) => {
    setSearch(value)
  }

  return (
    <Box sx={{ width: '100%', height: '300px' }}>
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

const Row = memo(({ data, index, style }: ListChildComponentProps) => {
  const { items, toggleItemActive } = data
  const item = items[index]

  return (
    <div onClick={() => toggleItemActive(index)} style={style}>
      {item.label} is {item.isActive ? 'active' : 'inactive'}
    </div>
  )
}, areEqual)

export default Items
