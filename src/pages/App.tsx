import React, { useState } from 'react';
import Form from '../components/form';
import List from '../components/list';
import style from './app.module.scss';
import Cronometer from '../components/cronometer';
import { ITask } from '../types/task';

function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  const [selectedTask, setSelectedTask] = useState<ITask>();

  function selectTask(selectedTask: ITask) {
    setSelectedTask(selectedTask);

    setTasks(oldTasks => oldTasks.map(task => ({
      ...task,
      selected: task.id === selectedTask.id ? true : false
    })));
  }

  function finishTask() {
    if (selectedTask) {
      setSelectedTask(undefined);
      setTasks(oldTasks => oldTasks.map(task => {
        if (task.id === selectedTask.id) {
          return {
            ...task,
            selected: false,
            completed: true,
          }
        }
        return task;
      }));
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List
        tasks={tasks}
        selectTask={selectTask}
      />
      <Cronometer 
        selectedTask={selectedTask}
        finishTask={finishTask}
      />
    </div>
  );
}

export default App;
