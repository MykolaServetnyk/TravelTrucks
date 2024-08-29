import Filters from '../Filters/Filters';
import Location from '../Location/Location';
import SearchBtn from '../SearchBtn/SearchBtn';
import css from './SearchBar.module.css';

export default function SearchBar() {
    
    return (
        <div>
            <Location>Location</Location>
            <Filters />
            <SearchBtn/>
        </div>
    )
}