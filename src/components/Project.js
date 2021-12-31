import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  IconButton,
} from '@mui/material';
import { GitHub, Feed, Preview } from '@mui/icons-material';

const Project = ({
  project: { title, description, gitLink, blogLink, deploy },
}) => {
  return (
    <Card>
      <CardContent sx={{ minHeight: '20vh' }}>
        <Typography variant='h5'>{title}</Typography>
        <Typography variant='p'>{description}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='GitHub' href={gitLink}>
          <GitHub />
        </IconButton>
        {blogLink && (
          <IconButton aria-label='Blog' href={blogLink}>
            <Feed />
          </IconButton>
        )}
        {deploy && (
          <IconButton aria-label='Deploy' href={deploy}>
            <Preview />
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
};

export default Project;
