import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import {Router} from '@reach/router'
import './App.css'
// views
import Home from './views/Home.jsx'

function App() {
  return (
    <>
      <Row className="pl-4 pt-1" style={{height: "35px", backgroundColor: "#191a21"}}>
        dwaynelaforce.dev
      </Row>
      <Router>
        <Home path="/"/>

      </Router>
    </>
  );
}

export default App;
