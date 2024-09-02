import css from "./SearchBtn.module.css";

export default function SearchBtn({ children }) {
  return (
    <button className={css.searchBtn} type="submit">
      {children}
    </button>
  );
}