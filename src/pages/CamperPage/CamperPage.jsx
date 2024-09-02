import css from "./CamperPage.module.css";


export default function CamperPage() {
    return (
    <div>
        <div>
            <p>{name}</p>
            <div className={css.priceFav}>
                <p className={css.price}>
                    <span>&euro;</span>
                        {priceFormat}
                </p>
            </div>
            <ul>
        <li>
          <Link to="bank">Bank</Link>
        </li>
        <li>
          <Link to="receipt">Receipt</Link>
        </li>
      </ul>    
        </div> 
    </div>
        
    )
}