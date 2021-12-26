import React from 'react';
import { AppBar, Typography, Stack } from '@mui/material';

const Header = ({ data: { name } }) => {
  return (
    <AppBar color="primary" position="static">
      <Stack alignItems="center">
        <Typography variant="h3" color="inherit">
          ♥/ {name} /♥
        </Typography>
        <Typography variant="h3" color="inherit" aligncenter="true">
          ♥/ Full Stack Developer /♥
        </Typography>
      </Stack>
    </AppBar>
  );
};

export default Header;
