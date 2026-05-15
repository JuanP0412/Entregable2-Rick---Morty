import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';
import './Pagination.css'

export default function PaginationControler({ page, setPage, totalPages }) {

  const isMobile = useMediaQuery('(max-width: 600px)')
  const isTablet = useMediaQuery('(max-width: 900px)')

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Stack spacing={2} className="pagination-wrapper">
      <Typography sx={{ color: '#a0aec0', fontSize: '0.85rem' }}
      >Página: {page} / {totalPages}</Typography>
      <Pagination
        count={totalPages}
        page={page}
        onChange={handleChange}
        size={isMobile ? 'small' : isTablet ? 'medium' : 'large'}
        siblingCount={isMobile ? 0 : 1}
        boundaryCount={isMobile ? 1 : 2}
        sx={{
          '& .MuiPaginationItem-root': { color: '#a0aec0', fontFamily: 'Raleway' },
          '& .Mui-selected': { backgroundColor: '#97ce4c !important', color: '#0f0f23 !important', fontWeight: 700 },
          '& .MuiPaginationItem-root:hover': { borderColor: '#97ce4c', color: '#97ce4c' },
        }} />
    </Stack>
  );
}
