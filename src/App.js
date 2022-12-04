import logo from './logo.svg';
import DataLoader from './Components/DataLoader';
import TestComponent1 from './Components/TestComponent1';
import TargetValueSearchBar from './Components/TargetValueSearchBar';
import SearchFieldDropdown from './Components/SearchFieldDropdown';
import Visualization from './Components/Visualization';
import './App.css';
function App() {

  return (
    <div className="App">
      <header className="App-header">
        {/* <TestComponent1 /> */}
        <DataLoader />
        <SearchFieldDropdown />
        <TargetValueSearchBar />
        <Visualization />
      </header>
    </div>
  );
}

export default App;
