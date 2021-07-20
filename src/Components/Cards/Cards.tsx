import cardStyles from "./Cards.module.css";
import filmIcon from "../../assets/video-camera (1).svg";

const Cards = () => {
    return (
        <div className={cardStyles.flex}>
            <div className={cardStyles.card}>
                <div>Films</div>
                <div><img src={filmIcon} alt="" className={cardStyles.smallCardIcon}/></div>
            </div>
            <div className={cardStyles.card}>Starships</div>
            <div className={cardStyles.card}>People</div>
            <div className={cardStyles.card}>Vehicles</div>
            <div className={cardStyles.card}>Species</div>
        </div>
    )
}

export default Cards
