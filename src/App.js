import React, { useState, useEffect } from "react";
import "./App.css";
import REFERRAL_FORM from "./Components/Form/Form.js";

function App() {
   return (
      <div className='App'>
         <h1 className='title'>HLH Referral Form</h1>
         <div className='form-component-wrapper'>
            <REFERRAL_FORM />
         </div>
      </div>
   );
}

export default App;
