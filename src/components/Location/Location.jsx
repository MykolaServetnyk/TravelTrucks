import css from './Location.module.css';
import sprite from "../../assets/sprite.svg"

export default function Location({ location, setLocation }) {
    
    return (
    <div className={css.location}>
      <h2 className={css.locTitle}>Location</h2>
      <div className={css.fieldBox}>
          <svg className={css.icon}>
            <use xlinkHref={`${sprite}#location`}></use>
          </svg>
        <input 
          className={css.field}  
          type="text" 
          id="location" 
          name="location"
          placeholder='City'  
          value={location} 
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
    </div>
  );
}