import { useState, useEffect } from "react";
import axios from 'axios';
import Sidebar from "../../Components/Sidebar/Sidebar";
import NavBar from "../../Components/NavBar/NavBar";
import SpeciesCard from "../../Components/SpeciesCard/SpeciesCard";
import {Results} from "../../Components/SpeciesCard/SpeciesCard";
import speciesStyles from "./Species.module.css";
import searchIcon from "../../assets/search.svg";
import backArrow from "../../assets/arrow-point-to-right.svg";
import {IoIosArrowBack} from "react-icons/io";
import {IoIosArrowForward} from "react-icons/io";

const Species = () => {
    const [species, setSpecies] = useState<Results | null>(null);
    
        useEffect(() => {
            try {
                const fetchSpecies = async () => {
                    const {
                      data,
                    } = await axios.get(`https://swapi.dev/api/species/`);
                    setSpecies(data);
                  };
                  fetchSpecies();
            } catch (error) {
                console.log(error)
            }   
          }, []);
          console.log(species)
    return (
        <div className={speciesStyles.grid}>
            <div>
                <Sidebar />
            </div>
            <div className={speciesStyles.right}>
                <div className={speciesStyles.rightTop}>
                    <NavBar />
                    <div className={speciesStyles.nav}>
                    <div className={speciesStyles.navflex}>
                            <p><img src={backArrow} alt=""/> Back</p>
                            <p>{species?.count} Total</p>
                            <p>Showing 1-10 of {species?.count}</p>
                            <p><IoIosArrowBack /></p>
                            <p><IoIosArrowForward /></p>
                        </div>
                        <div className={speciesStyles.search}>
                            <input type="text"  placeholder="Search for vehicle" />
                            <img src={searchIcon} alt=""/>
                        </div>
                    </div>
                </div>
                <div className={speciesStyles.bigCard}>
                   {species && <SpeciesCard species={species}/>}
                </div>
            </div>
            
        </div>
    )
}

export default Species
