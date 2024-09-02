import { Toaster } from "react-hot-toast";

import { useDispatch, useSelector } from "react-redux";
import { Suspense, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { selectCampers, selectError, selectLoading } from "../../redux/campers/selectors.js";
import { fetchCamperById } from "../../redux/campers/operations.js";

import CamperInfo from "../../components/CamperInfo/CamperInfo.jsx";
import CamperInfoLinks from "../../components/CamperInfoLinks/CamperInfoLinks.jsx";
import BookingForm from "../../components/BookingForm/BookingForm.jsx";
import Loader from "../../components/Loader/Loader.jsx";

import css from "./CamperPage.module.css";

export default function CamperPage() {
  const dispatch = useDispatch();
  const { currentItem } = useSelector(selectCampers);
  const { id } = useParams();

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  return (
    <section className={css.camper}>
      {loading && <Loader isLoading={loading} />}
      {currentItem && (
        <div className={css.container}>
          <CamperInfo camper={currentItem} />
          <CamperInfoLinks />
          <div className={css.secondContainer}>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
            <BookingForm />
          </div>
        </div>
      )}
      <Toaster position="top-right"/>
    </section>
  );
}
