import logo from './logo.svg';
import './App.css';
import ColorPicker from './ColorPicker';
function App() {
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#33FFFA']; // Add your list of colors
  return (
    <div className="App">
      <header className="App-header">
      

        
        <ColorPicker colors={colors} />
      </header>
    </div>
  );
}

export default App;
