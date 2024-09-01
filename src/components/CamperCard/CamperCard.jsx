import { Link } from "react-router-dom";
import css from "./CamperCard.module.css";
import sprite from "../../assets/sprite.svg";
import BadgesList from "../BadgesList/BadgesList";
import ratingImage from "../../assets/rating.png"; // Імпортуємо зображення рейтингу

export default function CamperCard({
  id = "no-data",
  name = "Unnamed Camper",
  price = 0.0,
  rating = 0,
  location = "Unknown location",
  description = "No description available",
  reviews = [],
  gallery = [{ thumb: "default-image-url.jpg" }],
  AC = false,
  bathroom = false,
  kitchen = false,
  radio = false,
  refrigerator = false,
  microwave = false,
  water = false,
  engine = "",
}) {
  const priceNumber = parseFloat(price);
  const priceFormat = !isNaN(priceNumber) ? priceNumber.toFixed(2) : "0.00";

  const slicedText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  const slicedDescription = slicedText(description, 61);

  // Формуємо список бейджів з булевими значеннями
  const booleanItems = [
    { label: "AC", value: AC },
    { label: "Bathroom", value: bathroom },
    { label: "Kitchen", value: kitchen },
    { label: "Radio", value: radio },
    { label: "Refrigerator", value: refrigerator },
    { label: "Microwave", value: microwave },
    { label: "Water", value: water },
  ].filter(item => item.value); // Фільтруємо, щоб залишити тільки ті, що мають значення true

  // Додаємо `engine` тільки якщо він визначений і не є порожнім рядком
  const camperItems = engine ? [...booleanItems, { label: "Engine", value: engine }] : booleanItems;

  return (
    <div className={css.itemCard}>
      <div
        className={css.cardImg}
        style={{ backgroundImage: `url(${gallery[0].thumb})` }}
        role="img"
        aria-label={name}
      ></div>
      <div>
        <div className={css.cardHead}>
          <p>{name}</p>
          <div className={css.priceFav}>
            <p className={css.price}>
              <span>&euro;</span>
              {priceFormat}
            </p>
            <button className={css.favBtn}>
              <svg className={css.favoIcon}>
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
            <p>{location}</p>
          </div>
        </div>
        <p className={css.description}>{slicedDescription}</p>
        <BadgesList camperItems={camperItems} />

        <Link to={`/campers/${id}`}>
          <button className={css.showMoreBtn}>Show more</button>
        </Link>
      </div>
    </div>
  );
}
