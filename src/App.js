import React from 'react';
import "./app.css";
import { Button } from './components/Button/Button';
import { SelectPlayground } from './playground/SelectPlayground';
import { TextFieldPlayground } from './playground/TextFieldPlayground';
import { RadioButtonPlayground } from './playground/RadioButtonPlayground';
import { CheckboxPlayground } from './playground/CheckboxPlayground';
import { SwitchPlayground } from './playground/SwitchPlayground';

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

      <TextFieldPlayground/>
      <RadioButtonPlayground/>
      <CheckboxPlayground/>
      <SwitchPlayground/>
    </>

  );
}

export default App;
