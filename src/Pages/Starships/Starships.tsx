import { useState, useEffect } from "react";
import axios from 'axios';
import Sidebar from "../../Components/Sidebar/Sidebar";
import NavBar from "../../Components/NavBar/NavBar";
import StarshipCard from "../../Components/StarshipCard/StarshipCard";
import shipStyles from "./Starships.module.css";
import {Results} from "../../Components/StarshipCard/StarshipCard";
import searchIcon from "../../assets/search.svg";
import back from "../../assets/arrow-point-to-right.svg";

const Starships = () => {
    const [starships, setStarships] = useState<Results | null>(null);

    useEffect(() => {
        try {
            const fetchStarships = async () => {
                const {
                  data,
                } = await axios.get(`https://swapi.dev/api/starships/`);
                setStarships(data);
              };
              fetchStarships();
        } catch (error) {
            console.log(error)
        }   
      }, []);
      console.log(starships)
    return (
        <div className={shipStyles.grid}>
            <div>
                <Sidebar />
            </div>
            <div className={shipStyles.right}>
                <div className={shipStyles.rightTop}>
                    <NavBar />
                    <div className={shipStyles.nav}>
                        <div className={shipStyles.navflex}>
                            <p><img src={back} alt=""/> Back</p>
                            <p>{starships?.count} Total</p>
                            <p>Showing 1-20 of {starships?.count}</p>
                            <p>b</p>
                            <p>f</p>
                        </div>
                        <div className={shipStyles.search}>
                            <input type="text"  placeholder="Search for starship" />
                            <img src={searchIcon} alt=""/>
                        </div>
                    </div>
                </div>
                <div className={shipStyles.bigCard}>
                   {starships && <StarshipCard starships={starships}/>}
                </div>
            </div>
        </div>
    )
}

export default Starships
