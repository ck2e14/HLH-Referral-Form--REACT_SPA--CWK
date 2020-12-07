import React, { useState, useEffect } from "react";
import "./App.css";
import REFERRAL_FORM from "./Components/Form/Form.js";
import REFERRAL_FORM_2 from "./Components/Form2/Form2.js";

// TODO: Make duplicate form component (with css) and then call it referral form 2 and make button to toggle between the two
//  here on App
function App() {
   const [toggleFormVersion, setToggleFormVersion] = useState(false);

   return (
      <div className='App'>
         <div className='toggleForm' onClick={() => setToggleFormVersion(!toggleFormVersion)}>
            Toggle Page Layout
         </div>
         <h1 className='title'>HLH Referral Form</h1>
         <div className='form-component-wrapper'>
            {!toggleFormVersion ? <REFERRAL_FORM /> : <REFERRAL_FORM_2 />}
         </div>
      </div>
   );
}

export default App;
