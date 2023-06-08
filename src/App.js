import './App.css';
import ValueInput from './Components/ValueInput';
import ValueAnswer from './Components/ValueAnswer';

function App() {
  return (
    <div className="App">
      <ValueInput value="5"/> + <ValueInput value="8"/> 
      = <ValueAnswer value="0"/>
    </div>
  );
}

export default App;
