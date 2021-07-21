import { useState, useEffect } from "react";
import axios from 'axios';
import Sidebar from "../../Components/Sidebar/Sidebar";
import NavBar from "../../Components/NavBar/NavBar";
import VehicleCard from "../../Components/VehicleCard/VehicleCard";
import {Results} from "../../Components/VehicleCard/VehicleCard"
import vehicleStyles from "./Vehicles.module.css";
import searchIcon from "../../assets/search.svg";
import backArrow from "../../assets/arrow-point-to-right.svg";
import {IoIosArrowBack} from "react-icons/io";
import {IoIosArrowForward} from "react-icons/io";

const Vehicles = () => {
    const [vehicles, setVehicles] = useState<Results | null>(null);
    
        useEffect(() => {
            try {
                const fetchVehicles = async () => {
                    const {
                      data,
                    } = await axios.get(`https://swapi.dev/api/vehicles/`);
                    setVehicles(data);
                  };
                  fetchVehicles();
            } catch (error) {
                console.log(error)
            }   
          }, []);
          console.log(vehicles)
    return (
        <div className={vehicleStyles.grid}>
            <div>
                <Sidebar />
            </div>
            <div className={vehicleStyles.right}>
                <div className={vehicleStyles.rightTop}>
                    <NavBar />
                    <div className={vehicleStyles.nav}>
                    <div className={vehicleStyles.navflex}>
                            <p><img src={backArrow} alt=""/> Back</p>
                            <p>{vehicles?.count} Total</p>
                            <p>Showing 1-10 of {vehicles?.count}</p>
                            <p><IoIosArrowBack /></p>
                            <p><IoIosArrowForward /></p>
                        </div>
                        <div className={vehicleStyles.search}>
                            <input type="text"  placeholder="Search for vehicle" />
                            <img src={searchIcon} alt=""/>
                        </div>
                    </div>
                </div>
                <div className={vehicleStyles.bigCard}>
                   {vehicles && <VehicleCard vehicles={vehicles}/>}
                </div>
            </div>
            
        </div>
    )
}

export default Vehicles
