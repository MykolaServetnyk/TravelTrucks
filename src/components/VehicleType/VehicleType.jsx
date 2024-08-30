import css from './VehicleType.module.css';
import sprite from "../../assets/sprite.svg";
import clsx from "clsx";

export default function VehicleType({ selectedVehicleTypes, setSelectedVehicleTypes }) {
  const toggleFilter = (filter) => {
    setSelectedVehicleTypes(prevFilters =>
      prevFilters.includes(filter)
        ? prevFilters.filter(f => f !== filter)
        : [...prevFilters, filter]
    );
  };

  // Додамо об'єкт, що містить дані про кожен тип транспортного засобу та його іконку
  const vehicleTypes = [
    { type: 'Van', icon: 'van' },
    { type: 'Fully Integrated', icon: 'fully' },
    { type: 'Alcove', icon: 'alcove' }
  ];

  return (
    <div className={css.typeCom}>
      <h5 className={css.subtitle}>Vehicle type</h5>
      <ul className={css.typeList}>
        {vehicleTypes.map((vehicle, index) => (
          <li key={index}>
          <button
            type="button"
            className={clsx(css.typeItem, selectedVehicleTypes.includes(vehicle.type) && css.active)}
            onClick={() => toggleFilter(vehicle.type)}
            >
            <svg className={css.icon}>
              <use xlinkHref={`${sprite}#${vehicle.icon}`}></use>
            </svg>
            {vehicle.type}
          </button>
            </li>
        ))}
      </ul>
    </div>
  );
}
