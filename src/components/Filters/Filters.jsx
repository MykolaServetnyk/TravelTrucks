import toast from "react-hot-toast";
import { Field, Form, Formik } from "formik";
import clsx from "clsx";
import { nanoid } from 'nanoid';


import sprite from "../../assets/sprite.svg"

import { useId } from "react";
import { useDispatch } from "react-redux";
import { setFilterParams } from "../../redux/filters/filtersSlice.js";
import { fetchCampers } from "../../redux/campers/campersOperations.js";
import { resetPage } from "../../redux/campers/campersSlice.js";

import SearchBtn from "../SearchBtn/SearchBtn.jsx";

import css from "./Filters.module.css";

const initialValues = {
  location: "",
  AC: false,
  transmission: "",
  kitchen: false,
  TV: false,
  bathroom: false,
  form: "",
};

export default function FilterForm() {
  const dispatch = useDispatch();

  const cityFieldId = nanoid();
  const acFieldId = nanoid();
  const transmissionFieldId = nanoid();
  const kitchenFieldId = nanoid();
  const tvFieldId = nanoid();
  const bathroomFieldId = nanoid();

  const handleSubmit = (values, actions) => {
    dispatch(setFilterParams(values));
    dispatch(resetPage());
    dispatch(fetchCampers())
      .unwrap()
      .catch((error) => {
        toast("Sorry, there no such campers were found.", {
          style: {
            color: "#FFFFFF",
            backgroundColor: "#E44848",
          },
        });
      });
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, setFieldValue }) => (
        <Form className={css.formContainer}>
          <label className={css.locationLable} htmlFor={cityFieldId}>
            Location
          </label>
          <Field className={css.locationInput} type="text" name="location" id={cityFieldId} placeholder="City" />
          <svg className={css.locationIcon}>
            <use xlinkHref={`${sprite}#location`}></use>
          </svg>
          <p className={css.filtersTitlle}>Filters</p>
          <h3 className={css.searchParamsTitle}>Vehicle equipment</h3>
          <ul className={css.equipmentList}>
            <li>
              <label htmlFor={acFieldId}>
                <Field className={css.visuallyHidden} type="checkbox" name="AC" id={acFieldId} />
                <span data-custom-checkbox="true" className={css.custom}>
                  <svg className={css.icon}>
                    <use xlinkHref={`${sprite}#ac`}></use>
                  </svg>
                  AC
                </span>
              </label>
            </li>
            <li>
              <label htmlFor={transmissionFieldId}>
                <Field
                  className={css.visuallyHidden}
                  type="checkbox"
                  name="transmission"
                  id={transmissionFieldId}
                  checked={values.transmission === "automatic"}
                  onChange={() => setFieldValue("transmission", values.transmission === "automatic" ? "" : "automatic")}
                />
                <span className={css.custom}>
                  <svg className={css.icon}>
                    <use xlinkHref={`${sprite}#automat`}></use>
                  </svg>
                  Automatic
                </span>
              </label>
            </li>
            <li>
              <label htmlFor={kitchenFieldId}>
                <Field className={css.visuallyHidden} type="checkbox" name="kitchen" id={kitchenFieldId} />
                <span className={css.custom}>
                  <svg className={css.icon}>
                    <use xlinkHref={`${sprite}#kitchen`}></use>
                  </svg>
                  Kitchen
                </span>
              </label>
            </li>
            <li>
              <label htmlFor={tvFieldId}>
                <Field className={css.visuallyHidden} type="checkbox" name="TV" id={tvFieldId} />
                <span className={css.custom}>
                  <svg className={css.icon}>
                    <use xlinkHref={`${sprite}#tv`}></use>
                  </svg>
                  TV
                </span>
              </label>
            </li>
            <li>
              <label htmlFor={bathroomFieldId}>
                <Field className={css.visuallyHidden} type="checkbox" name="bathroom" id={bathroomFieldId} />
                <span className={css.custom}>
                  <svg className={css.icon}>
                    <use xlinkHref={`${sprite}#bathroom`}></use>
                  </svg>
                  Bathroom
                </span>
              </label>
            </li>
          </ul>
          <h3 className={css.searchParamsTitle}>Vehicle type</h3>
          <ul className={css.typeList}>
            <li>
              <label>
                <Field className={css.visuallyHidden} type="radio" name="form" value="panelTruck" />
                <span className={css.custom}>
                  <svg className={css.icon}>
                    <use xlinkHref={`${sprite}#van`}></use>
                  </svg>
                  Van
                </span>
              </label>
            </li>
            <li>
              <label>
                <Field className={css.visuallyHidden} type="radio" name="form" value="fullyIntegrated" />
                <span className={clsx(css.custom, css.special)}>
                  <svg className={css.icon}>
                    <use xlinkHref={`${sprite}#fully`}></use>
                  </svg>
                  Fully Integrated
                </span>
              </label>
            </li>
            <li>
              <label>
                <Field className={css.visuallyHidden} type="radio" name="form" value="alcove" />
                <span className={css.custom}>
                  <svg className={css.icon}>
                    <use xlinkHref={`${sprite}#alcove`}></use>
                  </svg>
                  Alcove
                </span>
              </label>
            </li>
          </ul>
          <SearchBtn>Search</SearchBtn>
        </Form>
      )}
    </Formik>
  );
}
