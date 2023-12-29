import style from './clock.module.scss'

interface Props {
    time?: number
}

export default function Clock({ time = 0 }: Props) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [tenOfMinutes, unitsOfMinutes] = String(minutes).padStart(2, '0');
    const [tenOfSeconds, unitsOfSeconds] = String(seconds).padStart(2, '0');;

    return (
        <>
            <span className={style.relogioNumero}>{tenOfMinutes}</span>
            <span className={style.relogioNumero}>{unitsOfMinutes}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{tenOfSeconds}</span>
            <span className={style.relogioNumero}>{unitsOfSeconds}</span>
        </>
    )
}