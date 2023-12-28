import Button from "../button";
import Clock from "./clock";
import style from './cronometer.module.scss'

export default function Cronometer() {
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Clock />
            </div>
            <Button>
                Começar!
            </Button>
        </div>
    )
}