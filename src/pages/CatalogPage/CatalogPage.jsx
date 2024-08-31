import CampersList from "../../components/CampersList/CampersList";
import Filters from "../../components/Filters/Filters";
import { getCampers } from "../../campers-api";
import { useEffect, useState } from "react";
import css from "./CatalogPage.module.css";

export default function CatalogPage() {
  const [campers, setCampers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchCampers() {
      setLoading(true); // Встановлення loading в true перед запитом
      try {
        const data = await getCampers();
        setCampers(data);
      } catch (error) {
        console.log(error.message);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchCampers();
  }, []);

  return (
    <div className={css.catalogCont}>
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong...</p>}
      {!loading && !error && (
        <>
          <Filters />
          <CampersList campers={campers.items} />
        </>
      )}
    </div>
  );
}
