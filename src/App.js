import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import './App.css'
// views
import Home from './views/Home.jsx'

function App() {
  return (
    <>
      <Row style={{height: "35px", backgroundColor: "#191a21"}}/>
      <Home/>
    </>
  );
}

export default App;
