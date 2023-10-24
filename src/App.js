import React, { useEffect, useState } from 'react';
import './App.css';
import EmailHtmlRender from './email/EmailHtmlRender';
import EmailRender from "./email/Email";
import ReactDOM from "react-dom";

function App() {
  let [htmlString, sethtmlString] = useState();

  useEffect(() => {
    if (htmlString) {
      ReactDOM.render(<EmailRender />, document.getElementById('render'));
      console.log(document.getElementById('render'));      
  }
  }, [htmlString]);

  return (
    <div className="App">
      <EmailHtmlRender sethtmlString = {sethtmlString}/>
      {/* <Email /> */}
    </div>
  );
}

export default App;
