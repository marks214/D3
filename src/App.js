import Test from './Test';
import { useState, useEffect } from 'react';

function App() {

  const [count, setCount] = useState(0);
  
  return (
    <div className="App">
     <Test name="name" personClicked={() => {setCount(count + 1)}}/>
     Clicks: {count}
    </div>
  );
}

export default App;
