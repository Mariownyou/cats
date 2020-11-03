import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CatCard from './catCard'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid(props) {
  const classes = useStyles();

  return props.isLoading ? ( <h1>Loading...</h1> ) : (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {props.items.map(
            item => (
              <CatCard key={item.url} item={item} />
            )
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
