import CampersList from "../../components/CampersList/CampersList";
import Filters from "../../components/Filters/Filters";
import LoadMoreButton from "../../components/LoadMoreButton/LoadMoreButton";
import { getCampers } from "../../campers-api";
import { useEffect, useState } from "react";
import css from "./CatalogPage.module.css";

export default function CatalogPage() {
  const [campers, setCampers] = useState([]); // Зберігає дані кемперів
  const [loading, setLoading] = useState(false); // Стан завантаження
  const [error, setError] = useState(false); // Стан помилки
  const [page, setPage] = useState(1); // Поточна сторінка
  const [hasMore, setHasMore] = useState(true); // Флаг, що вказує на наявність більше кемперів

  useEffect(() => {
    async function fetchCampers() {
      setLoading(true); // Починаємо завантаження

      try {
        const data = await getCampers(page); // Отримуємо дані з API
        if (data.items.length === 0) {
          setHasMore(false); // Якщо більше немає даних, встановлюємо hasMore в false
        } else {
          setCampers((prevCampers) => [...prevCampers, ...data.items]); // Додаємо нові кемпери до списку
        }
      } catch (error) {
        console.error(error.message);
        setError(true);
      } finally {
        setLoading(false); // Завершуємо завантаження
      }
    }

    fetchCampers();
  }, [page]); // Викликаємо useEffect тільки при зміні сторінки

  // Функція для завантаження більше кемперів
  const loadMoreCampers = () => {
    if (hasMore && !loading) { // Перевірка, щоб не завантажувати повторно, якщо дані вже завантажуються або їх більше немає
      setPage((prevPage) => prevPage + 1); // Збільшуємо номер сторінки для завантаження наступних кемперів
    }
  };

  return (
    <div>
      {loading && page === 1 && <p>Loading...</p>} {/* Відображаємо повідомлення "Loading..." лише для першої сторінки */}
      {error && <p>Something went wrong...</p>}
      {!loading && !error && campers.length > 0 && (
        <div className={css.catalogCont}>
          <Filters />
          <CampersList campers={campers} />
        </div>
      )}
      {hasMore && (
        <LoadMoreButton onClick={loadMoreCampers} disabled={loading} />
      )} {/* Відображаємо кнопку лише якщо є ще дані для завантаження */}
      {!hasMore && <p>No more campers to load.</p>} {/* Повідомлення про закінчення даних */}
    </div>
  );
}
