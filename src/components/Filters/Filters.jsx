import VehicleEquipment from '../VehicleEquipment/VehicleEquipment';
import VehicleType from '../VehicleType/VehicleType';
import css from './Filters.module.css';


export default function Filters() {

    return (
        <div>
            <h2 className={css.filTitle}>Filters</h2>
            <h3 className={css.subtitle}>Vehicle equipment</h3>
            <VehicleEquipment />
            <h3 className={css.subtitle}>Vehicle type</h3>
            <VehicleType/>
        </div>
    )
}