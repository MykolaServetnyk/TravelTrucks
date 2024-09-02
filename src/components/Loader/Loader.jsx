import css from './Loader.module.css';
import RingLoader from "react-spinners/RingLoader";

const override = {
  display: "block",
  margin: "0 auto",
};

export default function Loader({ isLoading }) {
  return (
    <div className={css.spinerContainer}>
      <RingLoader
        color={"#d84343"}
        loading={isLoading}
        cssOverride={override}
        size={70}
        aria-label="Loading"
        data-testid="loader"
      />
    </div>
  );
}
