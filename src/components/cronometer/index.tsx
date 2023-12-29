import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/task";
import Button from "../button";
import Clock from "./clock";
import style from './cronometer.module.scss'

interface Props {
    selectedTask?: ITask,
    finishTask: () => void
}

export default function Cronometer({ selectedTask, finishTask}: Props) {
    const [time, setTime] = useState<number>();

    useEffect(() => {
        if(selectedTask?.taskTime) {
            setTime(timeToSeconds(selectedTask.taskTime));
        }
    }, [selectedTask]);

    function regressive(counter: number = 0) {
        setTimeout(() => {
            if (counter > 0) {
                setTime(counter -1);
                return regressive(counter - 1);
            }
            finishTask();
        }, 1000);
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Clock time={time}/>
            </div>
            <Button onClick={() => regressive(time)}>
                Começar!
            </Button>
        </div>
    )
}