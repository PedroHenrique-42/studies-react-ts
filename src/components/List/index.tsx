import React from 'react';
import style from './list.module.scss'
import Item from './item';

function List() {
    const tasks = [
        {
            taskName: 'React',
            taskTime: '02:00:00'
        },
        {
            taskName: 'Javascript',
            taskTime: '01:00:00'
        },
        {
            taskName: 'Typescript',
            taskTime: '03:00:00'
        },
    ]

    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((task, index) => (
                    <Item
                        key={index}
                        {...task}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;