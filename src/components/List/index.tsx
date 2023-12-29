import style from './list.module.scss'
import Item from './item';
import { ITask } from '../../types/task';

interface Props {
    tasks: ITask[],
    selectTask: (selectedTask: ITask) => void
}

export default function List({ tasks, selectTask }: Props) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((task) => (
                    <Item
                        selectTask={selectTask}
                        {...task}
                        key={task.id}
                    />
                ))}
            </ul>
        </aside>
    )
}