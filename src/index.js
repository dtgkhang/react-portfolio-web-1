import  ReactDOM  from "react-dom";
import React, { Component }  from 'react';

import App from './App'
import './index.css'
import { getElementError } from "@testing-library/react";

ReactDOM.render(<App/>,document.querySelector("#root"));
document.getElementsByClassName