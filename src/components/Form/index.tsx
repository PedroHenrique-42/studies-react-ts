import React, { useState } from "react";
import Button from "../button";
import style from './form.module.scss'
import { ITask } from "../../types/task";
import { v4 as uuidv4 } from 'uuid';

interface Props {
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>,
}

function Form({ setTasks }: Props) {
    const [taskName, setTaskName] = useState("");
    const [taskTime, setTaskTIme] = useState("00:00");

    function addTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setTasks(oldTasks =>
            [
                ...oldTasks,
                {
                    taskName,
                    taskTime,
                    selected: false,
                    completed: false,
                    id: uuidv4(),
                }
            ]
        );

        setTaskTIme("00:00");
    }

    return (
        <form className={style.novaTarefa} onSubmit={addTask}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">
                    Adicione um novo estudo
                </label>
                <input
                    type="text"
                    name="tarefa"
                    id="tarefa"
                    placeholder="O que você quer estudar"
                    value={taskName}
                    onChange={event => setTaskName(event.target.value)}
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">
                    Tempo
                </label>
                <input
                    type="time"
                    step="1"
                    name="tempo"
                    id="tempo"
                    min="00:00:00"
                    max="01:30:00"
                    value={taskTime}
                    onChange={event => setTaskTIme(event.target.value)}
                    required
                />
            </div>
            <Button type="submit">
                Adicionar
            </Button>
        </form>
    )
}

export default Form;