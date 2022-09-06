import logo from './logo.svg';
import './App.css';
import { Card } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card>
          <Card.Img variant='top' src='https://placedog.net/286/180' />
          <Card.Body>
            <Card.Title>Cpeter15</Card.Title>
            <Card.Text>
              I like dogs
            </Card.Text>
          </Card.Body>
        </Card>
      </header>
    </div>
  );
}

export default App;
