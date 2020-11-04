import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Tabs, Tab, Box } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
  });

export default function Footer() {
    const [value, setValue] = React.useState(0);
    const classes = useStyles();
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
    <Box mb={2}>
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Кисы" to='/cats' component={Link} />
          <Tab label="Посты" to='/groups' component={Link} />
          <Tab label="Контакты" to='/about-us' component={Link} />
        </Tabs>
      </Paper>
    </Box>
      
    );
  }