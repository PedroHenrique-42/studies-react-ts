import style from './list.module.scss'
import Item from './item';
import { ITask } from '../../types/task';

export default function List({ tasks }: { tasks: ITask[] }) {
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