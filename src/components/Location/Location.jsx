import css from './Location.module.css';
import sprite from "../../assets/sprite.svg"

export default function Location({children}) {
    
    return (
        <div>
            <h2 className={css.locTitle}>{children}</h2>
            <svg className={css.icon}>
                <use xlinkHref={`${sprite}#location`}></use>
            </svg>
            <input type='search' />
        </div>
    )
}