import React from 'react';
import "./app.css";
import { Button } from './components/Button/Button';
import { SelectPlayground } from './playground/SelectPlayground';

function App() {





  return (
    <>
    
    <div className="button-container">
      <Button color = "pink" type = "primary"/>
      <Button color = "blue" type = "primary" />
      <Button color = "pink" type = "secondary"/>
      <Button color = "blue" type = "secondary"/>
    </div>

    <div>

      <SelectPlayground/>
    </div>

    </>

  );
}

export default App;
