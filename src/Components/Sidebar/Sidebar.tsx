import { Link } from "react-router-dom";
import sidebarStyles from"./Sidebar.module.css";
import logo from "../../assets/Star wars logo.png";
import dashboard from "../../assets/dashboard.svg";
import building from "../../assets/building.svg";
import shopping from "../../assets/shopping-basket (1).svg";
import menu from "../../assets/menu.svg";

const Sidebar = () => {
    return (
        <div className={sidebarStyles.body}>
            <div><img className={sidebarStyles.logo} src={logo} alt=""/></div>
            <div className={sidebarStyles.sideList}>
                <Link to="/dashboard">
                    <div><img src={dashboard} alt=""/> Dashboard</div>
                </Link>
                <Link to="/starships">
                    <div><img src={building} alt=""/> Starships</div>
                </Link>
                <Link to="/people">
                    <div><img src={shopping} alt=""/> People</div>
                </Link>
                <Link to="/vehicles">
                    <div><img src={shopping} alt=""/> Vehicles</div>
                </Link>
                <Link to="/species">
                    <div><img src={menu} alt=""/> Species</div>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar
