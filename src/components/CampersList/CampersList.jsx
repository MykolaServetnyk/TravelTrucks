import css from "./CampersList.module.css";
import CamperCard from "../CamperCard/CamperCard";

export default function CampersList({ campers }) {
  // Додана перевірка на випадок, якщо campers буде undefined або null
  if (!campers || campers.length === 0) {
    return <p>No campers available.</p>; // Або можна повернути null або інший компонент
  }

  return (
    <div>
      <ul className={css.itemsList}>
        {campers.map((camper) => (
          <li key={camper.id}> {/* Використовуйте camper.id як унікальний ключ */}
            <CamperCard {...camper} />
          </li>
        ))}
      </ul>
    </div>
  );
}
