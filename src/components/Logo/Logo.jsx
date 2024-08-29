import css from './Logo.module.css';
import logo from '../../assets/travelTrucksLogo.svg'

export default function Logo() {

    return (
        <>
            <a href="/" aria-label="TravelTrucks Logo" className={css.logo}>
                <img src={logo} alt="Logo" />
            </a>

        </>
    )
}