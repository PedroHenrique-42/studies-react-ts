import style from '../list.module.scss'

export default function Item({ taskName, taskTime } : {taskName: String, taskTime: String}) {
    return (
        <li className={style.item}>
            <h3>{taskName}</h3>
            <span>{taskTime}</span>
        </li>
    )
}   