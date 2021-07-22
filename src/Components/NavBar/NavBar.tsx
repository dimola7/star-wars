import { useLocation } from "react-router";
import navbarStyles from "./NavBar.module.css";
import profile from "../../assets/images.png";

const NavBar = () => {
    const  location = useLocation();
    const currentPage = location.pathname.split("/")[1];
    return (
        <div className={navbarStyles.navbarDiv}>
            <p>{currentPage}</p>
            <img src={profile} alt=""/>
        </div>
    )
}

export default NavBar
