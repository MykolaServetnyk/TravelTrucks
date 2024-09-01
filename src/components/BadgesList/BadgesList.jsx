import css from "./BadgesList.module.css";
import BadgesItem from "../BadgesItem/BadgesItem";

export default function BadgesList({ camperItems = [] }) {
  // Переконуємося, що camperItems — це масив
  if (!Array.isArray(camperItems)) {
    console.error("Expected camperItems to be an array but got:", camperItems);
    return null; // Або поверніть альтернативний JSX-код
    }
    
  return (
    <div className={css.listBox}>
      <ul className={css.badgesList}>
        {camperItems.map((item, index) => (
          <li key={index} className={css.listItem}>
            <BadgesItem label={item.label} value={item.value} />
          </li>
        ))}
      </ul>
    </div>
  );
}
