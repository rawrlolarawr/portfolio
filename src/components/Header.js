import React from 'react';
import { AppBar, Typography, Stack } from '@mui/material';

const Header = ({ data: { name, title } }) => {
  return (
    <AppBar color='primary' position='static'>
      <Stack alignItems='center'>
        <Typography fontSize={{xs: '2rem', md: '3rem'}} variant='h3' color='inherit'>
          ♥/ {name} /♥
        </Typography>
        <Typography fontSize={{xs: '2rem', md: '3rem'}} variant='h3' color='inherit'>
          ♥/ {title} /♥
        </Typography>
      </Stack>
    </AppBar>
  );
};

export default Header;
