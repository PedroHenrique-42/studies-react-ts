import React, { useState } from 'react';
import Form from '../components/form';
import List from '../components/list';
import style from './app.module.scss';
import Cronometer from '../components/cronometer';
import { ITask } from '../types/task';

function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([]);

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} />
      <Cronometer />
    </div>
  );
}

export default App;
