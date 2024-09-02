import CampersList from "../../components/CampersList/CampersList";
import Loader from "../../components/Loader/Loader";
import Filters from "../../components/Filters/Filters";

import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCampers } from "../../redux/campers/campersOperations.js";
import { selectLoading } from "../../redux/campers/campersSelectors.js";

import css from "./CatalogPage.module.css";

export default function CatalogPage() {
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <section className={css.catalog}>
      {loading && <Loader isLoading={loading} />}
        <div className={css.catalogCont}>
          <Filters />
          <CampersList/>
        </div>  
          <Toaster position="top-right"/>
    </section>
  );
}
