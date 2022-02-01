import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Container,
} from '@mui/material';
import { Email, GitHub } from '@mui/icons-material';

const Footer = ({ data: { email, github } }) => {
  return (
    <AppBar position='static' color='primary'>
      <Container maxWidth='md'>
        <Toolbar>
          <Typography variant='body1' color='inherit'>
            &copy; 2022 RawrLolaRawr
          </Typography>
          <IconButton
            aria-label='Email'
            href={'mailto:' + email}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Email />
          </IconButton>
          <IconButton
            aria-label='GitHub'
            href={github}
            target='_blank'
            rel='noopener noreferrer'
          >
            <GitHub />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
