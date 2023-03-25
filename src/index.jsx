import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.scss';
import AppWithHooks from './components/AppWithHooks';
import AppWithClass from './components/AppWithClass';
import AppWithClassProperties from './components/AppWithClassProperties';
import ClickIncrement from './HOC/ClickIncrement';
import MouseIncrement from './HOC/MouseIncrement';

ReactDOM.render(
  <>
    <h1>HOC</h1>
    <ClickIncrement counter={1}/>
    <MouseIncrement counter={1}/>
    <AppWithHooks counter={1}/>
    <AppWithClass counter={10}/>
    <AppWithClassProperties counter={100}/>
  </>
  ,
  document.getElementById('root'));
