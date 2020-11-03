import './App.css';
import { Container } from '@material-ui/core';
import Navbar from './components/ui/Navbar'
import Content from './components/ui/Content'


function App() {
  return (
    <Container>
      <Navbar />
      <Content />
    </Container>
  );
}


export default App;
