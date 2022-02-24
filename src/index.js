import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import styled from 'styled-components'

export const HomeWraper = styled.div`
.slick-arrow{
  color: blue;
    
}
.slick-prev:before, .slick-next:before{
    font-family:initial!important;
    font-size: 30px;
    line-height: 1;
    opacity: .75;
    color: blue !important;
    -webkit-font-smoothing: antialiased;
}
.slick-prev {
  left: -0px;
  z-index: 1;
}
.slick-next {
  right: 25px;
  z-index:1;
}
`

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
