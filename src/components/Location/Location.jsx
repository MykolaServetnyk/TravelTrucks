import { Field, Form, Formik } from "formik";

import css from './Location.module.css';

export default function Location() {
    
    return (
    <div className={css.location}>
      <label className={css.locTitle} htmlFor={cityFieldId}>Location</label>
      <div className={css.fieldBox}>
          <svg className={css.icon}>
            <use xlinkHref={`${sprite}#location`}></use>
          </svg>
      <Field className={css.field} type="text" name="location" id={cityFieldId} placeholder="City" />
      </div>
    </div>
  );
}