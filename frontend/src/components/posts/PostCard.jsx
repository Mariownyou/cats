import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Paper } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function PostCard({ item }) {
  const classes = useStyles();

  return (
    <Paper>
      <Typography>
        { item.title }
      </Typography>
    </Paper>
    
  );
}