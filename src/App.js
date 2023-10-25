import React, { useEffect, useState } from 'react';
import './App.css';
import EmailHtmlRender from './email/EmailHtmlRender';
import EmailRender from "./email/Email";
import ReactDOM from "react-dom";
import { PromotionArray } from './promotion/PromotionData';
import PromoSection from './components/PromoSection';

function App() {
  let [htmlString, sethtmlString] = useState();

  useEffect(() => {
    //render react part in html for email
    if (htmlString) {
      ReactDOM.render(<EmailRender />, document.getElementById('render'));

      PromotionArray.forEach((row)=>{
        let href = row.href;
        let title = row.title;
        let imghref = row.imghref;
        ReactDOM.render(<PromoSection href={href} title={title} imghref={imghref}/>, document.getElementById(`promotion-${row.id}`));
      })
  }
  }, [htmlString]);

  return (
    <div className="App">
      <EmailHtmlRender sethtmlString = {sethtmlString}/>
    </div>
  );
}

export default App;
