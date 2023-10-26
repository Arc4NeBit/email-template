import React, { useEffect, useState } from 'react';
import './App.css';
import EmailHtmlRender from './email/EmailHtmlRender';
import EmailRender from "./email/Email";
import ReactDOM from "react-dom";
import PromoSection from './promotion/PromoSection';
import MemeKingSection from './meme-king/MemeKingSection';

function App() {
  let [htmlString, sethtmlString] = useState();

  useEffect(() => {
    //render react part in html for email
    if (htmlString) {
      ReactDOM.render(<EmailRender />, document.getElementById('render'));
      ReactDOM.render(<PromoSection />, document.getElementById(`promotion-section`));
      ReactDOM.render(<MemeKingSection />, document.getElementById(`meme-king-section`));
  }
  }, [htmlString]);

  return (
    <div className="App">
      <EmailHtmlRender sethtmlString = {sethtmlString}/>
    </div>
  );
}

export default App;
