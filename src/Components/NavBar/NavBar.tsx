import navbarStyles from "./NavBar.module.css";
import profile from "../../assets/images.png";

const NavBar = () => {
    return (
        <div className={navbarStyles.body}>
            <p>Dashboard</p>
            <img src={profile} alt=""/>
        </div>
    )
}

export default NavBar
