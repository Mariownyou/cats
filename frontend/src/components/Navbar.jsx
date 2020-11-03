import React, { Component } from 'react';
import { Box } from '@material-ui/core'
import Header from  './Header'
import Footer from './Footer'

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <Box mb={2}>
                <Header />
                <Footer />
            </Box>
         );
    }
}
 
export default Navbar;