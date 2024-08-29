import css from './VehicleEquipment.module.css';
import sprite from "../../assets/sprite.svg";

export default function VehicleEquipment() {

    return (
        <div>
            <ul className={css.list}>
                <li className={css.equipItem}>
                    <svg className={css.icon}>
                        <use xlinkHref={`${sprite}#ac`}></use>
                    </svg>AC</li>
                <li className={css.equipItem}>
                    <svg className={css.icon}>
                        <use xlinkHref={`${sprite}#automat`}></use>
                    </svg>Automatic</li>
                <li className={css.equipItem}>
                    <svg className={css.icon}>
                        <use xlinkHref={`${sprite}#kitchen`}></use>
                    </svg>Kitchen</li>
                <li className={css.equipItem}>
                    <svg className={css.icon}>
                        <use xlinkHref={`${sprite}#tv`}></use>
                    </svg>TV</li>
                <li className={css.equipItem}>
                    <svg className={css.icon}>
                        <use xlinkHref={`${sprite}#bathroom`}></use>
                    </svg>Bathroom</li>
            </ul>
        </div>
    )
}