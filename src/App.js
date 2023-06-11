import './App.css';
import ValueInput from './Components/ValueInput';
import ValueAnswer from './Components/ValueAnswer';
import { useState } from 'react';

function App() {
  const [value1,setValue1] = useState(0)
  const [value2,setValue2] = useState(0)
  const [answer,setAnswer] = useState(0)

  // 子からデータを受け取り計算をして更新
  function changeValue1(newValue) {
    let ans = parseInt(newValue) + parseInt(value2)
    setValue1(newValue);
    setAnswer(ans)
  }

  // 子からデータを受け取り計算をして更新
  function changeValue2(newValue) {
    let ans = parseInt(value1) + parseInt(newValue)
    setValue2(newValue);
    setAnswer(ans)
  }

  return (
    <div className="App">
      <ValueInput value={value1} valueChange={changeValue1}/>
      + <ValueInput value={value2} valueChange={changeValue2}/>
      = <ValueAnswer value={answer}/>
    </div>
  );
}

export default App;
