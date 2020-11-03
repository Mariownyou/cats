import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core'

class Header extends Component {
    state = {  }
    render() { 
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant='h4' color='inherit'>
                        Кисы
                    </Typography>
                </Toolbar>
            </AppBar>
         );
    }
}
 
export default Header;