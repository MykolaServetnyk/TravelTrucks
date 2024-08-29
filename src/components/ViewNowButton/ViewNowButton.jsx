import { useNavigate } from 'react-router-dom';
import css from './ViewNowButton.module.css';

export default function ViewNowButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/catalog'); 
  };

  return (
    <button type='button' className={css.viewBtn} onClick={handleClick}>
      View Now
    </button>
  );
}
