import './App.css';
import { Box } from '@material-ui/core';
import Navbar from './components/ui/Navbar'
import Content from './components/ui/Content'
import { withRouter } from "react-router-dom"


function App() {
  return (
    <Box>
      <Navbar />
      <Content />
    </Box>
  );
}

export default withRouter(App)
