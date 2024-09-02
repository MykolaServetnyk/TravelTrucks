import css from "./BadgesList.module.css";
import BadgesItem from "../BadgesItem/BadgesItem";

export default function BadgesList({camper}) {
  
  const { transmission, engine, AC, bathroom, kitchen, TV, radio, refrigerator, microwave, gas, water } = camper;
  const booleanItems = [
    { label: "AC", value: AC },
    { label: "Bathroom", value: bathroom },
    { label: "Kitchen", value: kitchen },
    { label: "Radio", value: radio },
    { label: "Refrigerator", value: refrigerator },
    { label: "Microwave", value: microwave },
    { label: "Water", value: water },
  ].filter(item => item.value); 
  const camperItems = engine ? [...booleanItems, { label: "Engine", value: engine }] : booleanItems;

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
