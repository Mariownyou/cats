import { makeStyles } from '@material-ui/core/styles';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Grid } from '@material-ui/core';
import PostCard from './PostCard'

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

export default function SpacingGrid({ match }) {
  const classes = useStyles();
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  // const [query, setQuery] = useState('')

  useEffect(() => {
    const url = `http://127.0.0.1:8000/api/posts?group=${match.params.group}`
    const fetchItems = async () => {
      const result = await axios(url)
      console.log(result.data)
      console.log(url, match)
      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [match.params.group])

  return isLoading ? ( <h1>Loading...</h1> ) : (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        {items.map(
          item => (
            <PostCard item={item} key={item.id} />
          )
        )}
      </Grid>
    </Grid>
  );
}