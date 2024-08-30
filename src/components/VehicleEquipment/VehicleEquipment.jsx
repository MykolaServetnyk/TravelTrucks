import css from './VehicleEquipment.module.css';
import sprite from "../../assets/sprite.svg";
import clsx from "clsx";

export default function VehicleEquipment({ selectedEquipment, setSelectedEquipment }) {

  const toggleFilter = (filter) => {
    setSelectedEquipment(prevFilters =>
      prevFilters.includes(filter)
        ? prevFilters.filter(f => f !== filter)
        : [...prevFilters, filter]
    );
  };

  // Об'єкт, що містить дані про кожен тип обладнання та його іконку
  const equipmentTypes = [
    { name: 'AC', icon: 'ac' },
    { name: 'Automatic', icon: 'automat' },
    { name: 'Kitchen', icon: 'kitchen' },
    { name: 'TV', icon: 'tv' },
    { name: 'Bathroom', icon: 'bathroom' }
  ];

  return (
    <div className={css.equipment}>
      <h5 className={css.subtitle}>Vehicle equipment</h5>
      <ul className={css.list}>
        {equipmentTypes.map((equipment, index) => (
          <li key={index}>
            <button
              type="button"
              className={clsx(css.equipItem, {
                [css.active]: selectedEquipment.includes(equipment.name)
              })}
              onClick={() => toggleFilter(equipment.name)}
            >
              <svg className={css.icon}>
                <use xlinkHref={`${sprite}#${equipment.icon}`}></use>
              </svg>
              {equipment.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
