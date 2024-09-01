import css from "./BadgesItem.module.css";
import sprite from "../../assets/sprite.svg";
import getIcon from "../../getIcon";

export default function BadgesItem({ label, value }) {

  const firstLetter = (text) => {
    if (!text) return "";
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  return (
      <>
      {typeof value === 'string' && value ? (
          <p className={css.badgesItem}>
            <svg className={css.icon}>
                <use xlinkHref={`${sprite}${getIcon(label)}`}></use>
            </svg> 
                 {firstLetter(value)} 
        </p>
      ) : (
          <p className={css.badgesItem}>
            <svg className={css.icon}>
                <use xlinkHref={`${sprite}${getIcon(label)}`}></use>
            </svg>{label}
        </p> 
      )}
      </>
  );
}
