import css from "./BadgesItem.module.css";
import sprite from "../../assets/sprite.svg";
import getIcon from "../../getIcon";

export default function BadgesItem({ label, value }) {

  // Функція для капіталізації першої літери тексту
  const firstLetter = (text) => {
    if (!text) return "";
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  return (
    <>
      {/* Якщо значення є строкою і не порожнє, показуємо значення */}
      {typeof value === 'string' && value ? (
        <p className={css.badgesItem}>
          <svg className={css.icon}>
            <use xlinkHref={`${sprite}${getIcon(label)}`}></use>
          </svg>
          {firstLetter(value)}
        </p>
      ) : (
        // Інакше показуємо лише мітку
        <p className={css.badgesItem}>
          <svg className={css.icon}>
            <use xlinkHref={`${sprite}${getIcon(label)}`}></use>
          </svg>
          {label}
        </p>
      )}
    </>
  );
}
