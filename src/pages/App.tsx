import React from 'react';
import Form from '../components/form';
import List from '../components/list';
import style from './app.module.scss';
import Cronometer from '../components/cronometer';

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
      <Cronometer />
    </div>  
  );
}

export default App;
