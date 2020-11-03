import { makeStyles } from '@material-ui/core/styles';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Grid } from '@material-ui/core';
import CatCard from './CatCard'

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
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const url = 'http://127.0.0.1:8000/api/cats/'
    const fetchItems = async () => {
      const result = await axios(url)
      console.log(result.data)
      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [])

  return isLoading ? ( <h1>Loading...</h1> ) : (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={3}>
          {items.map(
            item => (
            <Grid key={item.url} item>
                <CatCard item={item} />
            </Grid>
            )
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}