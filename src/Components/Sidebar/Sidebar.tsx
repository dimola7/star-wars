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
            <ul>
                <li><img src={dashboard} alt=""/> Dashboard</li>
                <li><img src={building} alt=""/> Starships</li>
                <li><img src={shopping} alt=""/> People</li>
                <li><img src={shopping} alt=""/> Vehicles</li>
                <li><img src={menu} alt=""/> Species</li>
            </ul>
        </div>
    )
}

export default Sidebar
