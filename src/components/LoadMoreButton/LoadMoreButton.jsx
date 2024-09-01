import css from "./LoadMoreButton.module.css";

export default function LoadMoreButton({ onClick, disabled }) {
  return (
    <button 
      className={css.loadMoreBtn} 
      onClick={onClick} 
      disabled={disabled}
      type="button" // Встановлюємо тип кнопки, щоб запобігти перезавантаженню сторінки
    >
      {disabled ? "No more campers to load" : "Load more"}
    </button>
  );
}
