import { ITask } from '../../../types/task'
import style from './item.module.scss'

interface Props extends ITask {
    selectTask: (selectedTask: ITask) => void,
}

export default function Item(
    {
        taskName,
        taskTime,
        selected,
        completed,
        id,
        selectTask
    }: Props
) {
    return (
        <li
            className={`
                ${style.item} 
                ${selected ? style.itemSelecionado : ''} 
                ${completed ? style.itemCompletado : ''}
            `}
            onClick={() => !completed && selectTask({
                taskName,
                taskTime,
                selected,
                completed,
                id,
            })}
        >
            <h3>{taskName}</h3>
            <span>{taskTime}</span>
            {completed && <span className={style.concluido} aria-label='tarefa completada'></span>}
        </li>
    )
}   