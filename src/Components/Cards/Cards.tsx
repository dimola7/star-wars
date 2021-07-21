import cardStyles from "./Cards.module.css";
import filmIcon from "../../assets/video-camera (1).svg";
import ufo from "../../assets/ufo.svg";
import students from "../../assets/group-of-students.svg";
import taxi from "../../assets/taxi.svg";
import {Link} from "react-router-dom";
import genetics from "../../assets/phylogenetics.svg";

const Cards = () => {
    return (
        <div className={cardStyles.flex}>
            <Link to="/dashboard">
            <div className={cardStyles.card}>
                <div className={cardStyles.title}>
                    <div>Films</div>
                    <div>200</div>
                </div>
                <div><img src={filmIcon} alt="" className={cardStyles.smallCardIcon}/></div>
            </div>
            </Link>
            <Link to="/starships">
                <div className={cardStyles.card}>
                    <div className={cardStyles.title}>Starships</div>
                    <div><img src={ufo} alt="" className={cardStyles.smallCardIcon2}/></div>
                </div>
            </Link>
            <Link to="/people">
                <div className={cardStyles.card}>
                    <div className={cardStyles.title}>People</div>
                    <div><img src={students} alt="" className={cardStyles.smallCardIcon3}/></div>
                </div>
            </Link>
            <Link to="/vehicles">
                <div className={cardStyles.card}>
                    <div className={cardStyles.title}>Vehicles</div>
                    <div><img src={taxi} alt="" className={cardStyles.smallCardIcon4}/></div>
                </div>
            </Link>
            <Link to="/species">
                <div className={cardStyles.card}>
                    <div className={cardStyles.title}>Species</div>
                    <div><img src={genetics} alt="" className={cardStyles.smallCardIcon5}/></div>
                </div>
            </Link>
        </div>
    )
}

export default Cards
