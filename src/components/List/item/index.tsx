import { ITask } from '../../../types/task'
import style from '../list.module.scss'

export default function Item({ taskName, taskTime, selected, completed, id } : ITask) {
    console.log('Item atual', taskName, taskTime, selected, completed, id)

    return (
        <li className={style.item}>
            <h3>{taskName}</h3>
            <span>{taskTime}</span>
        </li>
    )
}   