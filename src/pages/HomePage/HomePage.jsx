import PageTitle from "../../components/PageTitle/PageTitle";
import ViewNowButton from '../../components/ViewNowButton/ViewNowButton';
import css from "./HomePage.module.css";



export default function HomePage() {

    return (

        <div className={css.homePage}>
            <div className={css.homeContent}>
                <PageTitle>Campers of your dreams</PageTitle>
                <p className={css.subtitle}>You can find everything you want in our catalog</p>
                <ViewNowButton/>
            </div>
        </div>
    )
}