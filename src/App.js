import logo from './logo.svg';
import './App.css';
import DataLoader from './Components/DataLoader';
import TestComponent1 from './Components/TestComponent1';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TestComponent1 />
        <DataLoader />
      </header>
    </div>
  );
}

export default App;
