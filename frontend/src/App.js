import './App.css';
import { Container } from '@material-ui/core';
import Navbar from './components/Navbar'
import Content from './components/Content'


function App() {
  return (
    <Container>
      <Navbar />
      <Content />
    </Container>
  );
}


export default App;
