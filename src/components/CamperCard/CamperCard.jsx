import { Link } from "react-router-dom";
import css from "./CamperCard.module.css";

export default function CamperCard({
  id,
  name,
  price,
  rating,
  location,
  description,
  reviews,
  gallery,
}) {
  return (
    <div>
      <div>
        <img src={gallery[0].thumb} alt={name} />
      </div>
      <h2>{name}</h2>
      <p>{price}</p>
      <p>
        {rating}
        <span>
          "({reviews.length})" Reviews
        </span>
      </p>
      <p>{location}</p>
      <p>{description}</p>

      <Link to={`/campers/${id}`}>Show more</Link>
    </div>
  );
}
