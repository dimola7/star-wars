import { useState, useEffect } from "react";
import axios from 'axios';
import Sidebar from "../../Components/Sidebar/Sidebar";
import NavBar from "../../Components/NavBar/NavBar";
import Cards from "../../Components/Cards/Cards";
import FilmCard from "../../Components/FilmCard/FilmCard";
import dashboardStyles from "./Dashboard.module.css";
import {Results } from '../../Components/FilmCard/FilmCard'

const Dashboard = () => {
    const [films, setFilms] = useState<Results | null>(null);

    useEffect(() => {
        try {
            const fetchFilms = async () => {
                const {
                  data,
                } = await axios.get(`https://swapi.dev/api/films/`);
                setFilms(data);
              };
              fetchFilms();
        } catch (error) {
            console.log(error)
        }   
      }, []);
      console.log(films)

    return (
        <div className={dashboardStyles.grid}>
            <div>
                <Sidebar />
            </div>
            <div className={dashboardStyles.right}>
                <div className={dashboardStyles.rightTop}>
                    <NavBar />
                    <div className={dashboardStyles.nav}>
                    <div className={dashboardStyles.dropdown}>
                        <select name="" id="" required>
                            <option>Current Year</option>
                        </select>
                        <select name="" id="" required>
                            <option>Current Week</option>
                        </select>
                    </div>
                    </div>
                </div>
                <div>
                    <Cards />
                </div>
                <div className={dashboardStyles.bigCard}>
                   {films && <FilmCard films={films}/>}
                </div>
            </div>
        </div>
    )
}

export default Dashboard
