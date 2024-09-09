import Button from './components/Button/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <Button label="Click Me!" onClick={() => console.log("Hello, World!")} />
    </div>
  );
}

export default App;
