import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.scss';
import AppWithHooks from './components/AppWithHooks';
import AppWithClass from './components/AppWithClass';
import AppWithClassProperties from './components/AppWithClassProperties';

ReactDOM.render(
  <>
    <AppWithHooks counter={1}/>
    <AppWithClass counter={10}/>
    <AppWithClassProperties counter={100}/>
  </>
  ,
  document.getElementById('root'));
