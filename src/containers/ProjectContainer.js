import React from 'react';
import Project from '../components/Project';
import { KeyGen } from '../lib/keygen';
import { Grid } from '@mui/material';

const ProjectContainer = ({ projects }) => {
  return (
    <Grid
      container
      box
      sx={{ my: 2 }}
      spacing={3}
      justifyContent='center'
      alignItems='stretch'
    >
      {projects.map((project) => (
        <Grid item xs={8} md={5} key={KeyGen(project.title)} alignItems='stretch'>
          <Project project={project} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectContainer;
