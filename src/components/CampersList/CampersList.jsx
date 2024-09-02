import { useDispatch, useSelector } from "react-redux";
import { selectCampers, selectError } from "../../redux/campers/campersSelectors.js";
import { fetchCampers } from "../../redux/campers/campersOperations.js";
import { incrementPage } from "../../redux/campers/campersSlice.js";

import LoadMoreButton from "../LoadMoreButton/LoadMoreButton.jsx";
import CamperCard from "../CamperCard/CamperCard.jsx";

import css from "./CampersList.module.css";

export default function CampersList() {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const error = useSelector(selectError);
  const { morePages } = useSelector(selectCampers);
  const { items = [] } = campers;

  const handleLoadMore = () => {
    if (morePages) {
      dispatch(incrementPage());
      dispatch(fetchCampers());
    }
  };
  return (
    <div>
      <ul className={css.itemsList}>
        {items.map((camper) => (
          <li key={camper.id}>
            <CamperCard camper={camper} />
          </li>
        ))}
      </ul>
      {!error && morePages && <LoadMoreButton onClick={handleLoadMore}>Load more</LoadMoreButton>}
    </div>
  );
}
