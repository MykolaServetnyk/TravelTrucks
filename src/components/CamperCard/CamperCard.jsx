import { useDispatch, useSelector } from "react-redux";

import { toggleFavorite } from "../../redux/campers/campersSlice.js";
import { selectCampers } from "../../redux/campers/campersSelectors.js";

import { Link } from "react-router-dom";
import css from "./CamperCard.module.css";
import sprite from "../../assets/sprite.svg";

import BadgesList from "../BadgesList/BadgesList";
import ratingImage from "../../assets/rating.png";

export default function CamperCard({camper}) {

  const dispatch = useDispatch();
  const { favorites } = useSelector(selectCampers);
  const isFavorite = favorites.some((item) => item.id === camper.id);

  const { gallery, name, price, rating, reviews, location, description, id } = camper;

  const [country, city] = location.split(", ");
  const swappedLocation = `${city}, ${country}`;

 const handleClick = () => {
    dispatch(toggleFavorite(camper.id));
  };
  
  return (
    
    <div className={css.itemCard}>
      <div
        className={css.cardImg}
        style={{ backgroundImage: `url(${gallery?.[0]?.original || ''})` }}
        role="img"
        aria-label={name}
      ></div>
      <div>
        <div className={css.cardHead}>
          <p>{name}</p>
          <div className={css.priceFav}>
            <p className={css.price}>
              <span>&euro;</span>{price.toFixed(2)}
            </p>
            <button className={css.favBtn} onClick={handleClick}>
              <svg className={isFavorite ? css.isFavoriteIconRed : css.isFavoriteIcon}>
                <use xlinkHref={`${sprite}#heart`}></use>
              </svg>
            </button>
          </div>
        </div>
        <div className={css.revLocBlock}>
          <p className={css.reviews}>
            <img src={ratingImage} alt="Rating" />
            {rating}
            <span>({reviews.length} Reviews)</span>
          </p>
          <div className={css.location}>
            <svg className={css.locIcon}>
              <use xlinkHref={`${sprite}#location`}></use>
            </svg>
            <p>{swappedLocation}</p>
          </div>
        </div>
        <p className={css.description}>{description}</p>
        <BadgesList camper={camper} />

        <Link to={`/campers/${id}`}>
          <button className={css.showMoreBtn}>Show more</button>
        </Link>
      </div>
    </div>
  );
}
