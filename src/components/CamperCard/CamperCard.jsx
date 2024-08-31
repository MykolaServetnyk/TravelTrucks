import { Link } from "react-router-dom";
import css from "./CamperCard.module.css";
import sprite from "../../assets/sprite.svg"

export default function CamperCard({
    id = "no-data",
    name = "Unnamed Camper",
    price = 0.0,
    rating = 0,
    location = "Unknown location",
    description = "No description available",
    reviews = [],
    gallery = [{ thumb: "default-image-url.jpg" }],
}) 
{
    const priceNumber = parseFloat(price);
    const priceFormat = !isNaN(priceNumber) ? priceNumber.toFixed(2) : "0.00";
    
     const slicedText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };
    const slicedDescription = slicedText(description, 61);
    
  return (
    <div className={css.itemCard}>
          <div
            className={css.cardImg}
            style={{ backgroundImage: `url(${gallery[0].thumb})` }}
            role="img"
            aria-label={name}>
            {/* <img className={css.cardImg} src={gallery[0].thumb} alt={name} /> */}
        </div>
          <div>
        <div className={css.cardHead}>
                <p>{name}</p>
            <div className={css.priceFav}>
                <p className={css.price}><span>&euro;</span>{priceFormat}</p>
                <button className={css.favBtn}>
                    <svg className={css.favoIcon}>
                        <use xlinkHref={`${sprite}#heart`}></use>
                    </svg>
                </button>
            </div>
        </div>
            <p className={css.reviews}>
                <img src="./src/assets/rating.png" alt="Rating" />
                {rating}
                <span>
                ({reviews.length} Reviews)
                </span>
            </p>
            <div className={css.location}>
                <svg className={css.locIcon}>
                    <use xlinkHref={`${sprite}#location`}></use>
                </svg> 
                <p>{location}</p>
            </div>
            <p className={css.description}>{slicedDescription}</p>

      <Link to={`/campers/${id}`}><button className={css.showMoreBtn}>Show more</button></Link>
          </div> 
    </div>
  );
}
