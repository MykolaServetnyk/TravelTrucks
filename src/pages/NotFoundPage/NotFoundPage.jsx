import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={css.notFoundContainer}>
      
      <p className={css.notFoundText}>Sorry, page not found. Please, try again...</p>
    </div>
  );
}
