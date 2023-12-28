import React from 'react';
import style from './list.module.scss'

function List() {
    const tasks = [
        {
            name: 'React',
            time: '02:00:00'
        },
        {
            name: 'Javascript',
            time: '01:00:00'
        },
        {
            name: 'Typescript',
            time: '03:00:00'
        },
    ]

    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} className={style.item}>
                        <h3>{task.name}</h3>
                        <span>{task.time}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default List;